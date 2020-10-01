import React , {Component}from 'react';
import './App.css';
import DrinkList from './components/drink_list';
import NavBar from './components/navbar';
import Banner from './components/banner';
//CONST & VARS
const APIURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//functions
function fetchCall(search=''){
    return fetch(APIURL + search).then(res => res.json());
}

class App extends Component{
  //COSTRUTTORE

  constructor(props){
    super(props);
    this.state = {
      cocktails : [],
    }
  }

  searchCocktail = (term = '') => {
    if(term.lenght > 3){
      return
    }
    fetchCall(term).then(res => {
      this.setState({
        cocktails : res.drinks,
     })
      console.log(res);
  })
  }

  componentDidMount(){
    this.searchCocktail('');
  }


  render(){
    return (
      <>
      <NavBar onSearchTerm = {this.searchCocktail}></NavBar>
     <div className="container">
        {/* <Banner drinks={this.state.cocktails}> </Banner> */}
        <DrinkList drinks={this.state.cocktails}> </DrinkList>
      
     </div>
     </>
    );
  }
}

export default App;
