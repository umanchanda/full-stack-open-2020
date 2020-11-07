import React from 'react';
import Person from './components/Person'
import Filter from './components/Filter'

const App = (props) => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter persons={props.persons} />
      <Person persons={props.persons} />
    </div>
  )
}

export default App