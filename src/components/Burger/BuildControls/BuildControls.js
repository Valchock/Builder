import React from 'react'
import './BuildControls.css'
import BuildControl from './BuilControl/BuildControl'


const controls = [
    { label : 'Salad', type : 'salad'},
    { label : 'Bacon', type : 'bacon'},
    { label : 'Cheese', type : 'cheese'},
    { label : 'Meat' , type : 'meat'}

]
const buildControls = (props) => {

    const displayControls = controls.map(item =>{
        return <BuildControl 
                    key = { item.label} 
                    label = {item.label} 
                    added = { () => props.addIngredient(item.type)}
                    removed = { () => props.removeIngredient(item.type)}
                    isdisabled = {props.senddisabled[item.type]} //true/false
                    />
    })
    return(
        <div className = "BuildControls">
            <p> Current Price : <strong>{props.totalPrice.toFixed(3)}</strong></p>  
            {displayControls}
            <button className = "OrderButton" disabled = {!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default buildControls;