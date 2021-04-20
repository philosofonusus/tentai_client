import React from 'preact/compat'
import styles from './style.css'
import LdsRing from "./LdsRing";

const Loader = () => (
        <div class={styles.loaderPosition}>
            <LdsRing/>
        </div>
)

export default Loader
