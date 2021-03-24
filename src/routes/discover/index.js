import React, {useEffect} from 'preact/compat'
import LayOut from "../../components/layout";
import Catalog from "../../components/catalog";
import styles from './style.css'
import {useHttp} from "../../hooks/http.hook";
import {useDispatch, connect} from "react-redux";
import setList from '../../redux/actions/listActions/setList'

const DiscoverRoute = ({listPageSize}) => {
    const {request} = useHttp()
    const dispatch = useDispatch()
    useEffect( async () => {
        const data = await request('http://localhost:3000/products', "POST", {page: 0, pageSize: listPageSize, count: true})
        dispatch(setList(data))
    }, [])
    return(
        <LayOut fixed_header>
            <h1 class={styles.discover__title}>
                discover
            </h1>
            <Catalog/>
        </LayOut>
    )
}

export default connect(state => ({listPageSize: state.list.pageSize}))(DiscoverRoute)
