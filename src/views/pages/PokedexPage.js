"use client";
import { useState, useContext, useEffect } from "react";
import { usePokeApi } from "../../hooks/usePokeApi";
import PokeList from "../components/PokeList";
import { PokeContext } from "../../contexts/PokeContext";
import { API } from "@/config";

export default function PokedexPage() {
  const { pokemonList, setPokemonList } = useContext(PokeContext);
  const [pageUrl, setPageUrl] = useState("/pokemon?limit=20");
  const { data, loading, error } = usePokeApi(pageUrl);

  useEffect(() => {
    const fetchPokemonDetails = async (pokemonData) => {
      const detailedPokemons = await Promise.all(
        pokemonData.map(async (pokemon) => {
          const details = await fetch(`${API.POKE_API_BASE_URL}/pokemon/${pokemon.name}`);
          return details.json();
        })
      );
      setPokemonList(detailedPokemons);
    };

    if (data && data.results) {
      fetchPokemonDetails(data.results);
    }
  }, [data, setPokemonList]);

  const extractRelativePath = (fullUrl) => fullUrl.replace(API.POKE_API_BASE_URL, "");

  const handleNext = () => {
    if (data && data.next) {
      const nextUrl = extractRelativePath(data.next);
      setPageUrl(nextUrl);
    }
  };

  const handlePrev = () => {
    if (data && data.previous) {
      const prevUrl = extractRelativePath(data.previous);
      setPageUrl(prevUrl);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  return (
    <div>
      <h1>Pokédex</h1>
      <PokeList pokemons={pokemonList} />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={handlePrev} disabled={!data.previous} style={{ marginRight: "1rem" }}>
          Previous
        </button>
        <button onClick={handleNext} disabled={!data.next}>
          Next
        </button>
      </div>
    </div>
  );
}
