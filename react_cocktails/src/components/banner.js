import React from 'react';
import BannerItem from './banner_item';

export default function banner({drinks}){
    return(
        <div className="banner">
                {
                    drinks.map(drink => <BannerItem key ={drink.idDrink} drink={drink}/>)
                }
            
        </div>
    )
}