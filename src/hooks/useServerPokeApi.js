import { pokeApi } from "@/network";
import { buildApiUrl, handleApiRequest } from "@/network/api.utils";

/**
 * Fetches data from the Poke API on the server-side.
 * @param {string} endpoint - API endpoint to fetch.
 * @returns {Promise<any>} - The fetched data.
 */
export async function fetchPokeApi(endpoint) {
  const url = buildApiUrl(endpoint);
  return handleApiRequest(() => pokeApi.get(url));
}
