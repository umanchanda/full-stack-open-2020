import React from 'react';

const Person = (props) => {
  return (
    <li key={props.key}>{props.name} {props.number}</li>
  )
}

export default Person