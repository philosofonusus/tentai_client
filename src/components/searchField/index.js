import React, {useState} from 'preact/compat'
import styles from './style.css'
import {connect, useDispatch} from "react-redux";
import request from '../../request'
import setList from "../../redux/actions/listActions/setList";
import setListQueryParams from "../../redux/actions/listActions/setListQueryParams";
import setSearchQuery from "../../redux/actions/searchActions/searchParams/setSearchQuery";
import loader from '../../assets/loader.gif'

const SearchField = ({pageSize, searchParams}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const searchHandler = async () => {
        setLoading(true)
            try{
                const data = await request('http://localhost:3000/products/search', "POST", {...searchParams, count: true, pageSize})
                dispatch(setList(data))
                dispatch(setListQueryParams(searchParams))
                setLoading(false)
            } catch (e) {
                console.log(e)
                setLoading(false)
            }
    }

    return(
        <div class={styles.searchField}>
            <div class={styles.searchField__filterBtn}>
                <svg width="32" height="32" fill="none">
                    <path d="M28 9H11a1 1 0 110-2h17a1 1 0 110 2zM7 9H4a1 1 0 010-2h3a1 1 0 010 2zM21 17H4a1 1 0 010-2h17a1 1 0 010 2zM11 25H4a1 1 0 010-2h7a1 1 0 010 2z" fill="#fff"/>
                    <path d="M9 11a3 3 0 110-6 3 3 0 010 6zm0-4a1 1 0 100 2 1 1 0 000-2zM23 19a3 3 0 110-5.999A3 3 0 0123 19zm0-4a1 1 0 100 2.002A1 1 0 0023 15zM13 27a3 3 0 110-5.999A3 3 0 0113 27zm0-4a1 1 0 100 2.002A1 1 0 0013 23z" fill="#fff"/>
                    <path d="M28 17h-3a1 1 0 010-2h3a1 1 0 010 2zM28 25H15a1 1 0 010-2h13a1 1 0 010 2z" fill="#fff"/>
                </svg>
            </div>
            <input placeholder="Pick your poison"
                   value={searchParams.searchQuery}
                   onChange={e => dispatch(setSearchQuery(e.target.value))}
                   onKeyUp={e => {
                       setTimeout(async () => {
                            if(e.target.value !== searchParams.searchQuery) return;
                            await searchHandler()
                       }, 300)
                   }}
            />
            { !loading ?
            <svg class={styles.searchField__searchIcon} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                : <img src={loader} alt="loading" class={styles.searchField__searchIcon}/>
            }
        </div>
    )
}

export default connect(state => ({searchParams: state.searchParams, pageSize: state.list.pageSize}))(SearchField)
