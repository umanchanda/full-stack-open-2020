import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Weather = (props) => {

  const apiKey = process.env.REACT_APP_API_KEY
  const [ current, setCurrent ] = useState([])
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${props.city}&units=f`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setCurrent(response.data.current)
      })
  })

  return (
    <div>
      <h3>Weather in {props.city}</h3>
      <p>Temperature: {current.temperature} degrees Farenheit</p>
      <img src={current.weather_icons} alt={props.city} width="75" height="75" />
      <p>Wind: {current.wind_speed} mph direction {current.wind_dir}</p>
    </div>
  )
}

export default Weather