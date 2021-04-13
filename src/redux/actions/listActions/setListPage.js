import {SET_LIST, SET_LIST_PAGE} from "../../types";
import request from '../../../request'

const setListPage = (page) => {
    return async (dispatch, getState) => {
        const list = getState().list
        const res = await request("http://localhost:3000/products/search", "POST",{...list.listQueryParams, page, pageSize: list.pageSize})
        dispatch({type: SET_LIST, payload: {val: res.data.list}})
        dispatch({type: SET_LIST_PAGE, payload: page})
    }
}

export default setListPage
