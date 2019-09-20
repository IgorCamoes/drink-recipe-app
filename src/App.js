import React, {useState, useEffect} from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import logoGit from './img/github.svg';
import logoHome from './img/cocktail.png';
import logoIn from './img/linkedin.svg';

import DrinkPage from './drinkPage';
import Random from './random';
import Search from './search';

function Home (){
  const [drinks, setDrinks] = useState([]);
  

  const getDrinks = async () =>{
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const drinkData = await response.json();
    setDrinks(drinkData.drinks);
    const drinkDisplayEl = document.querySelectorAll('.drinkDisplay');
    
    drinkDisplayEl.forEach((el, index) =>{
      drinkDisplayEl[index].style.animation = 'anim1 0.5s ease-in-out'
    });
  };

  useEffect(() =>{
    getDrinks();
  }, []);

  return(
    <div>
          {drinks.map(drink =>(
            <Link style={{textDecoration: 'none'}} to={`/drinks/${drink.idDrink}`}>
              <div className='drinkDisplay' data-id={drink.idDrink}>
                <h2 key={drink.drinkId}>{drink.strDrink}</h2>
                <div>
                  <img className='drinkImg' src={drink.strDrinkThumb} alt=""/>
                </div>
              </div>
            </Link>
          ))};
    </div>
  )
}

function App() {

  const [query, setQuery] = useState('');
  
  const changeSearch = (e) =>{
    setQuery(e.target.value);
  }

  return (
    <Router>
      <div className="app">
        <main>
          <div>
            <Link to='/'>
              <img src={logoHome} alt=""/>
            </Link>
            <input onChange={changeSearch} type="text" placeholder="Search for a drink"/>
            <Link to={`/search/${query}`}>
              <button>Search</button>
            </Link>
            <Link to='/random'>
              <button>Random</button>
            </Link>
          </div>
        </main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/drinks/:id' component={DrinkPage} />
          <Route path='/search/:query' component={Search} />
          <Route patch='/random' component={Random} />
        </Switch>
        

        <footer>
          <div>
            <p>Made with <span role='img'>☕</span> and <span role='img'>🎶</span> by Igor Camões</p>
          </div>
          <div>
            <a href="https://github.com/IgorCamoes">
              <img src={logoGit} alt=""/>
            </a>
            <a href="https://www.linkedin.com/in/igorcamoes/">
              <img src={logoIn} alt=""/>
            </a>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
