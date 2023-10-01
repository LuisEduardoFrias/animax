
export default async function GetApiJikan<T>(url: string) : Promise<T> {
 
  const _url = `https://api.jikan.moe/v4/${url}`;

  try {
    const response = await fetch(_url);

    if (!response.ok) {
      throw new Error("Error al obtener los datos de anime");
    }

    const data = await response.json();
    return data as T;
    
  } catch (error) {
    console.error(error);
    // throw new Error("Error al obtener los datos de anime");
  }
}