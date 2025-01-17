'use client'
import { createContext, useState } from "react"

export const PokeContext = createContext(null)

export function PokeProvider({ children }) {
  const [pokemonList, setPokemonList] = useState([])
  return (
    <PokeContext.Provider value={{ pokemonList, setPokemonList }}>
      {children}
    </PokeContext.Provider>
  )
}