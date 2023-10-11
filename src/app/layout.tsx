import './globals.css'
import '../functions_tools/global_functions'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import styles from './page.module.css'
import Loading from './loading'
import { BlackOpsOne, Inter, Permanent_Marker } from 'next/font/google'

import Navbar from '../components/navbar/navbar'

// const fontStyle = Inter({ subsets: ['latin'] })

const fontStyle = Inter({
 style: ['normal'],
 subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Animax',
  description: 'Esta pagina te da descripcion de los animes mas conocidos del mundo',
}

const menus : IOption[] = [
  {
    name:"Home",
    href:"/",
    sub: [],
    icon:"home"
  },
  {
    name:"Categorys",
    href: "",
    sub: [
     {
      name:"Bishounen",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Chibi",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Dark Fantasy",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Eroguro",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Gore",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Harem",
      href:"",
      sub: [
     {
       name:"acción",
       href:"/project/view",
       sub: []
     },
     {
       name:"aventura",
       href:"/project/view",
       sub: []
     },
     {
       name:"comedia",
       href:"/project/view",
       sub: []
     },
     {
       name:"ciencia ficción",
       href:"/project/view",
       sub: []
     },
     {
       name:"romance",
       href:"/project/view",
       sub: []
     },
     {
       name:"terror",
       href:"/project/view",
       sub: []
     },
    ],
      icon:""
     },
     {
      name:"Isekai",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Kemono",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Kodomo",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Mecha",
      href:"",
      sub: [
     {
       name:"acción",
       href:"/project/view",
       sub: []
     },
     {
       name:"aventura",
       href:"/project/view",
       sub: []
     },
     {
       name:"comedia",
       href:"/project/view",
       sub: []
     },
     {
       name:"ciencia ficción",
       href:"/project/view",
       sub: []
     },
     {
       name:"romance",
       href:"/project/view",
       sub: []
     },
     {
       name:"terror",
       href:"/project/view",
       sub: []
     },
    ],
      icon:""
     },
     {
      name:"SD",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Seinen",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Shonen",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Shoujo",
      href:"",
      sub:[],
      icon:""
     },
     {
      name:"Sports",
      href:"",
      sub:[],
      icon:""
     },
    ],
    icon:"category"
  },
  {
    name:"Genero",
    href:"/project/view",
    sub: [
     {
       name:"acción",
       href:"/project/view",
       sub: []
     },
     {
       name:"aventura",
       href:"/project/view",
       sub: []
     },
     {
       name:"comedia",
       href:"/project/view",
       sub: []
     },
     {
       name:"ciencia ficción",
       href:"/project/view",
       sub: []
     },
     {
       name:"romance",
       href:"/project/view",
       sub: []
     },
     {
       name:"terror",
       href:"/project/view",
       sub: []
     },
    ],
    icon:"folder_copy"
  },
  {
    name:"Search",
    href:"/search",
    sub: [],
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
      <Navbar menus={menus} />
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
