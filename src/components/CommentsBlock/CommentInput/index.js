import React, {useState} from 'preact/compat';
import styles from './style.css';
import request from '../../../request';
import {useGetUserToken} from "../../../hooks/getUserToken.hook";

const CommentInput = ({productId, getComments}) => {
    const [commentBody, setCommentBody] = useState('')
    const userToken = useGetUserToken()

    const addComment = async () => {
       await request(
            'http://localhost:3000/users/comments/create',
            "POST",
            { body: commentBody, productId },
            {Authorization: `Bearer ${userToken}`}
        )
        await getComments()
        setCommentBody('')
    }

    return(
    <div class={styles.commentInputBlock}>
        <div>
            <textarea value={commentBody} onChange={e => setCommentBody(e.target.value)} placeholder="Type something..."/>
            <div class={styles.commentInputBlock__btnContainer}>
                <button onClick={() => addComment()}>
                    <svg height="30" viewBox="0 0 496.009 496.009" width="30" fill="#FFEC00">
                        <path
                            d="M475.015.815l-464 151.617c-13.104 4.282-14.999 22.106-3.073 29.04l175.35 101.963a15.997 15.997 0 0017.582-.986l49.292-36.606-36.606 49.292a16.002 16.002 0 00-.986 17.583l101.963 175.35c6.942 11.936 24.762 10.02 29.041-3.073l151.617-464c4.067-12.459-7.782-24.234-20.18-20.18zM324.249 441.112l-78.712-135.365 94.913-127.805a16.001 16.001 0 00-22.385-22.385L190.26 250.471 54.896 171.758 454.983 41.025zm-156.258-90.468L61.753 456.881c-6.248 6.247-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627l106.238-106.237c6.25-6.247 16.381-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627zm-140.349 4.02c-6.249-6.249-6.249-16.379 0-22.627l41.92-41.921c6.248-6.249 16.379-6.249 22.627 0 6.249 6.249 6.249 16.379 0 22.627l-41.92 41.921c-6.247 6.247-16.379 6.248-22.627 0zm178.25 49.154c6.249 6.248 6.249 16.379 0 22.627l-41.921 41.92a15.947 15.947 0 01-11.313 4.687c-14.127 0-21.421-17.207-11.313-27.314l41.921-41.92c6.247-6.249 16.378-6.249 22.626 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
}

export default CommentInput
