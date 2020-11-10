import React from 'react'

const Country = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
      <h3>Spoken Languages</h3>
      <ul>{props.languages.map(l => <li key={l.iso639_2}>{l.name}</li>)}</ul>
      <img src={props.flag} alt={props.name} width="200" height="150" />
    </div>
  )
}

export default Country