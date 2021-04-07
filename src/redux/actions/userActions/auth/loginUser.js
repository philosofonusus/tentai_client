import {SET_USER} from "../../../types";
import request from '../../../../request'

const loginUser = (form, remember) => {
    return async dispatch => {
        const data = await request('http://localhost:3000/auth/login', 'POST', {...form})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, remember: remember ? '1' : '0'}})
    }
}

export default loginUser
