import React from 'preact/compat'
import Logo from '../logo'
import styles from './style.css'
import OutlineBtn from "../OutlineBtn";
import MenuBtn from "../MenuBtn";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({menuBtnActive, menuBtnSetActive, username, fixed_header, bgNone}) => (
	<header class={`${styles.header} ${fixed_header && styles.header_fixed} ${bgNone && styles.header_bgNone}`}>
		<Logo/>
		<div>
			<Link to="/login" class={styles.loginBtn}>
				<OutlineBtn>
					{username ? username : "Sign In"}
				</OutlineBtn>
			</Link>
			<MenuBtn active={menuBtnActive} setActive={menuBtnSetActive}/>
		</div>
	</header>
);

export default connect(state => ({username: state?.user?.name}))(Header);
