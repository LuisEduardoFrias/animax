import Link from 'next/link'
import styles from './navbar.module.css'
import Icon from '../icon/icon'
import LiClient from './li_client'
// import Icon from '@mui/material/Icon';

export interface Property {
 ob: IOption;
 i: number;
 pl?: boolean; //primary lever
}

export interface IOption {
  name: string;
  href: string;
  sub: IOption[];
  icon?: string;
}

export default function NavBar({menus}: IOption[]) : JSX.Element {
  return (
  <nav className={styles.nav}>
   <ul>
    {
    menus.map((ob:IOption,i:number)=>
     menuOption({ob,i}))
    }
   </ul>
  </nav>)
}

//----------------------------------

export function menuOption({ob,i,pl} : Property) : JSX.Element {
 return (
  ob?.sub?.length !== 0 ? 
  <LiClient ob={ob} i={i} pl={pl} /> : 
  <Li ob={ob} i={i} />
 )
}

function Li({ob,i} : Property) : JSX.Element {
  return (
  <li key={i} className={styles.li} >
   <Link href={ob.href}>
    <div className={styles.liIconText}>
     { isIcon(ob) }
     <label>{ob.name}</label>
    </div>
   </Link>
  </li>)
}

export function isIcon(ob: IOption) : JSX.Element { 
 return (ob.icon ? <Icon iconName={ob.icon} /> : null)
}

//----------------------------------

// const openSubMenu = (classElement: string) : void => {
// 
//   if(classElement) {
//     const ele: any = document.querySelector(`#${classElement}`);
//     const icon: any = document.querySelector(`#icon-${classElement}`);
//   
//     ele.styles.display !== "none" ?
//     icon.innerHTML = "chevron_right" :
//     icon.innerHTML = "expand_more";
//   
//     ele.styles.display === "none" ?
//     ele.styles.display = "block" :
//     closeSubMenu(classElement);
//   }
// }
// 
// const closeSubMenu = (classElement: string) : void => {
//   if(classElement) {
//     const ele: any = document.querySelector(`#${classElement}`);
//   
//     if(ele) ele.styles.display = "none";
//   }
// }