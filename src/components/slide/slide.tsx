'use client'

import { useState, useRef } from 'react';
import styles from './slide.module.css'
import Link from 'next/link'
import Notification from '@/components/notification/notification'
import Button from './button'
import ImagesCard from './images_card'

export interface ICard {
 key: number;
 tittle: string;
 imgUrl: string;
}

interface ISlideProps {
  cards: ICard[];
}

export default function Slide({ cards }: ISlideProps) : React.FC {
 
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
  
  const scrollIntoView = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.children[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
      });
    }
  };
  
  const _classNames = (index:number) => {
  return `${styles.card} ${index + 1 === currentIndex ? styles.active : ''}`;}
  
  const images = cards ?
   <>
    <Button handle={handlePrev} name={'arrow_back_ios'} />
     <div className={styles.cardContainer} ref={cardContainerRef} >
     {
      cards?.map((card, index) => (
      <Link key={card.key} href={`/animedetail?id=${card.key}`} passHref>
        <ImagesCard card={card} ContenClass={_classNames(index)} />
      </Link>))
     }
     </div>
    <Button handle={handleNext} name={'arrow_forward_ios'} />
   </>
   : <Notification text="Data Not Found" />
  
  return (
  <div className={styles.sline}>
   {images}
  </div>)
}