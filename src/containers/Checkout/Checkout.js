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

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};
        for(let param of query.entries()){
            ingredient[param[0]] = +param[1];
        }
        this.setState({ingredients : ingredient})
    }

    checkoutCancelledHandler = () =>{
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () =>{
        this.props.history.replace('/checkout/contact-data');
    }
    render(){
        return(
                <div>
                    <CheckoutSummary ingredients = {this.state.ingredients} checkoutCancelled = {this.checkoutCancelledHandler} checkoutContinued ={this.checkoutContinuedHandler}/>
                </div>
        )
    }
}

export default Checkout;