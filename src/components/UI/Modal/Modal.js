import React from 'react'
import './Modal.css'
import Aux from '../../../hoc/Auxiliary'
import BackDrop from '../BackDrop/BackDrop'

const modal = (props) =>{
    //opacity - 1 - visible / 0 -not visible
    return(
        <Aux>
            <BackDrop enabled = {props.show} clicked = {props.modalClosed}/>
            <div className = "Modal" style = {{ transform : props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal