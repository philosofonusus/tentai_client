import React, {memo} from 'preact/compat'
import styles from './style.css'
import ListCard from "./ListCard";

const List = ({list}) => {
    return(
        <div class={styles.list}>
            {list?.map(el => {
                if(el) return <ListCard productData={el}/>
            })}
        </div>
    )
}


export default memo(List)
