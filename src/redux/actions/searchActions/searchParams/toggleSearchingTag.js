import {TOGGLE_SEARCHINGTAG} from "../../../types";

const toggleSearchingTag = (tag) => {
    return {
        type: TOGGLE_SEARCHINGTAG,
        payload: tag
    }
}

export default toggleSearchingTag
