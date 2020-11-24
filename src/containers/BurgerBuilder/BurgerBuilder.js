import React , {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuilControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}
class BurgerBuilder extends Component{
    state = {
        ingredients :{
            salad : 0,
            meat : 0,
            bacon : 0,
            cheese : 0
        },
        totalPrice : 4,
        purchasable : false

    }

    updatePurchaseState = (ingredientsObj) =>{
        //const ingredientsObj = {...this.state.ingredients}
        const sum = Object.keys(ingredientsObj).map(igKey => {
            return ingredientsObj[igKey]
        })
        .reduce((cursum, item) => cursum + item , 0)
        this.setState({purchasable : sum > 0})
    }

    addIngredientHandler = (type) =>{
        const oldIngredientCount = this.state.ingredients[type];
        const updatedIngredientCount = oldIngredientCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedIngredientCount;
        const priceAddition = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : priceAddition
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        if(this.state.ingredients[type] <= 0){
            return; //when we try to remove an ingredient which is not added or empty
        }
        const updatedIngredients = { ... this.state.ingredients};
        updatedIngredients[type] = this.state.ingredients[type] - 1;
        const priceDeduction = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            ingredients : updatedIngredients,
            totalPrice : priceDeduction
        })
        this.updatePurchaseState(updatedIngredients);
    }

   

    render(){
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0;
        }

        // disabledInfo {salad:true, meat : false} true count > 0 else false
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <BuilControls
                    addIngredient = {this.addIngredientHandler} 
                    removeIngredient = {this.removeIngredientHandler}
                    senddisabled = {disabledInfo}
                    totalPrice = {this.state.totalPrice}
                    purchasable = {this.state.purchasable}/>
            </Aux>
        )
    }
}

export default BurgerBuilder