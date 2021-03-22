import React from 'preact/compat'
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'

import HomeRoute from "../../routes/home";
import LoginRoute from "../../routes/signIn"
import ProductRoute from "../../routes/product"
import RegisterRoute from "../../routes/signUp"
import UploadRoute from "../../routes/upload"
import Route404 from "../../routes/404"
import DiscoverRoute from "../../routes/discover";

const Router = ({user}) => (
    <Switch>
        <Route path="/" component={HomeRoute} exact/>
        <Route path="/upload" component={UploadRoute} exact/>
        <Route path="/product/:id" component={ProductRoute} exact/>
        <Route path="/discover" component={DiscoverRoute} exact/>
        <Route path="/404" component={Route404} exact/>
        <Route path="/register" exact component={() => !user ? <RegisterRoute/> : <Redirect to="/"/>}/>
        <Route path="/login" component={() => !user ? <LoginRoute/> : <Redirect to="/"/>} exact/>
        <Route render={() => <Redirect to="/404"/>} />
    </Switch>
)

export default connect(state => ({user: state.user}))(Router)
