"use client"

import styles from './navbar.module.css'
import Icon from '../icon/icon'
import { Property, isIcon, menuOption } from './navbar'
import { useState } from 'react'

export default function LiClient({ob,i,pl} : Property) : JSX.Element {
 
 const [show, setShow] = useState(false)
 
 const _pl = pl ?? true;
 
 const isShow = () => {
  setShow(!show);
 }
 
 return( 
  <li key={i} onClick={isShow} className={styles.li}>
   {
   <div className={styles.containerArrow}>
    <div className={styles.liIconText}>
     { isIcon(ob) }
     <label>{ob.name}</label>
    </div>
    <Icon iconName={ !show ? "chevron_right" : "keyboard_arrow_down"}/>
   </div>
   }
   {
   <div style={ show ? {display:'flex'} : {}} 
        className={styles.containerUl}>
    <ul className={_pl ? styles.ulSMPL : styles.ulSMOL}>
     {ob?.sub?.map((ob,i)=>menuOption({ob,i,pl:false})) }
    </ul>
   </div>
   }
  </li>)
}