import {SET_LIST, SORT_LIST_BY_DATE, SORT_LIST_BY_RATING} from "../types";

const listReducer = (state = {data: [], listPage: 1, listCount: 0, pageSize: 10}, action) => {
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
            return {...state, data: list, [action.payload.count && 'listCount']: action.payload.count}
        case SORT_LIST_BY_DATE:
            if(!state) return state
            const _arr = state.data.slice()
            _arr.sort((a,b)=> b.uploadedAt - a.uploadedAt);
            return {...state, data: _arr}
        case SORT_LIST_BY_RATING:
            if(!state) return state
            const __arr = state.data.slice()
            __arr.sort((a,b) => b.rating - a.rating)
            return {...state, data: __arr}
        default:
            return state
    }
}

export default listReducer
