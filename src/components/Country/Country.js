import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, pop, cca2} = props.name
    return (
        <div className='eachCountry'>
         <h3>Name: {name.common}</h3>
         <h3>Population: {pop}</h3>
         <h3>Short Name: {cca2}</h3>
        </div>
    );
};

export default Country;