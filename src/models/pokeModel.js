export function createPokemon(data) {
  return {
    name: data.name,
    url: data.url,
    sprite: data.sprites ? data.sprites.front_default : null,
    types: data.types ? data.types.map(typeInfo => typeInfo.type.name) : [],
    abilities: data.abilities ? data.abilities.map(abilityInfo => abilityInfo.ability.name) : []
  }
}


