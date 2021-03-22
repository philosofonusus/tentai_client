import {combineReducers} from "redux";
import listReducer from "./listReducer";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    list: listReducer,
    user: userReducer,
    searchParams: searchReducer
})

export default rootReducer
