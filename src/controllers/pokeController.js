export function getPokemonList(data) {
  return data && data.results ? data.results : []
}
