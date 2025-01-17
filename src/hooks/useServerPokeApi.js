import { pokeApi } from "@/network"
import { API } from "@/config"

export async function fetchPokeApi(endpoint) {
  const url = `${API.POKE_API_BASE_URL}${endpoint}`
  const response = await pokeApi.get(url)
  return response.data
}


