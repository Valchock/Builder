import React from 'react'
import './DrawerToggle.css'

const drawerToggle = (props) =>{
return(
   /* <div onClick = {props.clicked}> Menu </div>*/
    <div className = "DrawerToggle" onClick = {props.clicked}> 
        <div></div>
        <div></div>
        <div></div>
    </div>
)
}
export default drawerToggle;