import axios from "axios"
import { useEffect, useState } from "react"

import Weather from './Weather.js'




const Country = (props) => {




    return (
        <div>
            <h2>{props.country.name.common}</h2>
            <div>
                <p>Capital: {props.country.capital}</p>
                <p>Area: {props.country.area}</p>
                <div>
                    <h4>Languages:</h4>
                        <ul>
                            {
                            Object.entries(props.country.languages).map(([key, value]) => 
                                <li key = {key}> {value}</li>
                            )
                            }
                        </ul>
                    <h4>Flag:</h4>
                    <img src= {props.country.flags.png} alt = "flag"></img>
                    <Weather country = {props.country}/>
                </div>
            </div>
        </div>
    )
}
export default Country