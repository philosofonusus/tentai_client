import React from 'preact/compat'
import {useEffect, useState} from 'preact/hooks'
import {useDispatch} from "react-redux";
import Loader from "../loader";
import authByToken from "../../redux/actions/userActions/auth/authByToken";

const AuthMiddleware = (props) => {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(async () => {
        await dispatch(authByToken()).finally(() => setLoading(false))
    }, [])
    if(loading) return <Loader />
    return(
        props.children
    )
}
export default AuthMiddleware
