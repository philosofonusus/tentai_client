import React, {useEffect, useState} from 'preact/compat'
import ReactPlayer from 'react-player'
import {useParams, Redirect} from "react-router-dom";
import Loader from "../../components/loader";
import request from "../../request"
import LayOut from "../../components/layout";
import styles from './style.css'

const ProductRoute = () => {
    const [productData,  setProductData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const {id} = useParams()
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
                        <img src={`http://localhost:3000/public/hentai/covers/${productData.cover}`} alt={productData.title}/>
                    </div>
                </div>
                <div class={styles.videoContainer}>
                    <ReactPlayer url={`http://localhost:3000/public/hentai/videos/${productData.episodes[0]}`} width="100%" height="100%" controls/>
                </div>
            </div>
        </LayOut>
    )
}

export default ProductRoute
