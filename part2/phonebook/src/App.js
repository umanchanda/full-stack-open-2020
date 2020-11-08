import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Person from './components/Person'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')  
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    const isPresent = persons.some(person => person.name.includes(newName));
    
    if (isPresent) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(prevPersons => prevPersons.concat(personObject));
    }
    
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setShowAll(!showAll)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>

      <div>filter show with <input value={filter} onChange={handleFilterChange}/></div>

      <h2>add a  new</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      <ul>{namesToShow.map(person => <Person key={person.id} name={person.name} number={person.number} />)}</ul>
    </div>
  )
}

export default App