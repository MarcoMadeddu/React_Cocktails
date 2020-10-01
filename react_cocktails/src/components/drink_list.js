import React from 'react';
import DrinkItem from './drink_item'

export default function drinkList({drinks}){
    console.log(drinks);
    
    if(drinks == null){
        return(
            <h2>No Drinks:(</h2>
        )
    }
        return(
            <> 
            <h1>Choose Your Drink</h1>
            <div className = "row">
                {
                    drinks.map(drink => <DrinkItem key ={drink.idDrink} drink={drink}/>)
                }
            </div>
            </>
        )
}