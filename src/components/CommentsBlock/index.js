import React, {useState} from 'preact/compat'
import CommentInput from "./CommentInput";
import styles from './style.css'
import {useEffect} from "preact/hooks";
import request from "../../request";
import {useParams} from "react-router-dom";
import Comment from "./Comment";

const CommentBlock = () => {
    const { id: productId } = useParams()
    const [page, setPage] = useState(1)
    const [comments, setComments] = useState([])
    const getComments = async () => {
        setComments(await request("http://localhost:3000/products/getComments", "POST", {productId, page, pageSize: 5}))
    }
    useEffect( async() => {
        await getComments()
    }, [])
    return(
        <div class={styles.commentBlock}>
            <CommentInput productId={productId} getComments={getComments}/>
            {
                comments.map(el => {
                    return <Comment data={el} />
                })
            }
        </div>
    )
}

export default CommentBlock
