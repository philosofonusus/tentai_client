import React from 'preact/compat'
import styles from './style.css'

const Loader = () => (
        <div class={styles.loaderPosition}>
            <div class={styles.ldsRing}><div /><div /><div /><div /></div>
        </div>
)

export default Loader
