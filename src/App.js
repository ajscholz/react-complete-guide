import React, { Component } from 'react';
import Person from './Person/Person';
import appCss from './App.module.css';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { id: 'sdhjf', name: 'Max', age: 28, },
      { id: 'weuri', name: 'Manu', age: 29, },
      { id: 'cxvis', name: 'Stephanie', age: 26, },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    // Creates new array of people from state to maintain state immutability
    const persons = [...this.state.persons];

    // Takes given ID and finds the index of the person in state with that id
    const personIndex = this.state.persons.findIndex(p => p.id === id)

    // Creates a new JS object to maintain state immutability
    const person = { ...this.state.persons[personIndex], }

    // Now manipulate new JS Object (not original state)
    person.name = event.target.value;

    // Now update copied state array
    persons[personIndex] = person;

    // Now update state with copied arrays & objects
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // !doesShow below simply reverses the boolean
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;
    let buttonClass= '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      buttonClass = appCss.Red;
    }

    // Creates dynamic styling, which is displayed inside the <p> element below
    const classes = [];
    if (this.state.persons.length <= 2) classes.push(appCss.red);
    if (this.state.persons.length <= 1) classes.push(appCss.bold);

    return (
      <div className={appCss.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={buttonClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React Element!!!`));
  }
}

export default App
