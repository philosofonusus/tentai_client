import {SET_USER} from "../../../types";

const registerUser = (form, request) => {
    return async dispatch => {
        const data = await request('http://localhost:3000/auth/register', "POST",{...form})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, save: true}})
    }
}

export default registerUser
