import {TOGGLE_SEARCHINGTAG, SET_SEARCH_QUERY, CLEAR_SEARCH_TAGS} from "../types";

const searchParamsReducer = (state = {searchTags: [], searchQuery: ""}, action) => {
    switch (action.type){
        case CLEAR_SEARCH_TAGS:
            return {...state, searchTags: []}
        case SET_SEARCH_QUERY:
            return {...state, searchQuery: action.payload}
        case TOGGLE_SEARCHINGTAG:
            return state.searchTags.includes(action.payload)
                ? {...state, searchTags: state.searchTags.filter(el => el !== action.payload)}
                : {...state, searchTags: [...state.searchTags, action.payload]}
        default:
            return state
    }
}

export default searchParamsReducer
