import PokemonAbilities from "./PokemonDetails/PokemonAbilities";
import PokemonBasicInfo from "./PokemonDetails/PokemonBasicInfo";
import PokemonHeader from "./PokemonDetails/PokemonHeader";
import PokemonStats from "./PokemonDetails/pokemonStats";
import PokemonTypes from "./PokemonDetails/PokemonTypes";

export default function PokemonDetails({ pokemon }) {
  return (
    <div>
      <PokemonHeader name={pokemon.name} sprite={pokemon.sprites?.front_default} />
      <PokemonBasicInfo
        height={pokemon.height}
        weight={pokemon.weight}
        baseExperience={pokemon.base_experience}
      />
      <PokemonTypes types={pokemon.types} />
      <PokemonAbilities abilities={pokemon.abilities} />
      <PokemonStats stats={pokemon.stats} />
    </div>
  );
}
