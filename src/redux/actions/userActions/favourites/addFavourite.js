import {ADD_FAVOURITE} from "../../../types";

const addFavourite = (id) => {
    return {
        type: ADD_FAVOURITE,
        payload: id
    }
}

export default addFavourite
