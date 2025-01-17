"use client"
import { useContext, useEffect } from "react"
import { usePokeApi } from "../../hooks/usePokeApi"
import PokeList from "../components/PokeList"
import { PokeContext } from "../../contexts/PokeContext"

export default function PokedexPage() {
  const { data, loading, error } = usePokeApi("/pokemon?limit=20")
  const { pokemonList, setPokemonList } = useContext(PokeContext)

  useEffect(() => {
    if (data && data.results) {
      setPokemonList(data.results)
    }
  }, [data, setPokemonList])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading data.</div>
  
  return (
    <div>
      <h1>Pokédex</h1>
      <PokeList pokemons={pokemonList} />
    </div>
  )
}