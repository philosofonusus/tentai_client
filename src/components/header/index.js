import React from 'preact/compat'
import Logo from '../logo'
import styles from './style.css'
import OutlineBtn from "../OutlineBtn";
import MenuBtn from "../MenuBtn";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const Header = ({menuBtnActive, menuBtnSetActive, username, fixed_header}) => (
	<header class={`${styles.header} ${fixed_header && styles.header_fixed}`}>
		<Logo/>
		<div>
			<Link to="/login">
				<OutlineBtn>
					{username ? username : "Sign In"}
				</OutlineBtn>
			</Link>
			<MenuBtn active={menuBtnActive} setActive={menuBtnSetActive}/>
		</div>
	</header>
);

export default connect(state => ({username: state?.user?.name}))(Header);
