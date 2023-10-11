
import styles from './page.module.css'
import Search from './search'

export const metadata: Metadata = {
  title: 'Filter',
  description: 'Esta pagina te da descripcion de los animes mas conocidos del mundo',
}

export default function Filter() {
 
 return (<>
 <h1 className={styles.h1}>Search</h1>
 <Search />
 </>)
}