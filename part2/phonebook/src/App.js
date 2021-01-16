import React, { useState, useEffect } from 'react';
import Person from './components/Person'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {

  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')  
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ notification, setNotification ] = useState('')

  const notifyWith = (message, type='success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

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
            notifyWith(`Modified ${newName}`);
          })
          .catch(() => {
            notifyWith(`Error modifying ${newName}`, 'error')
          })
      }
    } else {
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          notifyWith(`Added ${newName}`)
        })
        .catch(() => {
          notifyWith(`Error adding ${newName}`, 'error')
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
            notifyWith(`Deleted ${name}`)
          })
          .catch((error) => {
            notifyWith(`Information of ${name} has already been removed from server`, 'error')
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
      <Notification notification={notification} />
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