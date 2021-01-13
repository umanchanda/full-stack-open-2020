import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Weather = (props) => {

  const apiKey = process.env.REACT_APP_API_KEY
  const [ weather, setWeather ] = useState([])
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${props.city}&units=f`


  console.log(url)

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setWeather(response.data.current)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return (
    <div>
      <h3>Weather in {props.city}</h3>
      <p>Temperature: {weather.temperature} degrees Farenheit</p>
      <img src={weather.weather_icons} alt={props.city} width="75" height="75" />
      <p>Wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
  )
}

export default Weather