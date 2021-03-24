import React from "preact/compat"
import styles from './style.css'
import CatalogHeader from "./CatalogHeader";
import List from "./List";
import ListNavigation from "./List/ListNavigation";
import {useSelector} from "react-redux";

const Catalog = () => {
    const list = useSelector(state => state.list.data)
    return(
        <div class={styles.catalog__container}>
            <CatalogHeader/>
            <List list={list}/>
            <ListNavigation/>
        </div>
    )
}

export default Catalog
