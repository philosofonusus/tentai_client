import {REMOVE_FAVOURITE} from "../../../types";

const removeFavourite = (id, userId) => {
    return {
        type: REMOVE_FAVOURITE,
        payload: {id, userId}
    }
}

export default removeFavourite
