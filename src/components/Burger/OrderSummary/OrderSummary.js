import React, {Component} from 'react'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component{
    componentDidUpdate(){
            console.log('[OrderSummary update]')
    }

    render(){

        //span inline style
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
            <li key = {igKey}> 
                 <span style = {{textTransform : 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]}
            </li>
        )   
    })
        return(
            <Aux>
            <h3>Your Order</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice.toFixed(3)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType = 'Danger' clicked = {this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType = 'Success' clicked = {this.props.purchaseContinue}>CONTINUE</Button>
    </Aux>

        )
    }
}

/*const orderSummary = (props) =>{
    //span inline style
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
        <li key = {igKey}> 
        <span style = {{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
        </li>
        )   
    })

    return(
        <Aux>
                <h3>Your Order</h3>
                <p> A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.totalPrice.toFixed(3)}</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType = 'Danger' clicked = {props.purchaseCancelled}>CANCEL</Button>
                <Button btnType = 'Success' clicked = {props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )*/



export default OrderSummary