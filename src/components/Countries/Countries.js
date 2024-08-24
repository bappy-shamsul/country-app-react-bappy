import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='allCountry'>
           <h1>Number of Countries: {countries.length}</h1>
           {
            countries.map(country =>console.log(country))
           }
            {
                countries.map(country => <Country name={country}></Country>)
                
            }
      
        </div>
    );
};


// const Country = (props) => {
// return(
//     <div>
//         <h3>Name: {props.name}</h3>
//         <h3>Population: {props.pop}</h3>
//         <h3>Short Name: {props.cca2}</h3>
//     </div>
// )
// }

export default Countries;