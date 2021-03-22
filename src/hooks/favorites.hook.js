import {useState} from "preact/compat";
import addFavourite from "../redux/actions/userActions/favourites/addFavourite";
import removeFavourite from "../redux/actions/userActions/favourites/removeFavourite";
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "./http.hook";

const favoritesHook = (id) => {
    const dispatch = useDispatch()
    const {request} = useHttp()
    const user = useSelector(state => state.user)
    const [inFavourites, setInFavourites] = useState(user?.favourites.includes(id))

    const addFavouriteHandler = async () => {
        await request('/api/user/favourites/add', "POST",{id, userId: user.id})
        dispatch(addFavourite(id))
        setInFavourites(true)
    }
    const removeFavouriteHandler = async () => {
        await request('/api/user/favourites/remove', "POST",{id, userId: user.id})
        dispatch(removeFavourite(id))
        setInFavourites(false)
    }
    return {addFavouriteHandler, removeFavouriteHandler, inFavourites, isUser: !!user}
}
export default favoritesHook
