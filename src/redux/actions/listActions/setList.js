import {SET_LIST} from "../../types";
import {sort_type} from "./listSort/variables";

const setList = (val) => {
    console.log(val)
    return{
        type: SET_LIST,
        payload: {val: val.filter(Boolean), sort_type}
    }
}
export default setList
