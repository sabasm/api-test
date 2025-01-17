import { pokeApi } from "@/network"

export async function getInitPokemonList(limit = 20) {
  const response = await pokeApi.get(`/pokemon?limit=${limit}`)
  return response.data
}


