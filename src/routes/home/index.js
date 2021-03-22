import React, {useState} from 'preact/compat'
import styles from './style.css';
import FilledBtn from "../../components/FilledBtn";
import LayOut from "../../components/layout";
import {Link} from "react-router-dom";

const HomeRoute = () => {
	return(
	<LayOut>
		<div class={styles.homeEntry}>
			<h1 class={styles.homeEntry__title}>
				The world’s fastest hentai website
			</h1>
			<Link to="/discover">
				<FilledBtn>
					Discover
				</FilledBtn>
			</Link>
		</div>
		<section class={styles.showcase}>

		</section>
	</LayOut>
	)
}

export default HomeRoute;
