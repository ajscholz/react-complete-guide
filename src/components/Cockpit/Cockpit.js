import React from 'react';
import cockpitCss from './Cockpit.module.css';

const Cockpit = (props) => {

  // Creates dynamic styling, which is displayed inside the <p> element below
  const classes = [];
  let buttonClass = '';
  if (props.showPersons) {
    buttonClass = cockpitCss.Red;
  }

  if (props.persons.length <= 2) classes.push(cockpitCss.red);
  if (props.persons.length <= 1) classes.push(cockpitCss.bold);

  return (
    <div className={cockpitCss.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        className={buttonClass}
        onClick={props.click}>Toggle Persons</button>
    </div>
  )
}

export default Cockpit;
