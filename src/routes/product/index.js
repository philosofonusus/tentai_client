import React, {useEffect, useState} from 'preact/compat'
import ReactPlayer from 'react-player'
import {useParams, Redirect} from "react-router-dom";
import Loader from "../../components/loader";
import request from "../../request"
import LayOut from "../../components/layout";
import LazyImage from "../../components/lazyImage";
import styles from './style.css'
import CommentBlock from "../../components/CommentsBlock";

const ProductRoute = () => {
    const [productData,  setProductData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { id } = useParams()
    useEffect(() => {
        setLoading(true);
        (async () => await request(`http://localhost:3000/products/item/${id}`))().catch(e => {
            setError(e)
            setLoading(false)
        }).then(data => {
            setProductData(data)
            setLoading(false)
        })
    }, [id])
    if(error) return <Redirect to="/404" />
    if(!productData || loading) return <Loader/>
    return(
        <LayOut>
            <div className="containerBootstrap">
                <div class={styles.product__layout}>
                    <div class={styles.product__cover}>
                        <LazyImage src={`http://localhost:3000/public/hentai/covers/${productData.cover}`} alt={productData.title}/>
                    </div>
                    <div class={styles.product__info}>
                        <h1 class={styles.product__title}>
                            {productData.title}
                        </h1>
                        <p class={styles.product__description}>
                            {productData.description}
                        </p>
                        <span class={styles.product__info_short}>
                            Brand: <span class={styles.product__info_short_highlighted}>{productData.studio}</span>
                        </span>
                        <span class={styles.product__info_short}>
                            Release Date: <span class={styles.product__info_short_highlighted}>{new Date(productData.releaseDate).toLocaleDateString()}</span>
                        </span>
                        <div class={styles.product__tagsContainer}>
                            {productData.tags.map(el => {
                                return <div>
                                    {el}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div class={styles.videoContainer}>
                    <ReactPlayer url={`http://localhost:3000/public/hentai/videos/${productData.episodes[0]}`} width="100%" height="100%" controls
                                 config={{ file: { attributes: { controlsList: 'nodownload' } } }}/>
                </div>
                <CommentBlock/>
            </div>
        </LayOut>
    )
}

export default ProductRoute
