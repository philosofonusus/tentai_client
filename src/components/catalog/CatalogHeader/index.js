import React from 'preact/compat'
import styles from './style.css'
import SearchField from "../../searchField";
import SearchSettings from "../../searchSettings";

const CatalogHeader = () => (
    <div class={styles.catalogHeader}>
        <div class={styles.catalogHeader__body}>
            <SearchField/>
        </div>
        <SearchSettings/>
    </div>
)
export default CatalogHeader
