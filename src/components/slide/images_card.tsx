
import styles from './slide.module.css'

interface IImagesCardProps {
 card: ICard;
 index: number;
}

export default function ImagesCard({card, index}: IImagesCardProps) : JSX.Element {
 return (
  <div key={index} className={styles.img_container} >
    <img key={card.key}
     src={card.imgUrl} 
     alt={`Image ${index + 1}`} 
     className={styles.image} />
    <label 
     className={styles.name}>{card.tittle}
    </label>
  </div>
 )
}