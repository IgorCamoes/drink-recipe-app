import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './search.css';

const Search = ({match}) =>{

    const {query} = match.params;

    const [search, setSearch] = useState([]);

    

    const fetchSearch = async () =>{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        setSearch(data.drinks);
    }

    useEffect(() =>{
        fetchSearch();
    });
    
    if(search !== null){
        return(
        <div>
            {search.map(search =>(
            <Link style={{textDecoration: 'none'}} to={`/drinks/${search.idDrink}`}>
              <div className='drinkDisplay'>
                <h2 key={search.idDrink}>{search.strDrink}</h2>
                <div>
                  <img className='drinkImg' src={search.strDrinkThumb} alt=""/>
                </div>
              </div>
            </Link>
          ))};
        </div>
    );
}
else{return(
    <div id='error'>
        <h2>No drinks found, are you sure you were searching for {query}?</h2>
    </div>
)}}

export default Search;