import {combineReducers} from "redux";
import listReducer from "./listReducer";
import userReducer from "./userReducer";
import searchParamsReducer from "./searchReducer";

const rootReducer = combineReducers({
    list: listReducer,
    user: userReducer,
    searchParams: searchParamsReducer
})

export default rootReducer
