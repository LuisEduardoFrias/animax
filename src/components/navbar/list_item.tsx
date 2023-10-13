'use client'

import React, { useState, useEffect, useReducer } from 'react'

import Link from 'next/link'
import IOption from './IOption'
import Icon from '../icon/icon'
import {Direction} from './navigation'
import UnorderedList from './unordered_list'

import './list_item.css'

interface IListItemProps {
 option: IOption, 
 index: number,
 unShowSub: boolean,
 handleClick: (itemId: number) => void,
}

export default function ListItem({option, index, unShowSub, handleClick}: IListItemProps) : JSX.Element {
 
 //var const
 const {name, href, sub, icon} = option;
 
 //hook
 const [unorderedList, setUnorderedList] = useState<JSX.Element>();
 
 const [arrow, setArrow] = useState("chevron_right");
 
 useEffect(() => {
  if (sub) {
    setUnorderedList(<UnorderedList list={sub} direction={Direction.column}/>);
  }
 }, []);
 
 useEffect(() => {
  setArrow(unShowSub ? "keyboard_arrow_down" : "chevron_right");
  }, [unShowSub]);
 
 //metod
 function handleOnClick(event: React.MouseEvent ) {
  handleClick({index: index, unShowSub: !unShowSub});
 }
 
 function Li({children} : React.ReactNode) : JSX.Element {
  return (
  <li key={index} className="li-option">
   {children}
  </li>)
 }
 
 function ContentLi() : JSX.Element {
  
  const StylescontainerSub = {
   display: unShowSub ? 'flex' : 'none',
  }
  
  return (
  <>
   <div className="content-li" onClick={handleOnClick}>
    <div className="li-icon-text">
     {icon ? <Icon iconName={icon}/> : null}
     <label>{name}</label>
    </div>
    {sub ? <Icon iconName={arrow}/> : null}
   </div>
   {sub ? <div style={StylescontainerSub} className="container-sub" >{unorderedList}</div> : null}
  </>)
 }
 
 function LinkOption() : JSX.Element {
  const _href = href ?? '';
  return (
  <Li>
   <Link href={_href} ><ContentLi /></Link>
  </Li>)
 }
 
 function Option() : JSX.Element {
  return (
  <Li>
   <ContentLi />
  </Li>)
 }
 
 //return
 return(<>{sub ? <Option /> : <LinkOption />}</>)
}