import {SET_USER} from '../../../types.js'
import axios from "axios";
import {userTokenStorage} from "../../../reducers/userReducer";

const authUser = () => {
    return async (dispatch, getState) => {
        if (!(getState().user)) {
            if (!localStorage.getItem(userTokenStorage)) localStorage.setItem(userTokenStorage, '')
            const res = await axios.post('http://localhost:3000/auth/token', {token: localStorage.getItem(userTokenStorage)})
            if(!res) return
            dispatch({type: SET_USER, payload: {data: {user: res.data}}})
        }
    }
}
export default authUser
