import {SET_USER} from "../../../types";
import p from 'phin'

const registerUser = (form) => {
    return async dispatch => {
        const data = await p({url: 'http://localhost:3000/auth/register', method: "POST", data: {...form}})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, save: true}})
    }
}

export default registerUser
