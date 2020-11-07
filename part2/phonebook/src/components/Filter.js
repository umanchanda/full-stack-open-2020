import React, { useState } from 'react';

const Filter = (props) => {
  const [ filter, setFilter ] = useState('')
  // const [ showAll, setShowAll ] = useState(true)

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    // setShowAll(!showAll)
  }

  const namesToShow = props.persons.map(person => person.name).filter(name => name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <div>filter show with <input value={filter} onChange={handleFilterChange}/></div>      
  
      <h2>Filtered</h2>
      <ul>{namesToShow.map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  )
}

export default Filter