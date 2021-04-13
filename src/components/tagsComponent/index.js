import React from 'preact/compat'
import styles from './style.css'
import { connect } from 'react-redux'
import { tags } from './Tags'
import TagComponent from "./TagComponent";

const TagsComponent = ({searchTags}) => {
    return(
        <div class={styles.tagsContainer}>
            {tags.map(el => {
                return <TagComponent active={searchTags.includes(el)} tag={el}/>
            })}
        </div>
    )
}

export default connect(state => ({searchTags: state.searchParams.searchTags}))(TagsComponent)
