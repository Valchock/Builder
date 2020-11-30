import React, {Component} from 'react'
import Aux from '../Auxiliary/Auxiliary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios)=>{
    return class extends Component{

        state = {
            apiError : null
        }
        componentDidMount(){
            axios.interceptors.request.use(request => {
                this.setState({apiError : null}) // next req after error , the previous state error remains- clear
                return request;   
            })
            axios.interceptors.response.use(response => response, error => {
                this.setState({apiError : error})  //error  
            })
        }

        errorConfirmedHandler = ()=>{
            this.setState({
                apiError : null
            })
        }
        //modal show if apierror != null , else no modal
        render(){
            return(
                <Aux>
                    <Modal show = {this.state.apiError} modalClosed = {this.errorConfirmedHandler}>
                        {/*{this.state.apiError.message}  Cannot read property 'message' of null -iniatially use below condition*/}
                        {this.state.apiError != null? this.state.apiError.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}

/*const withErrorHandler = (WrappedComponent)=>{
    return (props)=>{
        return(
            <Aux>
                <Modal show>
                    Something didn't work
                </Modal>
                <WrappedComponent {...props}/>
            </Aux>

        );
        }
}*/

export default withErrorHandler;