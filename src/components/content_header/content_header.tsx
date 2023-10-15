"use client";

import { useState, useEffect } from "react";
import styles from "./contentheader.module.css";
import Icon from "@/components/icon/icon";
import IOption from "@/components/navbar/IOption";
import Navigation, { Direction } from "@/components/navbar/navigation";

export default function ContentHeader({ navigationMenus }: IOption[]) {
 const [show, setShow] = useState(false);
 const [showButton, setShowButton] = useState(true);

 function handleClick() {
  setShow(!show);
 }

 useEffect(() => {
  function handleResize() {
   if (window.innerWidth < 768) {
    setShowButton(true);
    setShow(false);
   } else {
    setShowButton(false);
    setShow(true);
   }
  }

  window.addEventListener("resize", handleResize);

  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 return (
  <>
   <div className={styles.containerIconMenuLogo}>
    {showButton && (
     <button
      className={`${styles.iconMenu} ${show ? styles.rotate : styles.normal}`}
      type="button"
      onClick={handleClick}
     >
      <Icon iconName="menu" />
     </button>
    )}
    <img
     src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Animax.png"
     alt="logo de animax"
     className={styles.logo}
    />
   </div>
   {show ? (
    <div className={styles.containerMenu}>
     <Navigation
      list={navigationMenus}
      direction={showButton ? Direction.column : Direction.row}
     />
    </div>
   ) : null}
  </>
 );
}
