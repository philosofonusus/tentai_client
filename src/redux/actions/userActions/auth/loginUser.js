import {SET_USER} from "../../../types";
import p from 'phin'

const loginUser = (form, remember) => {
    return async dispatch => {
        const data = await p({url: 'http://localhost:3000/auth/login', method: 'POST', data: {...form}})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, save: !!remember}})
    }
}

export default loginUser
