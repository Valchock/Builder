import React from 'react'
import classes from './Button.css'

const button = (props) =>{
    const styleButton = [];
    styleButton.push(props.btnType)

    return(
        <button className = {styleButton.join('')} onClick = {props.clicked}>{props.children}</button>
    )
}

export default button;