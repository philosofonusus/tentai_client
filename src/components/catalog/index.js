import React from "preact/compat"
import styles from './style.css'
import CatalogHeader from "./CatalogHeader";
import List from "./List";

const Catalog = () => {
    return(
        <div class={styles.catalog__container}>
            <CatalogHeader/>
            <List />
        </div>
    )
}

export default Catalog
