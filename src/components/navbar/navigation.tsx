import IOption from "./IOption";
import UnorderedList from "./unordered_list";

export enum Direction {
 row,
 column,
}

interface INavigationProps {
 list: IOption[];
 direction: Direction;
}

export default function Navigation({
 list,
 direction,
}: INavigationProps): JSX.Element {
 
 const StyleNav = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflowAnchor: "auto",
  position: "relative",
 };

 return (
  <nav style={StyleNav}>
   <UnorderedList list={list} direction={direction} />
  </nav>
 );
}
