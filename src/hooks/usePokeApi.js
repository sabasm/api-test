import useSWR from "swr"
import { pokeApi } from "@/network"
import { API } from "@/config"

const fetcher = url => pokeApi.get(url).then(res => res.data)

export function usePokeApi(endpoint) {
  const url = `${API.POKE_API_BASE_URL}${endpoint}`
  const { data, error, mutate } = useSWR(url, fetcher)
  return {
    data,
    loading: !error && !data,
    error,
    mutate
  }
}


