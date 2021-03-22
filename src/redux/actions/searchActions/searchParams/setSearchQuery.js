import {SET_SEARCH_QUERY} from "../../../types";

const setSearchQuery = (val) => {
    return{
        type: SET_SEARCH_QUERY,
        payload: val
    }
}

export default setSearchQuery
