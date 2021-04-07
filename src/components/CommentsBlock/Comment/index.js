import React from 'preact/compat'
import styles from './style.css'
import { connect } from "react-redux";

const Comment = ({data, userId}) => {
    return(
    <div class={styles.comment}>
        <div class={styles.comment__header}>
            <span class={styles.comment__author}>
                {data.author}
            </span>
            <span class={styles.comment__date}>
                {data.uploadedAt.slice(0, 10).replaceAll(/-/g, '.')}
            </span>
        </div>
        <div class={styles.comment__body}>
            <span>
                {
                    data.body
                }
            </span>
        </div>
        <div class={styles.comment__footer}>

        </div>
    </div>
    )
}

export default connect(state => ({userId: state.user?._id}))(Comment)
