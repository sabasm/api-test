import { createPokemon } from "@/models/pokeModel";
export function getPokemonList(data) {
  return data && data.results ? data.results.map(rawPokemon => createPokemon(rawPokemon)) : [];
}
