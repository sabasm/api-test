import PokeCard from "./PokeCard";

export default function PokeList({ pokemons = [] }) {
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <PokeCard key={index} pokemon={pokemon} />
      ))}
    </div>
  );
}
