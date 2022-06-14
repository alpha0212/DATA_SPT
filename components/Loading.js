import React from 'react'
import styles from "../styles/Loading.module.css";

function Loading() {
  return (<>
    <div className={styles.container}>
        <div className={`${styles.loader} ${styles.loader_1}`}></div>
    </div> 
    </>
  )
}

export default Loading