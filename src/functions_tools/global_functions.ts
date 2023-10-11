'use client'
// funciones globales
declare global {
  interface Window {
    Select: (selector: string) => IElement;
    NewElement: (element: string) => HTMLElement;
    NewText: (text: string) => HTMLElement;
    Log: (text:string) => void;
    A: (text:string) => void;
    AJ: (obj:object) => void;
  }
}

//Selector
interface IElement {
 e: Element,
 css: (styles:string) => void,
 add: (element: HTMLElement) => void,
}

window.Select = (selector:string) : IElement => {
  const __element__ = document.querySelector(selector);
  return {
    e: __element__, 
    css: (styles:string) => {__element__.style.cssText = styles;},
    add: (element:HTMLElement) => {__element__.appendChild(element);}
  };
};

window.NewElement = (element:string) => {
  return document.createElement(element);
}
window.NewText = (text:string) => {
  return document.createTextNode(text);
}
window.Log = (text:string) => {
 console.log(JSON.stringify(text));
};
window.A = (text:string) => {
  alert(text)
};
window.AJ = (obj:object) => {
  alert(JSON.stringify(obj))
};