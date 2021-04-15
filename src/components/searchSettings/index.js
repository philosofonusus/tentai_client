import React from 'preact/compat'
import TagsComponent from "../tagsComponent";
import styles from './style.css'

const SearchSettings = ({active}) => (
    <div class={`${styles.searchSettingsModal} ${active && styles.searchSettingsModal_active}`}>
        <TagsComponent />
    </div>
)

export default SearchSettings
