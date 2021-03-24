import {SET_LIST} from "../../types";
import {sort_type} from "./listSort/variables";

const setList = (val) => {
    return{
        type: SET_LIST,
        payload: {val: val.list.filter(Boolean), sort_type, count: val?.count}
    }
}
export default setList
