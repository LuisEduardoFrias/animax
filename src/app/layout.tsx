import './globals.css'
import '../functions_tools/global_functions'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Loading from './loading'
import { BlackOpsOne, Inter, Permanent_Marker } from 'next/font/google'

import Navbar from '../components/navbar/navbar'
import Navigation, {Direction} from '../components/navbar/navigation'

const fontStyle = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Animax',
  description: 'Esta pagina te da descripcion de los animes mas conocidos del mundo',
}

const menus : IOption[] = [
  {
    name:"Home",
    href:"/",
    sub: null,
    icon:"home"
  },
  {
    name:"Categorys",
    href: "",
    sub: [
     {
      name:"Bishounen",
      href:"/search",
      sub: null,
      icon: null
     },
     {
      name:"Chibi",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Dark Fantasy",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Eroguro",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Gore",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Harem",
      href:"",
      sub: [
     {
       name:"acción",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"aventura",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"comedia",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"ciencia ficción",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"romance",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"terror",
       href:"",
       sub: null,
       icon: null
     },
    ],
      icon: null
     },
     {
      name:"Isekai",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Kemono",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Kodomo",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Mecha",
      href:"",
      sub: [
     {
       name:"acción",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"aventura",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"comedia",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"ciencia ficción",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"romance",
       href:"",
       sub: null,
       icon: null
     },
     {
       name:"terror",
       href:"",
       sub: null,
       icon: null
     },
    ],
      icon: null
     },
     {
      name:"SD",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Seinen",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Shonen",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Shoujo",
      href:"",
      sub: null,
      icon: null
     },
     {
      name:"Sports",
      href:"",
      sub: null,
      icon: null
     },
    ],
    icon:"category"
  },
  {
    name:"Genero",
    href:"",
    sub: [
     {
       name:"acción",
       href:"",
       sub: null,
     },
     {
       name:"aventura",
       href:"",
       sub: null,
     },
     {
       name:"comedia",
       href:"",
       sub: null,
     },
     {
       name:"ciencia ficción",
       href:"",
       sub: null,
     },
     {
       name:"romance",
       href:"",
       sub: null,
     },
     {
       name:"terror",
       href:"",
       sub: null,
     },
    ],
    icon:"folder_copy"
  },
  {
    name:"Search",
    href:"/search",
    sub: null,
    icon:"search"
  }
]

export default function RootLayout({children}: { children: React.ReactNode}) 
{ 
  return (
  <html lang="en">
   <head>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
   </head>
   <body className={fontStyle.className} >
    <div className={styles.grid}>
     <header className={styles.header}>
      <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Animax.png" width="170"  height="50" alt="logo de animax"/>
      {//<Navbar menus={menus} />
      }
      <Navigation list={menus} direction={Direction.row} />
     </header>
     <main className={styles.main} >
      <Suspense fallback={<Loading />} >
       {children}
      </Suspense >
     </main>
     <fooder className={styles.fooder} >
      <label>Animax web side ®</label>
     </fooder>
    </div>
   </body>
  </html>)
}
