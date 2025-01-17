import { fetchPokeApi } from "@/hooks/useServerPokeApi";
import PokemonDetails from "@/views/components/PokemonDetails";
import GoBackButton from "@/views/components/GoBackButton";
export const revalidate = 86400;
export default async function PokemonDetailPage({ params }) {
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