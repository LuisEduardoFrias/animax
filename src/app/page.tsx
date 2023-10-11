
import Slide ,{ ICard } from '../components/slide/slide'
import styles from './page.module.css'
import { IAnime } from "../interfaces/anime_card.ts";
import GetApiJikan from '../functions_tools/get_api_jikan'

async function animeCardAdacter(page:number, limit:number): Promise<ICard[]> {
 
  const animes = await GetApiJikan<IAnime[]>(`top/anime?page=${page}&limit=${limit}`);
  
  if(!animes) return undefined;
  
  return (animes?.data?.map((e) => {
    return { 
     key: e.mal_id, 
     tittle: e.title,
     imgUrl: e.images.jpg.image_url
    };
  }) as ICard[]);
}

export default async function Home() {
  return (
  <div className={styles.containerPage}>
   <Slide cards={await animeCardAdacter(1, 10)} />
   <Slide cards={await animeCardAdacter(11, 10)} />
   <Slide cards={await animeCardAdacter(21, 10)} />
   <Slide cards={await animeCardAdacter(31, 10)} />
   <Slide cards={await animeCardAdacter(41, 10)} />
   <Slide cards={await animeCardAdacter(51, 10)} />
  </div>);
}