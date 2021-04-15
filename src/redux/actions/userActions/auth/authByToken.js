import {SET_USER} from '../../../types.js'
import request from '../../../../request'
import {userTokenStorage} from "../../../reducers/userReducer";

const authUser = () => {
    return async (dispatch, getState) => {
        if (!(getState().user)) {
            if (!localStorage.getItem(userTokenStorage)) localStorage.setItem(userTokenStorage, '')
            const res = await request('http://localhost:3000/auth/token', "GET", null,{Authorization: `Bearer ${localStorage.getItem(userTokenStorage)}`})
            if(!res) return
            dispatch({type: SET_USER, payload: {data: {user: res}}})
        }
    }
}
export default authUser
