"use client"
// funciones globales
declare global {
  interface Window {
    Select: (selector: string) => IElement;
    cl: (text:string) => void;
  }
}

//Selector
interface IElement {
 e: Element,
 css: string,
}

window.Select = (selector:string) : IElement => {
 const element = document.querySelector(selector);
 return {e: element, css: (styles:string) => {element.style.cssText = styles; }};
};

window.cl = (text:string) => {
 console.log(JSON.stringify(text));
};