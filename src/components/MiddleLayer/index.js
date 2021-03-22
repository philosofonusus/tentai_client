import React from 'preact/compat'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../redux/store";
import AuthMiddleware from "../authMiddleware";

const MiddleLayer = ({children}) => (
    <BrowserRouter>
        <Provider store={store}>
            <AuthMiddleware>
                {children}
            </AuthMiddleware>
        </Provider>
    </BrowserRouter>
)

export default MiddleLayer
