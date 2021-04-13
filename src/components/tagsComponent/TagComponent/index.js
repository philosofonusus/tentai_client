import React from 'preact/compat'
import styles from './style.css'
import {useDispatch} from "react-redux";
import toggleSearchingTag from "../../../redux/actions/searchActions/searchParams/toggleSearchingTag";

const TagComponent = ({tag, active}) => {
    const dispatch = useDispatch()
    return(
        <div class={`${active && styles.tag_active} ${styles.tag}`} onClick={() => dispatch(toggleSearchingTag(tag))}>
            {tag}
        </div>
    )
}

export default TagComponent
