import React from 'react';

const Filter = (props) => {
  return (
    <li key={props.name}>{props.name}</li>
  )
}

export default Filter