'use client';
import useSWR from "swr";
import { pokeApi } from "@/network";
import { buildApiUrl } from "@/network/api.utils";

/**
 * Custom hook for fetching data from the Poke API on the client-side using SWR.
 * @param {string} endpoint - API endpoint to fetch.
 * @returns {Object} - Contains data, loading state, error, and mutate function.
 */
export function usePokeApi(endpoint) {
  const url = buildApiUrl(endpoint);
  const fetcher = (url) => pokeApi.get(url).then((res) => res.data);

  const { data, error, mutate } = useSWR(url, fetcher);

  return {
    data,
    loading: !error && !data,
    error,
    mutate,
  };
}
