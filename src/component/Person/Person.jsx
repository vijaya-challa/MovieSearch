import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>LastName: {props.lastName}</h2>
      <h2>age: {props.age}</h2>
    </div>
  )
}

export default Person
