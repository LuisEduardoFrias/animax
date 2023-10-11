'use client'
import Icon from '../icon/icon'
import styles from './slide.module.css'

interface IButtonPros {
 handle: (event: Event) => void;
 name: string;
}

export default function Button({handle, name}: IButtonPros) : JSX.Element {
 return (
  <button className={styles.button} onClick={handle}>
   <Icon iconName={name} />
  </button>
 )
}