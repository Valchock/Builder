import Aux from '../../hoc/Auxiliary'
import React from 'react'
import './Layout.css'
const layout = (props) => {
    return(
        <Aux>
            <div>Toolbar, SideBar, Backdrop</div>
            <main className = "Content">{props.children}</main>
        </Aux>
    )
}

export default layout