import { fetchPokeApi } from "../hooks/useServerPokeApi";
import { getPokemonList } from "../controllers/pokeController";

export default async function handler(req, res) {
  try {
    const data = await fetchPokeApi("/pokemon?limit=20");
    const processedResults = getPokemonList(data);
    res.status(200).json({ ...data, results: processedResults });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


