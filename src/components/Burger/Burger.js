import React from 'react'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
import './Burger.css'
import {withRouter} from 'react-router-dom'

const burger = (props) =>{
    console.log(props);
    /*Object.keys() extracts keys of given object and turns into array (like hashmap)
    console.log(Object.keys(props.ingredients)) - ["salad", "meat", "bacon", "cheese"}
    
    transform into an array of size of ingredient [...Array(3)] - [undefined] salad
                                                        [undefined, undefined] meat
    reduce - please add ingredient*/
      
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        /*console.log(props.ingredients[igKey])
        console.log( [...Array(props.ingredients[igKey])])*/
        return [...Array(props.ingredients[igKey])].map((_, i)=>{
               return  <BurgerIngredient key={igKey+i} type = {igKey}/>
        })
    })
    .reduce( (arr,ele) => {
        return arr.concat(ele)
    },[])

    console.log(transformedIngredients)
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding Ingredients</p>
    }
    
    return(
        <div className = "Burger">
           
            <BurgerIngredient type = "bread-top" />
            {transformedIngredients}
            {/* Not dynamic ingredients <BurgerIngredient type = "salad" />
            <BurgerIngredient type = "bacon" />
            <BurgerIngredient type = "salad" />
            <BurgerIngredient type = "cheese" />
            <BurgerIngredient type = "meat" />*/}
            <BurgerIngredient type = "bread-bottom" />
        </div>
    )
}

export default withRouter(burger); //output-ingredient