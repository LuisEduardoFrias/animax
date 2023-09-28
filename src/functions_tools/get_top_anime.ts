import { Anime } from "../interfaces/top.anime.ts";

export default async function fetchAnimeData(page: number, limit: number) : Promise<Anime> {
 
  const url = `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error al obtener los datos de anime");
    }

    const data = await response.json();
    return data as Anime;
    
  } catch (error) {
    console.error(error);
    // throw new Error("Error al obtener los datos de anime");
  }
}