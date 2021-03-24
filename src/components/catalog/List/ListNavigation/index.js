import React from 'preact/compat'
import styles from './style.css'
import {connect, useDispatch} from 'react-redux'
import PageBubble from "./PageBubble";
import {useHttp} from "../../../../hooks/http.hook";
import setList from "../../../../redux/actions/listActions/setList";

const ListNavigation = ({list, searchParams}) => {
    if(list.data.length < list.pageSize) return;
    const dispatch = useDispatch()
    const {request} = useHttp()
    const Navigate = async (n) => {
        const res = await request("http://localhost:3000/products/search", "POST", {...searchParams, page: n, pageSize: list.pageSize})
        dispatch(setList(res))
    }
    return(
        <div class={styles.list__navigation}>
            {
                Array.from({length: Math.ceil(list.listCount / list.pageSize)}, (_, i) => i + 1).map(el => {
                    return <PageBubble onClick={() => Navigate(el)}>
                        {el}
                    </PageBubble>
                })
            }
        </div>
    )
}


export default connect(state => ({list: state.list, searchParams: state.searchParams}))(ListNavigation)
