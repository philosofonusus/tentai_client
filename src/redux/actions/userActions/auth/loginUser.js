import {SET_USER} from "../../../types";

const loginUser = (form, remember, request) => {
    return async dispatch => {
        const data = await request('http://localhost:3000/auth/login', 'POST', {...form})
        if(!data) return
        dispatch({type: SET_USER, payload: {data, save: !!remember}})
    }
}

export default loginUser
