import React, { useState } from 'react';

const Person = (props) => {
  const [ persons, setPersons ] = useState(props.persons)
  const [ newName, setNewName ] = useState('')  
  const [ newNumber, setNewNumber ] = useState('')

  const addNewPerson = (event) => {
      event.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber,
          id: persons.length + 1
      }

      const isPresent = props.persons.some(person => person.name.includes(newName));
      
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

  return (
      <div>
          <h2>add a  new</h2>
          <form onSubmit={addNewPerson}>
              <div>name: <input value={newName} onChange={handleNameChange}/></div>
              <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
              <div><button type="submit">add</button></div>
          </form>

          <h2>Numbers</h2>
          <ul>{persons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}</ul>
      </div>
  )
}

export default Person