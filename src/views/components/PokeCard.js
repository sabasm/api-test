import Link from "next/link";

export default function PokeCard({ pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <div>
        <p>Name: {pokemon.name}</p>
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}
      </div>
    </Link>
  );
}
