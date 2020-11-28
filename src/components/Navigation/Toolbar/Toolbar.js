import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
/*mobile toolbar - no nav items*/
const toolbar = (props) =>(
    <header className = "Toolbar">
        <DrawerToggle clicked = {props.drawerToggleClicked}/>
        <Logo height = "80%"/>
        <nav className = "mobileOnly">
            <NavigationItems/>
        </nav>
    </header>

)

export default toolbar;