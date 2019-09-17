import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import logoGit from './img/github.svg'
import logoIn from './img/linkedin.svg'

function App() {

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


  return (
    <Router>
      <div className="app">
        <main>
          <div>
            <input type="text" placeholder="Search for a drink"/>
            <button type="submit">Search</button>
            <button>Random</button>
          </div>
        </main>
      
        <div>
          {drinks.map(drink =>(

            <div className='drinkDisplay' data-id={drink.idDrink}>
              <h2 key={drink.drinkId}>{drink.strDrink}</h2>
              <div>
                <img className='drinkImg' src={drink.strDrinkThumb} alt=""/>
              </div>
            </div>
          ))};
        </div>

        <footer>
          <div>
            <p>Made with ☕ and 🎶 by Igor Camões</p>
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
