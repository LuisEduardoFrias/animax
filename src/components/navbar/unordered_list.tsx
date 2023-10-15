"use client";

import React, { useReducer, useEffect } from "react";
import IOption from "./IOption";
import { Direction } from "./navigation";
import ListItem from "./list_item";
import "./unordered_list.css";

interface IUnorderedListProps {
 list: IOption[];
 phaderDirection: Direction;
 direction: Direction;
 lever: number;
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
 index: number;
 unShowSub: boolean;
}

type Action = { type: "toggleSub"; payload: IPayload };

const reducer = (state: IState, action: Action): IState => {
 const { index, unShowSub } = action.payload;

 switch (action.type) {
  case "toggleSub":
   return {
    ...state,
    items: state.items.map((item) =>
     item.index === index
      ? { ...item, unShowSub: unShowSub }
      : { ...item, unShowSub: false }
    ),
   };
  default:
   return state;
 }
};

export default function UnorderedList({
 list,
 phaderDirection,
 direction,
 lever,
}: IUnorderedListProps): JSX.Element {
 const _lever = lever ?? 0;
 const directionFlex = direction === Direction.column ? "column" : "row";

 const initialState: IState = {
  items: list?.map((op, index) => ({ index: index, unShowSub: false, op: op })),
 };

 const [state, dispatch] = useReducer(reducer, initialState);

 let leftLever =
  _lever >= 2 || (phaderDirection === Direction.column && _lever === 1)
   ? "145px"
   : "0";
 let topLever =
  _lever >= 2 || (phaderDirection === Direction.column && _lever === 1)
   ? "-35px"
   : "0";

 const StylesUl = {
  display: "flex",
  flexDirection: directionFlex,
  left: leftLever,
  top: topLever,
 };

 const handleClick = (payload: IPayload) => {
  dispatch({ type: "toggleSub", payload: payload });
 };

 return (
  <ul style={StylesUl} className="unordered-list">
   {state.items.map((item) => (
    <ListItem
     key={item.index}
     option={item.op}
     direction={direction}
     nextLever={_lever + 1}
     index={item.index}
     unShowSub={item.unShowSub}
     handleClick={handleClick}
    />
   ))}
  </ul>
 );
}
