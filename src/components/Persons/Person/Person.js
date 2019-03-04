import React, { Component } from 'react';
import personCss from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={personCss.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age}!
        </p>
        <p>{this.props.children}</p>
        <input
          type='text'
          onChange={this.props.changed}
            value={this.props.name} />
      </div>
    )
  }
}

export default Person;
