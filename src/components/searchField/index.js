import React from 'preact/compat'
import styles from './style.css'
import {useDispatch, useSelector} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import setList from "../../redux/actions/listActions/setList";
import setSearchQuery from "../../redux/actions/searchActions/searchParams/setSearchQuery";

const SearchField = () => {
    const searchParams = useSelector(state => state.searchParams)
    const {request} = useHttp()
    const dispatch = useDispatch()
    const searchHandler = async (e) => {
        if((e && e.key === 'Enter') || !e){
            try{
                const data = await request('http://localhost:3000/products/search', "POST", {searchTags: searchParams.searchTags, query: searchParams.searchQuery})
                dispatch(setList(data))
            } catch (e) {
                console.log(e)
            }
        }
    }
    return(
        <div class={styles.searchField}>
            <input placeholder="Pick your poison"
                   onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                   onKeyDown={searchHandler}
            />
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={searchHandler}>
                <g clip-path="url(#clip0)">
                    <path d="M4.97023 4.09634C4.71064 3.83654 4.28947 3.83654 4.02987 4.09634C3.06603 5.06019 2.5923 6.40287 2.72997 7.78037C2.76432 8.12353 3.05341 8.37932 3.39101 8.37932C3.4132 8.37932 3.43556 8.3782 3.45774 8.37598C3.82329 8.33942 4.08995 8.01331 4.05339 7.648C3.95541 6.66908 4.28971 5.71722 4.97023 5.03667C5.23004 4.77711 5.23004 4.3559 4.97023 4.09634Z" fill="white"/>
                    <path d="M7.60345 0C3.41089 0 0 3.41089 0 7.60345C0 11.796 3.41089 15.2069 7.60345 15.2069C11.796 15.2069 15.2069 11.796 15.2069 7.60345C15.2069 3.41089 11.796 0 7.60345 0ZM7.60345 13.8768C4.14422 13.8768 1.33007 11.0627 1.33007 7.60345C1.33007 4.14422 4.14422 1.33007 7.60345 1.33007C11.0625 1.33007 13.8768 4.14422 13.8768 7.60345C13.8768 11.0627 11.0627 13.8768 7.60345 13.8768Z" fill="white"/>
                    <path d="M17.8051 16.8648L12.9726 12.0323C12.7128 11.7725 12.2921 11.7725 12.0323 12.0323C11.7725 12.2919 11.7725 12.7131 12.0323 12.9727L16.8648 17.8052C16.9947 17.9351 17.1647 18 17.335 18C17.5052 18 17.6752 17.9351 17.8051 17.8052C18.0649 17.5456 18.0649 17.1244 17.8051 16.8648Z" fill="white"/>
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default SearchField
