
import { Suspense } from 'react'
import Ranking from '@/components/ranking/ranking'
import BackButton from '@/components/back_button/backbutton'
import LdDualRing from '@/components/ld_dual_ring/ld_dual_ring'
import GetApiJikan from '@/functions_tools/get_api_jikan'
import { IDetail } from "@/interfaces/anime_details.ts"
import styles from './page.module.css'

async function getData(id:number) {
 const anime: IDetail = await GetApiJikan<IDetail>(`anime/${id}`);
 
 if(!anime) return undefined;
 
 return anime?.data;
}

export default async function AnimeDetail(props) {
 
  const data = await getData(props.searchParams.id);
  
  return (
  <div className={styles.container}>
  
   <h1>{data?.title}</h1>
   
   <Suspense fallback={<LdDualRing error={false} />} >
    <img src={data?.images?.jpg?.large_image_url} alt="image the anime." />
   </Suspense>
   
   <Ranking score={data?.score} />
   
   <div className={styles.conten_container}>
   
    <div className={styles.conten}>
     <label>Aired: </label>
     <label>{data?.aired?.string}</label>
    </div>
    <div className={styles.conten}>
     <label>Type: </label>
     <label>{data?.type}</label>
    </div>
    <div className={styles.conten}>
     <label>Episodes: </label>
     <label>{data?.episodes}</label>
    </div>
    <div className={styles.conten}>
     <label>Duration: </label>
     <label>{data?.duration}</label>
    </div>
    <div className={styles.conten}>
     <label>Status: </label>
     <label>{data?.status}</label>
    </div>
    <div className={styles.conten}>
     <label>Rating: </label>
     <label>{data?.rating}</label>
    </div>
    <div className={styles.conten}>
     <label>Season: </label>
     <label>{data?.season}</label>
    </div>
    
   </div>
   
   <div className={styles.synopsis}>
    <label>Synopsis</label>
    <label>{data?.synopsis}</label>
   </div>
   
   <BackButton /> 
   
  </div>);
}