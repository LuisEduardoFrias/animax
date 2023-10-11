
import { CSSProperties } from 'react';

interface IInputprops {
 placeholder: string;
 name: string;
 type: string;
 className: string;
 style: CSSProperties;
 onChange: (event: any) => void;
 onClick: (event: any) => void;
}

export default function Input(props: IInputprops) {
 return (
  <input 
  placeholder={props.placeholder} 
  name={props.name} 
  onChange={(event)=>{alert(event)}} 
  onClick={props.onClick} 
  type={props.type} 
  style={props.style} 
  className={props.className} />  )
}