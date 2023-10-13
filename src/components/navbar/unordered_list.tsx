'use client'

import React, { useReducer, useEffect } from 'react';
import IOption from './IOption'
import {Direction} from './navigation'
import ListItem from './list_item'
import './unordered_list.css'

interface IUnorderedListProps {
  list: IOption[];
  direction: Direction,
}

interface IState {
  items: IItem[];
}

interface IItem {
  index: number;
  unShowSub: boolean;
  op: IOption;
}

interface IPayload {
 index: number,
 unShowSub: boolean
}

type Action = { type: 'toggleSub'; payload: IPayload };

const reducer = (state: IState, action: Action): IState => {
  const {index, unShowSub} = action.payload;
  
  switch (action.type) {
   case 'toggleSub':
    return {
     ...state,
     items: state.items.map(item =>
      item.index === index
       ? { ...item, unShowSub: unShowSub }
       : { ...item, unShowSub: false }
     )
    };
   default:
    return state;
  }
};

export default function UnorderedList({list, direction}:IUnorderedListProps) : JSX.Element {
  
 const initialState: IState = {
  items: list.map((op, index) => ({ index: index, unShowSub: false, op: op }))
 };

 const [state, dispatch] = useReducer(reducer, initialState);
 
 const directionFlex = direction === Direction.column ? 'column' : 'row';
 
 const StylesUl = {
  display: 'flex',
  flexDirection: directionFlex,
 }
 
 const handleClick = (payload: IPayload) => {
  dispatch({ type: 'toggleSub', payload: payload });
 };
 
 return (
  <ul style={StylesUl} className='unordered-list' >
   {
    state.items.map(item => <ListItem key={item.index} option={item.op} index={item.index} unShowSub={item.unShowSub} handleClick={handleClick} />)
   }
  </ul>
 )
}