import React from 'preact/compat'
import styles from './style.css'
import {connect, useDispatch} from 'react-redux'
import PageBubble from "./PageBubble";
import setListPage from "../../../../redux/actions/listActions/setListPage";

const ListNavigation = ({list}) => {
    const dispatch = useDispatch()
    const length = Math.ceil(list.listCount / list.pageSize)
    if(length <= 1) return;
    return(
        <div class={styles.list__navigation}>
            {
                Array.from({ length }, (_, i) => i + 1).map(el => {
                    return <PageBubble disabled={list.listPage === el} onClick={() => dispatch(setListPage(el))}>
                        {el}
                    </PageBubble>
                })
            }
        </div>
    )
}


export default connect(state => ({list: state.list}))(ListNavigation)
