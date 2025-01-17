export default function PokeCard({ pokemon }) {
  return (
    <div>
      <p>Name: {pokemon.name}</p>
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
