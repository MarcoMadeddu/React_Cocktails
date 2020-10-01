import React from 'react';

export default function drinkItem({drink}){
    return(
        <div className="drink-card col-md-6 col-12">
            <div className="card-content">
                <div className="card-top">
                    <div className="card-info">
                        <h2>{drink.strDrink}</h2>
                        <p>{drink.strInstructions}</p>
                    </div>
                    <div className="card-img">
                        <img src={drink.strDrinkThumb} alt="" srcset=""/>
                    </div>
                </div>
            </div>
        </div>

        
   
    )
}