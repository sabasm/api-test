import axios from "axios";
import { API } from "@/config";

const pokeApi = axios.create({ baseURL: API.POKE_API_BASE_URL });

pokeApi.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error(`API Error: ${error.response?.status} - ${error.message}`);
        throw error;
    }
);

export default pokeApi;