import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'

const persons = [
  { name: 'Arto Hellas', number: '040-123456', id: 1 },
  { name: 'Ada Lovelace', number: '39-44-532532', id: 2 },
  { name: 'Dan Abramov', number: '12-43-523221', id: 3 },
  { name: 'Mary Poppendieck', number: '39-23-6426326', id: 4 }
]

ReactDOM.render(<App persons={persons} />, document.getElementById('root'));