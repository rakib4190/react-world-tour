import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] =useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => setCountries(data))
    },[]);
    const handleVisitedCountry = country =>{
        console.log('add this to your visited country list');
        const newVisitedCountries = [...visitedCountries, country];
        console.log(newVisitedCountries)
        setVisitedCountries(newVisitedCountries);

    }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h3>Visited Country: {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(visitedCountry => <li>{visitedCountry.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;