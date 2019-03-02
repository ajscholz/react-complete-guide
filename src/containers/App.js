import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={appCss.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm a React Element!!!`));
  }
}

export default App
