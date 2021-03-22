import React from 'preact'
import styles from './style.css'
import ListNavigation from "./ListNavigation";
import ListCard from "./ListCard";

const List = ({list}) => {
    return(
        <div class={styles.list}>
            <ListNavigation/>
        </div>
    )
}


export default List
