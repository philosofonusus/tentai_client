import React, {useState} from 'preact/compat'
import Header from "../header";
import SideBar from "../SideBar";
import useWindowSize from "../../hooks/windowSize.hook";

const LayOut = ({children, fixed_header}) => {
    const [menuBtnActive, menuBtnSetActive] = useState(false)
    const {width} = useWindowSize()
    return(
        <div>
            <Header fixed_header={fixed_header} menuBtnActive={menuBtnActive} menuBtnSetActive={menuBtnSetActive} bgNone={width < 560 && menuBtnActive}/>
            <SideBar active={menuBtnActive}/>
            <div style={{marginTop: '110px'}}>
                {children}
            </div>
        </div>
    )
}

export default LayOut
