import { API } from "@/config";

/**
 * Builds a complete API URL by appending the given endpoint to the base URL.
 * @param {string} endpoint - The API endpoint (relative path).
 * @param {string} baseUrl - The base URL for the API (default: POKE_API_BASE_URL).
 * @returns {string} - The full API URL.
 * @throws {Error} - If the endpoint or baseUrl is invalid.
 */
export function buildApiUrl(endpoint, baseUrl = API.POKE_API_BASE_URL) {
    if (typeof endpoint !== "string" || !endpoint.trim()) {
        throw new Error("Invalid endpoint: Endpoint must be a non-empty string.");
    }
    if (typeof baseUrl !== "string" || !baseUrl.trim()) {
        throw new Error("Invalid baseUrl: Base URL must be a non-empty string.");
    }
    return endpoint.startsWith("/")
        ? `${baseUrl}${endpoint.slice(1)}`
        : `${baseUrl}${endpoint}`;
}

/**
 * Handles API requests with standardized error handling and extensibility.
 * @param {Function} apiCall - A function returning a Promise for the API call (e.g., axios.get or axios.post).
 * @param {Object} [options={}] - Optional configurations for additional robustness.
 * @param {boolean} [options.rethrow=false] - Whether to rethrow the error for further handling.
 * @returns {Promise<any>} - The resolved response data or structured error information.
 */
export async function handleApiRequest(apiCall, options = {}) {
    const { rethrow = false } = options;

    if (typeof apiCall !== "function") {
        throw new Error("Invalid apiCall: Expected a function that returns a Promise.");
    }

    try {
        const response = await apiCall();
        return response.data;
    } catch (error) {
        const errorDetails = {
            message: error.message,
            status: error.response?.status,
            statusText: error.response?.statusText,
            data: error.response?.data,
            isAxiosError: !!error.isAxiosError, // Axios-specific
        };

        console.error("API Error Details:", errorDetails);

        if (rethrow) {
            throw errorDetails; // Rethrow structured error for consumers
        }

        return {
            error: true,
            ...errorDetails,
        };
    }
}
