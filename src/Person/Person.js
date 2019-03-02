=import React from 'react';
import personCss from './Person.module.css';

const person = (props) => {

  // Creates dynamic styling, which is displayed inside the <p> element below
  const classes = [];
  if (props.persons.length <= 2) classes.push(appCss.red);
  if (props.persons.length <= 1) classes.push(appCss.bold);

  return (
    <div className={personCss.Person}>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age}!</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
    </div>
  )
}

export default person
