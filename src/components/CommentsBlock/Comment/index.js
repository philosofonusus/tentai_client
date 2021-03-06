import React, {useState, useEffect} from 'preact/compat'
import styles from './style.css'
import request from '../../../request'
import { connect } from "react-redux";
import {useGetUserToken} from "../../../hooks/getUserToken.hook";

const Comment = ({data, userId, getComments}) => {
    const userToken = useGetUserToken()
    const [editMode, setEditMode] = useState(false)
    const [editedComment, setEditedComment] = useState(data.body)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setEditedComment(data.body)
    }, [editMode])

    const deleteComment = async (id) => {
        setLoading(true)
        await request('http://localhost:3000/users/comments/remove', "POST", {commentId: id}, {Authorization: `Bearer ${userToken}`}).finally(() => {
            setLoading(false)
        })
        await getComments()
    }
    const updateComment = async (id, body) => {
        if(editedComment === data.body || !editedComment) return
        setLoading(true)
        await request('http://localhost:3000/users/comments/edit', "POST", {commentId: id, body}, {Authorization: `Bearer ${userToken}`}).finally(() => {
            setLoading(false)
        })
        await getComments()
    }
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
            { editMode ?
                <textarea value={editedComment} onChange={e => setEditedComment(e.target.value)}>

                </textarea>
                :
                <p>
                    {data.body}
                </p>
            }
        </div>
        <div class={styles.comment__footer}>
            <div class={styles.comment__OpinionContainer}>

            </div>
            { userId === data.uploadedBy &&
            <div class={styles.comment__ControlsContainer}>
                {!editMode ?
                <button onClick={() => setEditMode(true)}>
                    <svg fill="#ffec00" viewBox="0 0 348.882 348.882">
                        <path
                            d="M333.988 11.758l-.42-.383A43.363 43.363 0 00304.258 0a43.579 43.579 0 00-32.104 14.153L116.803 184.231a14.993 14.993 0 00-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 005.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"/>
                        <path
                            d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"/>
                    </svg>
                </button>
                    :
                    <>
                    <button disabled={loading} onClick={() => {
                        setEditMode(false)
                        updateComment(data._id, editedComment)
                    }
                    }>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512"><path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
                    </button>
                    <button onClick={() => setEditMode(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 386.667 386.667" height="512" viewBox="0 0 386.667 386.667" width="512"><path d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>
                    </button>
                    </>
                }
                <button disabled={loading} onClick={() => deleteComment(data._id)}>
                    <svg fill="#ffec00" xmlns="http://www.w3.org/2000/svg" height="427pt" viewBox="-40 0 427 427.00131"
                         width="427pt">
                        <path
                            d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                        <path
                            d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                        <path
                            d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0"/>
                        <path
                            d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0"/>
                    </svg>
                </button>
            </div>
            }
        </div>
    </div>
    )
}

export default connect(state => ({userId: state.user?._id}))(Comment)
