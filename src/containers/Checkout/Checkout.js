import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component{
    state ={
        ingredients: {
            salad : 2,
            cheese : 2,
            meat : 3,
            bacon : 4
        }
    }
    render(){
        return(
                <div>
                    <CheckoutSummary ingredients = {this.state.ingredients}/>
                </div>
        )
    }
}

export default Checkout;