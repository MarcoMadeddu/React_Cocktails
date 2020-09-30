import React from 'react';
import DrinkItem from './drink_item'

export default function drinkList({drinks}){
    if(!drinks){
        return null;
    }
        return(
            <div className = "row">
                {
                    drinks.map(drink => <DrinkItem key ={drink.idDrink} drink={drink}/>)
                }
            </div>
        )
}