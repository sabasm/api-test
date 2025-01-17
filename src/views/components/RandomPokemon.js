import { fetchPokeApi } from "../../hooks/useServerPokeApi"
export default async function RandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1
    const pokemon = await fetchPokeApi(`/pokemon/${randomId}`)
    return (
        <div>
            <h2>Random Pokemon</h2>
            <p>{pokemon.name}</p>
        </div>
    )
}
