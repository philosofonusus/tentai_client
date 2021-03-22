import React from 'preact/compat'
import logo from '../../assets/logo.svg'
import styles from './style.css'
import {Link} from "react-router-dom";

const Logo = () => (
    <Link to="/" class={styles.logo}>
        <img src={logo} alt="tentai"/>
        <span class={styles.logo__word}>
            TENTAI
        </span>
    </Link>
)

export default Logo
