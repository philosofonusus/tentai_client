import React from 'preact/compat'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './style.css'

const SideBar = ({active, userRole}) => (
    <aside class={`${styles.sidebar} ${active && styles.sidebar_active}`}>
        {userRole && <Link to="/upload">Upload</Link> }
    </aside>
)

export default connect(state => ({userRole: state.user?.role}))(SideBar)
