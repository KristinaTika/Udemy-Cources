import React from 'react';
import "./SingleCountryItem.css";
import CountryMap from './CountryMap';

const SingleCountryItem = (props) => {

    const mapItems = (items) => {
        if (items.length === 0) {
            return <div> No info available </div>
        }
        return items.map((item) => {
            return <li key={item}>{item} </li>
        })
    }

    const checkString = (string) => {
        return string ? string : "No info available"
    }

    const { name, domain, nameCode, callingCode, capital, region, subregion, population, timezone, borders, nativeName, currencies, languages, translations, flag, regionalBlocs } = props.country;
    
    const trans = translations.split(", ");
    
    return (
        <div id="single-country-container">
            <h1> {name}</h1>
            <div className="flag">
                <img src={flag} alt={name}  />
            </div>
            <CountryMap map = {props.country.map} name={props.country.name}/>
            <div id="single-country-sub-container">
                <div>
                    <h3> Native name</h3>
                    <p>  {checkString(nativeName)}</p>
                    <h3> Capital city</h3>
                    <p> {checkString(capital)}</p>
                    <h3> Calling code</h3>
                    <ul>  {mapItems(callingCode)}</ul>
                    <h3> Name code</h3>
                    <p>  {checkString(nameCode)}</p>
                </div>
                <div>
                    <h3> Timezone </h3>
                    <ul> {mapItems(timezone)}</ul>
                    <h3>  Domain</h3>
                    <ul> {mapItems(domain)}</ul>
                    <h3> Borders </h3>
                    <ul>
                        {mapItems(borders)}
                    </ul>
                    <h3> Currencies </h3>
                    <ul>  {mapItems(currencies)}</ul>
                </div>
                <div>
                    <h3>  Languages</h3>
                    <ul>
                        {mapItems(languages)}
                    </ul>
                    <h3> Population </h3>
                    <p> {checkString(population)}</p>
                    <h3>  Region</h3>
                    <p>{checkString(region)}</p>
                    <h3>  Subregion</h3>
                    <p> {checkString(subregion)}</p>
                    <h3>  Regional blocs</h3>
                    <ul>   {mapItems(regionalBlocs)}</ul>
                    <h3> Translations</h3>
                    <ul> {mapItems(trans)}</ul>
                </div>
            </div>
        </div>
    );
};



export default SingleCountryItem;