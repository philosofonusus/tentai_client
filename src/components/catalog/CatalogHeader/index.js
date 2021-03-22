import React from 'preact/compat'
import styles from './style.css'
import SearchField from "../../searchField";

const CatalogHeader = () => (
    <div class={styles.catalogHeader__body}>
        <SearchField/>
    </div>
)
export default CatalogHeader
