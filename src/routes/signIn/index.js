import React, {useState} from 'preact/compat'
import InputFieldOutline from "../../components/InputFieldOutline";
import styles from '../sign.css'
import {logo__word} from'../../components/logo/style.css'
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux'
import FilledBtn from "../../components/FilledBtn";
import CheckBox from "../../components/CheckBox";
import {useDispatch} from "react-redux";
import loginUser from "../../redux/actions/userActions/auth/loginUser";

const LoginRoute = ({user}) => {
    if(user) return <Redirect to="/"/>
    const dispatch = useDispatch()
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
                <InputFieldOutline onChange={InputChangeHandler} placeholder="Email" type="email"  name="email"/>
                <InputFieldOutline onChange={InputChangeHandler} placeholder="Password" name="password" type="password"/>
                <CheckBox active={active} setActive={setActive} text={<span>Remember me</span>} />
                <FilledBtn onClick={() => dispatch(loginUser(form, active))}>
                    Log In
                </FilledBtn>
                <span class={styles.signContainer__link}>
                    Don't have an account? <Link to="/register" class={styles.signContainer__link_a}>Sign up!</Link>
                </span>
                <span class={styles.signContainer__link}>
                    <Link class={styles.signContainer__link_a} to="/">Forgot Password?</Link>
                </span>
            </div>
        </div>
    )
}

export default connect(state => ({user: !!state.user}))(LoginRoute)
