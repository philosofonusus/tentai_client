import {SET_LIST_QUERY_PARAMS} from "../../types";

const setListQueryParams = (listQueryParams) => {
    return{
        type: SET_LIST_QUERY_PARAMS,
        payload: listQueryParams,
    }
}

export default setListQueryParams
