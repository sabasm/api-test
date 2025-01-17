import PokedexPage from "../views/pages/PokedexPage"
import RandomPokemon from "../views/components/RandomPokemon"
export default async function Home() {
  return (
    <div>
      <RandomPokemon />
      <PokedexPage />
    </div>
  )
}