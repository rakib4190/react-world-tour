import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags,capital,population} = country;

    const [visited, setVisited]=useState(false)
    const handleVisited =()=>{
         setVisited (!visited);
    }
    return (
        <div className='country-box'>
          <h4>Country Name :{name.common}</h4>
          <img src={flags.png} alt="" />
          <p>Capital:{capital} </p>
          <p>Population: {population}</p>
          <button onClick={()=>handleVisitedCountry(country)}>Mark As Visited</button>
          <br />
          <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           { visited ?  'I have Visited this country' : 'I want to Visit'}  
        </div>
    );
};

export default Country;