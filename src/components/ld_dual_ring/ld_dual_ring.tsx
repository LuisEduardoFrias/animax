
import styles from './ld_dual_ring.module.css'

interface ILdDualRingProps {
  error: boolean;
  errorMessage?: string;
}

export default function LdDualRing(props: ILdDualRingProps) {
  return (
  <div className={styles.conten}>
    { !props.error ? 
      ( 
       <div className={styles.ldDualRing}></div>
      ) : 
      ( 
       <label className={styles.errorlabel}>
        {props?.errorMessage}
       </label>
      )
    }
  </div>
  )
}