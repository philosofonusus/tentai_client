import {ADD_FAVOURITE, REMOVE_FAVOURITE, REMOVE_USER, SET_USER} from "../types";

export const userTokenStorage = "userTokenStorage"

const userReducer = (state = null, action) => {
    switch (action.type){
        case REMOVE_USER:
            localStorage.setItem(userTokenStorage, "")
            return null
        case SET_USER:
            if(action.payload.save) localStorage.setItem(userTokenStorage, action.payload.data.token)
            return action.payload.data.user
        case ADD_FAVOURITE:
            return {...state, favourites: [...state.favourites, action.payload]}
        case REMOVE_FAVOURITE:
            const clone = Object.assign(state)
            clone.favourites.splice(clone.favourites.indexOf(action.payload), 1)
            return clone
        default:
            return state
    }
}

export default userReducer
