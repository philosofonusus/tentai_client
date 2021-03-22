import {sort_type} from "./variables";
import {SORT_LIST_BY_RATING} from "../../../types";

const listSortByRating = () => {
    sort_type = SORT_LIST_BY_RATING
    return {
        type: SORT_LIST_BY_RATING
    }
}

export default listSortByRating
