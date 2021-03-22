import React, {useState} from 'preact/compat'
import Header from "../header";
import SideBar from "../SideBar";

const LayOut = ({children, fixed_header}) => {
    const [menuBtnActive, menuBtnSetActive] = useState(false)
    return(
        <div>
            <Header fixed_header={fixed_header} menuBtnActive={menuBtnActive} menuBtnSetActive={menuBtnSetActive}/>
            <SideBar active={menuBtnActive}/>
            <div style={{marginTop: '110px'}}>
                {children}
            </div>
        </div>
    )
}

export default LayOut
