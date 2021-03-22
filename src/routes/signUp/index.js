import React, {useState} from 'preact/compat'
import InputFieldOutline from "../../components/InputFieldOutline";
import styles from '../sign.css'
import {logo__word} from'../../components/logo/style.css'
import {Link, Redirect} from "react-router-dom";
import FilledBtn from "../../components/FilledBtn";
import CheckBox from "../../components/CheckBox";
import {useDispatch} from "react-redux";
import {useHttp} from "../../hooks/http.hook";
import registerUser from "../../redux/actions/userActions/auth/registerUser";
import {connect} from "react-redux";

const RegisterRoute = ({user}) => {
    if(user) return <Redirect to="/"/>
    const dispatch = useDispatch()
    const {request, loading} = useHttp()
    const [active, setActive] = useState(false)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const InputChangeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    return(
        <div class={styles.container}>
            <div class={styles.signContainer}>
                <Link to="/" class={logo__word}>
                    TENTAI
                </Link>
                <InputFieldOutline onChange={InputChangeHandler} placeholder="Email" type="email" name="email"/>
                <InputFieldOutline onChange={InputChangeHandler} placeholder="Username" type="text" name="name"/>
                <InputFieldOutline onChange={InputChangeHandler} placeholder="Password" type="password" name="password"/>
                <CheckBox active={active} setActive={setActive} text={<span>I agree to the <Link class={styles.signContainer__link_a} to="/">Privacy Policy</Link></span>}/>
                <FilledBtn disabled={loading} onClick={() => active && dispatch(registerUser(form, request))}>
                    Sign Up
                </FilledBtn>
                <span class={styles.signContainer__link}>
                    Already have an account?<Link to="/login" class={styles.signContainer__link_a}> Sign in!</Link>
                </span>
            </div>
        </div>
    )
}

export default connect(state => ({user: !!state.user}))(RegisterRoute)
