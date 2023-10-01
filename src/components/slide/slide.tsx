'use client'

import { useState, useRef } from 'react';
import Link from 'next/link'
import styles from './slide.module.css'
import Icon from '../icon/icon'

export interface ICard {
 key: number;
 tittle: string;
 imgUrl: string;
}

interface ISlideProps {
  cards: ICard[];
}

export default function Slide({ cards }: ISlideProps) : React.FC {
  console.log('cards')
  console.log(cards)
  const [currentIndex, setCurrentIndex] = useState(1);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 1 ? (cards.length + 1) - 1 : prevIndex - 1);
    scrollIntoView();
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === cards.length ? 1 : prevIndex + 1);
    scrollIntoView();
  };
  
  const handleActive = (index:number) => {
    // setCurrentIndex(index);
//     scrollIntoView();
  };
  
  const scrollIntoView = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.children[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  };

  return (
  <div className={styles.sline}>
   {Button(handlePrev, "arrow_back_ios")}
   <div className={styles.cardContainer} 
   ref={cardContainerRef} >
    {ImagesCard(cards, currentIndex, handleActive)}
   </div>
   {Button(handleNext, "arrow_forward_ios")}
  </div>)
}
 
function ImagesCard(cards, currentIndex, handleActive) : JSX.Element {
 
 const classNames = (index:number) => {
  return `${styles.card} ${index + 1 === currentIndex ? styles.active : ''}`;}
 
 return (
  cards?.map((card, index) => (
  <Link key={card.key} href={`/animedetail?id=${card.key}`} passHref>
  <div key={index} className={classNames(index)} onClick={()=>handleActive(index+1)} >
    <img key={card.key}
     src={card.imgUrl} 
     alt={`Image ${index + 1}`} 
     className={styles.image} />
    <label 
     className={styles.name}>{card.tittle}
    </label>
  </div>
  </Link>))
 )
}

function Button(handle, name) : JSX.Element {
 return (
  <button className={styles.button} onClick={handle}>
   <Icon iconName={name} />
  </button>
 )
}