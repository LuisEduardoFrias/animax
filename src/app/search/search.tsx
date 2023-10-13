'use client'

import ImagesCard from '@/components/slide/images_card'
import ScrollContainer, { useScroll } from '@/components/scroll_container/scroll_container'
import Notification from '@/components/notification/notification'
import GetApiJikan from '@/functions_tools/get_api_jikan'
import { ICard } from '@/components/slide/slide'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import LdDualRing from '@/components/ld_dual_ring/ld_dual_ring'

const styleCl =  {
 display: 'flex', 
 flexDirection: 'column', 
 alignItems: 'center',
 justifyContent: 'center', 
 height: '60px', 
 width: '100%', 
 boxSizing: 'border-box', 
}


export default function Search() {
 
  const [searching, setSearching] = useState<ICard[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [ratingInput, setRatingInput] = useState('g');
  const [typeSelect, setTypeSelect] = useState('tv');
  const [filterType, setFilterType] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
 
  useEffect(() => {
   
   const fetchData = async () => {
     if (searchInput !== '') {
      setIsLoading(true);
      const animes = await animeSearchAdacter(searchInput, ratingInput, typeSelect);
      setIsLoading(false);
      setSearching([...(await animes)]);
     }
   };
  
   fetchData();
  }, [searchInput, ratingInput, typeSelect]);
  
  useScroll(async (contenedor: HTMLElement, _setLoading: (boolean) => void) => {
    if(nextPage !== ((searching.length/25) + 1)) {
     const animes = await animeSearchAdacter(searchInput, ratingInput, typeSelect, nextPage );
     setSearching([ ...searching, ...(await animes) ]);
     setNextPage((searching.length/25) + 1);
    }
    
    _setLoading(false);
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    if(event.target.name === 'search') {
     setSearchInput((value.charAt(0)).replace(/[^a-zA-Z]/g, ''));
    } else if(event.target.name === 'rating') {
     setRatingInput(value);
    } else {
     setTypeSelect(value)
    }
  };
  
  const handleFilterTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType(parseInt(event.target.value));
  }
  
  async function animeSearchAdacter(_string:string, rating: string, type: string, page?: number): Promise<ICard[]>  {
    
    let searchParam = '';
    
    if (filterType === 0) {
      searchParam = `letter=${_string}&rating=${rating}&type=${type}`;
    } else if (filterType === 1) {
      searchParam = `start_date=${_string}&rating=${rating}&type=${type}`;
    }
    
    if(page) {
      searchParam += `&page=${page}`;
    }
    
    const animes = await GetApiJikan<IAnime[]>(`anime?${searchParam}`);
    
    if(!animes) return [];
    
    return (animes?.data?.map((e) => {
      return { 
        key: e.mal_id, 
        tittle: e.title,
        imgUrl: e.images.jpg.image_url
      };
    }) as ICard[]);
    
  }
  
  return (
    <>
     <fieldset className={styles.typeFilter} >
      <legend>Type Filter</legend>
      <div className={styles.radioConten} onClick={handleFilterTypeChange} >
        <label className={styles.label}>Letter</label>
        <input type="radio" checked={filterType === 0} name="filterType" value={0} className={styles.radioInput} onChange={handleFilterTypeChange} />
      </div>
      <div className={styles.radioConten} onClick={handleFilterTypeChange} >
        <label className={styles.label}>Start Date</label>
        <input type="radio" checked={filterType === 1} value={1}  name="filterType" className={styles.radioInput}  />
      </div>
     </fieldset>
     <br />
     
     <input 
       className={styles.input}
       placeholder="search" 
       name="search" 
       value={searchInput}
       type={filterType === 0 ? "text" : "date"}
       onChange={handleChange} 
     />
     <hr />
     <br />
     
     <select value={typeSelect} onChange={handleChange} name="type" className={styles.rating_input, styles.input}>
      <option value="tv" >Tv</option>
      <option value="movie" >Movie</option>
      <option value="ova" >Ova</option>
      <option value="special" >Special</option>
      <option value="ona" >Ona</option>
      <option value="music" >Music</option>
     </select>
     <hr />
     <br />
     
     <select value={ratingInput} onChange={handleChange} name="rating" className={styles.rating_input, styles.input} >
       <option value="g">Todas las edades</option>
       <option value="pg">Niños</option>
       <option value="pg13">Adolescentes de 13 años o más</option>
       <option value="r17">Violencia y lenguaje inapropiado</option>
       <option value="r+">Contenido leve para adultos</option>
       <option value="rx">Hentai</option>
     </select>
     <hr />
          
    <ScrollContainer cssClass={styles.container} >
      { isLoading === true ? 
      <div style={styleCl}>
        <LdDualRing error={false} />
      </div> : null }
      { searching && searching.length !== 0 ? 
       <> { 
         searching.map((e,i) => 
         <Link key={e.key} href={`/animedetail?id=${e.key}`} passHref>
           <div className={styles.contenImg}>
            <ImagesCard card={e} key={i} index={i} />
           </div>
         </Link>) 
        } </>
        : <Notification text="Not Data" /> }
     </ScrollContainer>
   </>
  )
}