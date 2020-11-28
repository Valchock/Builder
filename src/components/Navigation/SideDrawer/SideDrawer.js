import React from 'react'
import  './SideDrawer.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import BackDrop from '../../UI/BackDrop/BackDrop'

const sideDrawer = (props) =>{
   
    /*drawer open close - style*/
    return(
        <div>
            <BackDrop enabled = {props.open} clicked = {props.closed}/>
            <div className = "SideDrawer" style = {{transform : props.open ? 'translateX(0)' : 'translateX(-100%)'}}>
                <Logo height = "13%" />
                <NavigationItems/>
            </div>
        </div>
    )

   
}

export default sideDrawer;