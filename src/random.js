import React, {useState, useEffect} from 'react';
import './App';
import './drinkPage.css';

const searchButton = document.querySelector('main > button:nth-child(2)');

const Random = () =>{
    const [drink, setDrink] = useState([]);

    console.log(searchButton);

    const fetchDrink = async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
        const data = await response.json();
        setDrink(data.drinks);
    }

    useEffect(() =>{
        fetchDrink();
    },[]);

    return(
        <div id="dpContent">
            {drink.map(drink=>(
                <div className="container">
                <img src={drink.strDrinkThumb} alt=""/>
                <div>
                    <h2>{drink.strDrink}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li><p>WIP</p></li>
                    </ul>
                    <h3>Instructions:</h3>
                    <p className='instructions'>{drink.strInstructions}</p>
                </div>
                <div>
                    <p>Glass: {drink.strGlass}</p>
                    <p>{drink.strAlcoholic}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Random;