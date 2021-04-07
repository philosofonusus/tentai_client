import {useSelector} from "react-redux";
import {userTokenStorage} from "../redux/reducers/userReducer";

export const useGetUserToken = () => {
    const isUserTemp = useSelector(state => state.user?.temp)
    if(isUserTemp === '0') return sessionStorage.getItem(userTokenStorage)
    else if(isUserTemp === '1' || !isUserTemp) return localStorage.getItem(userTokenStorage)
}
