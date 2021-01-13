import React, { useState } from 'react'
import Weather from './Weather'
import Country from './Country'

const ShowCountry = (props) => {

  const Information = () => (
    <div>
      <Country name={props.name} capital={props.capital} population={props.population} languages={props.languages} flag={props.flag} />
      <Weather city={props.capital} />
    </div>
  )

  const [ showInformation, setShowInformation ] = useState(false)
  const onClick = () => setShowInformation(true)

  return (
    <div>
      {props.name}
      <button onClick={onClick}>show</button>
      { showInformation ? <Information /> : null}
    </div>
  )
}

export default ShowCountry