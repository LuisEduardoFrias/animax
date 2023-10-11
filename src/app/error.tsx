'use client'

import { CSSProperties } from 'react'

const StyleDiv: CSSProperties = {
 margin: '10px', 
 padding: '5px',
 backgroundColor: '#a41f1f',
 borderRadius: '4px 4px',
 display: 'flex',
 
}

const StyleH1: CSSProperties = {
 textAlign: 'left',
 width: '100%',
 
}

const StyleSpan: CSSProperties = {
 width: '50px',
 border: '3px solid white',
 borderRadius: '50px 50px',
 textAlign: 'center',
 padding: '10px',
 fontWeight: '900',
 marginRight: '10px',
 backgroundColor: `rgb(24, 88, 176)`,
 
}

export default function Error() {
 return (
 <div style={StyleDiv} >
  <span style={StyleSpan}>!</span>
  <h1 style={StyleH1}>Error</h1>
 </div>
 )
}