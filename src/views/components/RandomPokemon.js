import { fetchPokeApi } from "@/hooks/useServerPokeApi";
import PokeCard from "./PokeCard";

export default async function RandomPokemon() {
    const generateRandomPokemonId = (maxId = 898) =>
        Math.floor(Math.random() * maxId) + 1;

    try {
        const randomId = generateRandomPokemonId(); // ID between 1 and 898
        const pokemon = await fetchPokeApi(`/pokemon/${randomId}/`);

        return (
            <div>
                <h2>Random Pokémon</h2>
                <PokeCard pokemon={pokemon} />
            </div>
        );
    } catch (error) {
        console.error("Error fetching random Pokémon:", error?.message);
        return (
            <div>
                <h2>Error</h2>
                <p>Failed to fetch a random Pokémon. Please try again later.</p>
            </div>
        );
    }
}
