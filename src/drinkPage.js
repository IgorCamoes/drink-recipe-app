import React, {useEffect, useState} from 'react';
import './drinkPage.css';

const DrinkPage = ({match}) =>{

    const [drink, setDrink] = useState([]);
    const {id} = match.params;

    const fetchDrink = async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setDrink(data.drinks);
    }

    useEffect(() =>{
        fetchDrink();
    }, []);


    return(
        <div id="dpContent">
            {drink.map(drink =>(
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
    );
}

export default DrinkPage;