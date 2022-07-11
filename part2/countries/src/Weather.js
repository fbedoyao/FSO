import {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = (props) => {
    const API_key = process.env.REACT_APP_API_KEY
    const [temp, setTemp] = useState('')
    const [icon, setIcon] = useState('03d')
    const [wind, setWind] = useState('')

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${props.country.capitalInfo.latlng[0]}&lon=${props.country.capitalInfo.latlng[1]}&appid=${API_key}`)
            .then(response => {
                setTemp(Math.round((response.data.main.temp -273)*100)/100)
                setIcon(response.data.weather[0].icon)
                setWind(response.data.wind.speed)
                
            })
    }, [])
    return (
        <div>
            <h3>Weather in {props.country.capital}:</h3>
            <p>Temperature: {temp} °C</p>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='icon'/>
            <p>Wind: {wind} m/s </p>
        </div>
    )
}

export default Weather