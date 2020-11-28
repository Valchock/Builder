import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

/* active prop - active= {true}*/

const navigationItems = (props) =>{
    return(
        <ul className = "NavigationItems"> 
            <NavigationItem link = "/" active >BurgerBuilder</NavigationItem>
            <NavigationItem link = "/">Checkout</NavigationItem>
        </ul>
    )
}
export default navigationItems;