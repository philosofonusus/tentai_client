import {SET_USER} from "../../../types";
import request from '../../../../request'

const registerUser = (form) => {
    return async dispatch => {
        const data = await request('http://localhost:3000/auth/register', "POST",{...form})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, remember: '0'}})
    }
}

export default registerUser
