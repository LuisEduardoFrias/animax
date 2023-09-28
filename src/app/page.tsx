
import Slide ,{ ICard } from '../components/slide/slide'
import styles from './page.module.css'
import { Anime } from "../interfaces/top.anime.ts";
import fetchAnimeData from '../functions_tools/get_top_anime'

async function animeCardAdacter(page:number, limit:number): Promise<ICard[]> {
 
  const animes = await fetchAnimeData(page, limit);
  
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
  let cards1: ICard[] = [];
  let cards2: ICard[] = [];
  let cards3: ICard[] = [];

  cards1 = await animeCardAdacter(1, 10);
  cards2 = await animeCardAdacter(11, 10);
  cards3 = await animeCardAdacter(21, 10);
  
  return (
    <div className={styles.containerPage}>
    {console.log(cards1)}
      <Slide cards={cards1} />
      <Slide cards={cards2} />
      <Slide cards={cards3} />
    </div>
  );
}