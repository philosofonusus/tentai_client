import {sort_type} from "./variables";
import {SORT_LIST_BY_DATE} from "../../../types";

const listSortByDate = () => {
    sort_type = SORT_LIST_BY_DATE
    return {
        type: SORT_LIST_BY_DATE
    }
}

export default listSortByDate
