import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './drinkpage.css';

const drinkPage = ({id}) =>{

    const [drink, setDrink] = useState([]);

    const fetchDrink = async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setDrink(data.drinks);
    }

    useEffect(() =>{
        fetchDrink();
    }, []);


    return(
        <div className="dpContent">
            <div className="container">
                
            </div>
        </div>
    );
}