
export default async function GetApiJikan<T>(url: string) : Promise<T> {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/${url}`);
     
    if (!response.ok) {
     throw new Error("Error al obtener los datos de anime");
     console.error("Error al obtener los datos de anime");
     return undefined;
    }
    else {
     return (await response.json()) as T;
    }
  } catch (error) {
    console.error(error);
    // throw new Error("Error al obtener los datos de anime");
    return undefined;
  }
}