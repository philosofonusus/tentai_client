import React from 'preact/compat'
import styles from './style.css'

const MenuBtn = ({active, setActive}) => {
    return(
        <div class={`${styles.menuBtn} ${active && styles.active}`} onCLick={() => setActive(!active)}>
            <div class={styles.menuBtn__burger}/>
        </div>
    )
}
export default MenuBtn
