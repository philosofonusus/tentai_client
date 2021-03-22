import React from 'preact/compat'
import LayOut from "../../components/layout";
import Catalog from "../../components/catalog";
import styles from './style.css'

const DiscoverRoute = () => {
    return(
        <LayOut fixed_header>
            <h1 class={styles.discover__title}>
                discover
            </h1>
            <Catalog/>
        </LayOut>
    )
}

export default DiscoverRoute
