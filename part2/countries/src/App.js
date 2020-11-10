import React, { useState, useEffect } from 'react'
// import Country from './components/Country'
// import Weather from './components/Weather'
import ShowCountry from './components/ShowCountry'
import axios from 'axios'

const App = () => {

  const [ country, setCountry ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const searchCountry = (event) => {
    event.preventDefault()
  }

  const handleSetCountry = (event) => {
    setCountry(event.target.value)
  }

  const countriesToShow = countries.filter(c => c.name.toLowerCase().includes(country.toLowerCase()))
  console.log(countriesToShow)
  console.log(countriesToShow.length)
  
  return (
    <div>
      <form onSubmit={searchCountry}>
        <div>find countries <input value={country} onChange={handleSetCountry} /></div>
      </form>
      <ul>{countriesToShow.length <= 10 ? 
        countriesToShow.map(c => {
          return (
            <li>{c.name} <ShowCountry name={c.name} capital={c.capital} population={c.population} languages={c.languages} flag={c.flag} /></li>
          )
        }) : 
        <p>Too many matches, specify another filter</p>}</ul>
    </div>
  );
}

export default App;

// {countriesToShow.length === 1 ? 
// countriesToShow.map(c => {
//   return (
//     <div>
//       <Country name={c.name} capital={c.capital} population={c.population} languages={c.languages} flag={c.flag} />
//       <Weather city={c.capital} />
//     </div>
//   )
// }) : 
// '' }