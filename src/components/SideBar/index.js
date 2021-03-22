import React from 'preact/compat'
import styles from './style.css'

const SideBar = ({active}) => (
    <aside class={`${styles.sidebar} ${active && styles.sidebar_active}`}>

    </aside>
)

export default SideBar
