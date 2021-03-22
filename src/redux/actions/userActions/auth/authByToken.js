import {SET_USER} from '../../../types.js'
import {userTokenStorage} from "../../../reducers/userReducer";
import p from 'phin'

const authUser = () => {
    return async (dispatch, getState) => {
        if (!(getState().user)) {
            if (!localStorage.getItem(userTokenStorage)) localStorage.setItem(userTokenStorage, '')
            const res = await p({url: 'http://localhost:3000/auth/token', data: {token: localStorage.getItem(userTokenStorage)}, method: "POST"})
            if(!res) return
            dispatch({type: SET_USER, payload: {data: {user: res.data}}})
        }
    }
}
export default authUser
