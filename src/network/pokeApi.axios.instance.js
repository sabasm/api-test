import axios from "axios"
import { POKE_API_BASE_URL } from "../config/api.config"
const pokeApi = axios.create({ baseURL: POKE_API_BASE_URL })
export default pokeApi