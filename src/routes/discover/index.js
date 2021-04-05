import React, {useEffect} from 'preact/compat'
import LayOut from "../../components/layout";
import Catalog from "../../components/catalog";
import request from '../../request'
import {useDispatch, connect} from "react-redux";
import setList from '../../redux/actions/listActions/setList'

const DiscoverRoute = ({listPageSize, isList}) => {
    const dispatch = useDispatch()
    useEffect( async () => {
        if(!isList) {
            const data = await request('http://localhost:3000/products', "POST", {
                page: 0,
                pageSize: listPageSize,
                count: true
            })
            dispatch(setList(data))
        }
    }, [])
    return(
        <LayOut fixed_header>
            <Catalog/>
        </LayOut>
    )
}

export default connect(state => ({listPageSize: state.list.pageSize, isList: !!state.list.data.length}))(DiscoverRoute)
