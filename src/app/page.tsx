
import Slide ,{ ICard } from '../components/slide/slide'
import styles from './page.module.css'
import { IAnime } from "../interfaces/anime_card.ts";
import GetApiJikan from '../functions_tools/get_api_jikan'

async function animeCardAdacter(page:number, limit:number): Promise<ICard[]> {
 
  const animes = await GetApiJikan<IAnime[]>(`top/anime?page=${page}&limit=${limit}`);
  
  const cards: ICard[] = animes?.data?.map((e) => 
  {
    return { 
     key: e.mal_id, 
     tittle: e.title,
     imgUrl: e.images.jpg.image_url
    };
  });
  
  return cards;
}

export default async function Home() {

  const cards1: ICard[] = await animeCardAdacter(1, 10);
  const cards2: ICard[] = await animeCardAdacter(11, 10);
  const cards3: ICard[] = await animeCardAdacter(21, 10);
  const cards4: ICard[] = await animeCardAdacter(31, 10);
  const cards5: ICard[] = await animeCardAdacter(41, 10);
  const cards6: ICard[] = await animeCardAdacter(51, 10);
  
  return (
    <div className={styles.containerPage}>
    {console.log(cards6)}
      <Slide cards={cards1} />
      <Slide cards={cards2} />
      <Slide cards={cards3} />
      <Slide cards={cards4} />
      <Slide cards={cards5} />
      <Slide cards={cards6} />
    </div>
  );
}