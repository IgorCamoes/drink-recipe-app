import React, {useState, useEffect} from 'react';

function App() {

  const [drinks, setDrinks] = useState([]);

  const getRandomDrink = async () =>{
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const drinkData = await response.json();
    setDrinks(drinkData.drinks);
    const drinkDisplayE = document.querySelector('.drinkDisplay');
    drinkDisplayE.style.animation = 'anim1 0.4s ease-in-out';
  };

  useEffect(() =>{
  }, []);


  return (
    <div className="app">
      <main>
        <button onClick={getRandomDrink}>Random</button>
        <input type="text" placeholder="Search for a drink"/>
        <button type="submit">Search</button>
      </main>
    
      <div>

      {drinks.map(drink =>(
        <div className='drinkDisplay'>
          <h2 key={drink.drinkId}>{drink.strDrink}</h2>
          <div>
            <img className='drinkImg' src={drink.strDrinkThumb} alt=""/>
          </div>
          <p>{drink.strGlass} - {drink.strAlcoholic}</p>
        </div>
      ))}

      </div>

      </div>
  );
}

export default App;
