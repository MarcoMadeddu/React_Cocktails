import React from 'react';
import SearchBar from './searchbar';
import MenuBar from './menubar';
export default function navBar({onSearchTerm}){
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        
       <a href="/"> <i class="fas fa-cocktail"></i>Drinks</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <MenuBar/>
            <SearchBar onSearchTerm = {onSearchTerm}/>
        </div>
    </nav>
    )
}