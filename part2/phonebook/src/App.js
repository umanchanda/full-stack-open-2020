import React, { useState, useEffect } from 'react';
import Person from './components/Person'
import ErrorMessage from './components/ErrorMessage'
import SuccessMessage from './components/SuccessMessage'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')  
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  useEffect(() => {
    personService
      .getAll()
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
      const person = persons.find(person => person.name === newName)
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const id = person.id
        personService
          .update(id, { ...person, number: newNumber })
          .then(response => {
            setPersons(persons.map(person => person.id !== id ? person : response.data))
            setMessage(`Modified ${newName}`);
          })
          .catch((error) => {
            setErrorMessage(`Error modifying ${newName}`)
          })
      }
    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setMessage(`Added ${newName}`)
        })
        .catch((error) => {
          setErrorMessage(`Error adding ${newName}`)
        })
    }
    
    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (id, name) => {
    return() => {
      if (window.confirm(`Delete ${name}?`)) {
        personService
          .deleteObject(id)
          .then(response => {
            setPersons(persons.filter(person => person.id !== response.data))
            setMessage(`Deleted ${name}`)
          })
          .catch((error) => {
            setErrorMessage(`Information of ${name} has already been removed from server`)
          })
      }
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const namesToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ErrorMessage message={errorMessage} />
      <SuccessMessage message={message} />
      <div>filter show with <input value={filter} onChange={handleFilterChange}/></div>

      <h2>add a  new</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>

      <h2>Numbers</h2>
      <ul>{namesToShow.map(person => <Person key={person.id} name={person.name} number={person.number} deletePerson={deletePerson(person.id, person.name)}/>)}</ul>
    </div>
  )
}

export default App