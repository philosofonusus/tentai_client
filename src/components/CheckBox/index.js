import React from 'preact/compat'
import styles from './style.css'

const CheckBox = ({active, text, setActive}) => {
    return(
        <div class={styles.checkContainer}>
            <input type="checkbox" checked={active} onClick={() => setActive(!active)} class={`${styles.checkContainer__check} ${active && styles.checkContainer__check_active}`}/>
            <div class={styles.checkContainer__text}>
                {text}
            </div>
        </div>
    )
}



export default CheckBox
