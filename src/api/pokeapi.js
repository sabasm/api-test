import { fetchPokeApi } from "../hooks/useServerPokeApi"

export default async function handler(req, res) {
  try {
    const data = await fetchPokeApi("/pokemon?limit=20")
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}


