import React, {memo} from 'preact/compat'
import styles from './style.css'
import {Link} from "react-router-dom";
import LazyImage from "../../../lazyImage";

const ListCard = ({productData}) => {
    return(
    <div class={styles.card}>
        <Link to={`/product/${productData._id}`}>
            <LazyImage src={`http://localhost:3000/public/hentai/covers/${productData.cover}`} alt={productData.title}/>
        </Link>
        <div class={styles.card__details}>
            <h4>
                {productData.title}
            </h4>
        </div>
    </div>
    )
}
export default memo(ListCard)
