import React, {Component} from 'react'
import './Modal.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }
    componentDidUpdate(){
        console.log('[Modal] update')
    }
    render(){
        return(
        <Aux>
            <BackDrop enabled = {this.props.show} clicked = {this.props.modalClosed}/>
            <div className = "Modal" style = {{ transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : this.props.show ? '1' : '0'}}>
                {this.props.children}
            </div>
        </Aux> 
        )
    }
}
/*const modal = (props) =>{
    //opacity - 1 - visible / 0 -not visible
    return(
        <Aux>
            <BackDrop enabled = {props.show} clicked = {props.modalClosed}/>
            <div className = "Modal" style = {{ transform : props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.show ? '1' : '0'}}>
                {props.children}
            </div>
        </Aux>
    )
}*/

export default Modal