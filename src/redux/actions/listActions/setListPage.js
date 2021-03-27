import {SET_LIST, SET_LIST_PAGE} from "../../types";
import axios from 'axios'

const setListPage = (page) => {
    return async (dispatch, getState) => {
        const list = getState().list
        const res = await axios.post("http://localhost:3000/products/search", {...list.listQueryParams, page, pageSize: list.pageSize})
        dispatch({type: SET_LIST, payload: {val: res.data.list}})
        dispatch({type: SET_LIST_PAGE, payload: page})
    }
}

export default setListPage
