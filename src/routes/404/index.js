import React from 'preact/compat'
import styles from './style.css'
import {Link} from "react-router-dom";
import FilledBtn from "../../components/FilledBtn";

const Route404 = () => (
    <div class={styles.box}>
        <div class={styles.box__ghost}>
            <div class={styles.symbol} />
            <div class={styles.symbol} />
            <div class={styles.symbol} />
            <div class={styles.symbol} />
            <div class={styles.symbol} />
            <div class={styles.symbol} />

            <div class={styles.box__ghostContainer}>
                <div class={styles.box__ghostEyes}>
                    <div class={styles.box__eyeLeft} />
                    <div class={styles.box__eyeRight} />
                </div>
                <div class={styles.box__ghostBottom}>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div class={styles.box__ghostShadow} />
        </div>

        <div class={styles.box__description}>
            <div class={styles.box__descriptionContainer}>
                <div class={styles.box__descriptionTitle}>Whoops!</div>
                <div class={styles.box__descriptionText}>It seems like we couldn't find the page you were looking for</div>
            </div>
            <Link to="/">
                <FilledBtn>
                    Go Home
                </FilledBtn>
            </Link>
        </div>
    </div>
)

export default Route404
