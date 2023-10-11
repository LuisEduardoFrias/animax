'use client'

import ImagesCard from '@/components/slide/images_card'
import ScrollContainer, { useScroll } from '@/components/scroll_container/scroll_container'
import Notification from '@/components/notification/notification'
import GetApiJikan from '@/functions_tools/get_api_jikan'
import { ICard } from '@/components/slide/slide'
import { useState, useEffect } from 'react';
import styles from './page.module.css'

enum FilterType {
 titter,
 startDate
}

export default function Search() {
 
  const [searching, setSearching] = useState<ICard[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [ratingInput, setRatingInput] = useState('g');
  const [typeSelect, setTypeSelect] = useState('tv');
  const [filterType, setFilterType] = useState<FilterType>(FilterType.letter);
  const [nextPage, setNextPage] = useState(2);
 
  useEffect(() => {
   
  const fetchData = async () => {
    if (searchInput !== '') {
      const animes = await animeSearchAdacter(searchInput, ratingInput, typeSelect);
      setSearching([...searching, ...(await animes)]);
    }
  };
  
  fetchData();
}, [searchInput, ratingInput, typeSelect]);
  
  useScroll(async (contenedor: HTMLElement, _setLoading: (boolean) => void) => {
    const animes = await animeSearchAdacter(searchInput, ratingInput, typeSelect, nextPage );
    setSearching([ ...searching, ...(await animes) ]);
    _setLoading(false);
    setNextPage((searching/25) + 1);
  });
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    
    if(event.target.name === 'search') {
     setSearchInput(value);
    } else if(event.target.name === 'rating') {
     setRatingInput(value);
    } else {
     setTypeSelect(value)
    }
  };
  
  const handleFilterTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterType(event.target.value);
  }
  
  async function animeSearchAdacter(_string:string, rating: string, type: string, page?: number): Promise<ICard[]>  {
    
    let searchParam = '';
    
    if (filterType === FilterType.litter) {
      searchParam = `letter=${_string}&rating=${rating}&type=${type}`;
    } else if (filterType === FilterType.startDate) {
      searchParam = `start_date=${_string}&rating=${rating}&type=${type}`;
    }
    
    if(page) {
      searchParam += `&page=${page}`;
    }
    
    alert(`anime?${searchParam}`);
    
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
      <div className={styles.radioConten} >
        <label className={styles.label}>Letter</label>
        <input type="radio" checked={filterType === FilterType.letter} name="filterType" value={FilterType.letter} className={styles.radioInput} onChange={handleFilterTypeChange} />
      </div>
      <div className={styles.radioConten} >
        <label className={styles.label}>Start Date</label>
        <input type="radio" checked={filterType === FilterType.startDate} value={FilterType.startDate}  name="filterType" className={styles.radioInput} onChange={handleFilterTypeChange} />
      </div>
     </fieldset>
     <br />
     
     <input 
       className={styles.input}
       placeholder="search" 
       name="search" 
       value={searchInput}
       type={filterType === FilterType.letter ? "text" : "date"}
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
      { searching && searching.length !== 0 ? 
       <> { 
         searching.map((e,i) => 
         <div className={styles.contenImg}>
          <ImagesCard card={e} key={i} index={i} />
         </div>) 
        } </>
        : <Notification text="Not Data" /> }
     </ScrollContainer>
   </>
  )
}