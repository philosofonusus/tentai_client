import {SET_LIST, SORT_LIST_BY_DATE, SORT_LIST_BY_RATING} from "../types";

const listReducer = (state = [], action) => {
    switch (action.type){
        case SET_LIST:
            const list = action.payload.val
            switch (action.payload.sort_type){
                case SORT_LIST_BY_RATING:
                    list.sort((a,b) => b.rating - a.rating)
                    break
                case SORT_LIST_BY_DATE:
                    list.sort((a,b)=> b.uploadedAt - a.uploadedAt);
                    break
                default:
                    break
            }
            return list
        case SORT_LIST_BY_DATE:
            if(!state) return state
            const _arr = state.slice()
            _arr.sort((a,b)=> b.uploadedAt - a.uploadedAt);
            return _arr
        case SORT_LIST_BY_RATING:
            if(!state) return state
            const __arr = state.slice()
            __arr.sort((a,b) => b.rating - a.rating)
            return __arr
        default:
            return state
    }
}

export default listReducer
