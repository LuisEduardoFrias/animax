'use client'

import React, { useState, useRef } from 'react';
import LdDualRing from '@/components/ld_dual_ring/ld_dual_ring';

interface IScrollContainerProps {
  children: React.ReactNode,
  cssClass?: object,
  cssStyle?: object,
  scroll?: (container: HTMLElement, _setLoading: (boolean) => void) => void
}

const styleCl =  {
 display: 'flex', 
 flexDirection: 'column', 
 alignItems: 'center',
 justifyContent: 'center', 
 height: '60px', 
 width: '100%', 
 boxSizing: 'border-box', 
}

let _callback: (container: HTMLElement, _setLoading: (boolean) => void) => void;

export function useScroll(callback: (container: HTMLElement, _setLoading: (boolean) => void) => void): void {
  _callback = callback;
}

export default function ScrollContainer(props: IScrollContainerProps) {
 
  const [loading, setLoading] = useState(false);
  
  const handleScroll = async (event: React.UIEvent<HTMLDivElement>) => {
   
    const container = event.currentTarget;

    if(container.scrollTop + container.clientHeight >= (container.scrollHeight - 1))
    {
      setLoading(true);
      if (props.scroll) {
       await props.scroll(container, setLoading);
      }
      if (_callback) {
        await _callback(container, setLoading);
      }
    }
  };

  const LoadingIndicator = () => {
    return (
      <div style={styleCl}>
        <LdDualRing error={false} />
      </div>
    );
  };

  return (
    <div
      className={props.cssClass}
      style={props.cssStyle}
      onScroll={handleScroll}
    >
      {props.children}
      {loading ? <LoadingIndicator />  : null}
    </div>
  );
}