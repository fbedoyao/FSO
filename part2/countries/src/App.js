import  { useState, useEffect } from 'react'
import axios from 'axios'

import Display from './Display.js'

const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [show, setShow] = useState(false)
  const [clickedCountry, setClickedCountry] = useState({isClicked: false, country: {}})

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])


  const handleFilterChange = (event) => {
    setClickedCountry({...clickedCountry, isClicked: false})
    if(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value)).length <= 10){
      setShow(true)
      setFilter(event.target.value)
    } else {
      setShow(false)
    }
  }

  const showCountry = (countrySelected) => {
    const object = {
      isClicked: true,
      country: countrySelected
    }
    setClickedCountry(object)

  }
 


  const countriesToShow = show ?
    countries.filter(country => country.name.common.toLowerCase().includes(filter)) :
    []

  return (
    <div>
      <h1>Countries</h1>
      <div>
        find countries: <input onChange = {handleFilterChange}/>
      </div>
      <Display countriesToShow = {countriesToShow} show = {show} clickHandler={showCountry} clickedCountry={clickedCountry}/>
    </div>
  );
}

export default App;
