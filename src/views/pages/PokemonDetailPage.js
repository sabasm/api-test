import { fetchPokeApi } from "@/hooks/useServerPokeApi";
import PokemonDetails from "../components/PokemonDetails";
import GoBackButton from "../components/GoBackButton";

export default async function PokemonDetailPage({ params }) {
  // Await params to ensure it's resolved before using its properties.
  const { name } = await Promise.resolve(params);

  try {
    const pokemon = await fetchPokeApi(`/pokemon/${name}`);
    return (
      <div>
        <GoBackButton />
        <hr />
        <PokemonDetails pokemon={pokemon} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching Pokémon details:", error?.message);
    return (
      <div>
        <GoBackButton />
        <p>Error fetching Pokémon details. Please try again later.</p>
      </div>
    );
  }
}