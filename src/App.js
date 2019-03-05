import React, { Component } from 'react';
import logo from './logo.svg';
// import Radium, {StyleRoot} from 'radium'
import './App.css';

import UserInput from './UserInput/UserInput.js'
import UserOutput from './UserOutput/UserOutput.js'
import Person from './Person/Person.js'


class App extends Component {
  state = {
    username: 'supermax',
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stepheanie', age: 30 }
    ],
    showPersons: false,
    showPersonsByVar: false
  }

  togglePersonByVarHandler = () => {
    const doesShow = this.state.showPersonsByVar;
    this.setState({
      showPersonsByVar: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    //Copy array with spread opeartor in ES6 to update state in immutable way
    const lpersons = [...this.state.persons];
    //Delete
    lpersons.splice(personIndex, 1);
    this.setState({ persons: lpersons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow

    });
  }

  switchNameHandler = (newname) => {
    this.setState({
      persons: [
        { id: '1', name: newname, age: 28 },
        { id: '2', name: 'Manu', age: 29 },
        { id: '3', name: 'Stepheanie', age: 30 }
      ]

    });
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const personsNew = [...this.state.persons];
    personsNew[personIndex] = person;

    this.setState({
      persons: personsNew
    });
  }

  usernameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }



  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      // ':hover': {
      //   backgroundColor : 'lightgreen',
      //   color:'black'
      // }
    };

    let persons = null;
    if (this.state.showPersonsByVar === true) {
      persons = (
        <div>
          {
            this.state.persons.map((p, index) => {
              return (<Person click={this.deletePersonHandler.bind(this, index)}
                key={p.id}
                name={p.name}
                age={p.age}
                changed={(event) => this.nameChangedHandler(event, p.id)}>
                This is Childern obj for {p.id}</Person>)
            })
          }
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor : 'lightred',
      //   color:'black'
      // }
    };

    let cssClasses = [];
    if (this.state.persons.length <= 2) {
      cssClasses.push('red'); // cssClasses = ['red']
    }
    if (this.state.persons.length <= 1) {
      cssClasses.push('bold'); // cssClasses = ['red', 'bold']
    }
    return (
      <div className="App">
        <h1>My React App</h1>
        <p className={cssClasses.join(' ')}>This is really working!!!</p>
        <button style={style} onClick={this.togglePersonByVarHandler}>Toggle Persons by var</button>
        {persons}
        <hr></hr>
        <button onClick={this.switchNameHandler.bind(this, 'Manish B')}>Switch Name</button>
        <hr></hr>
        <UserInput
          changed={this.usernameChangedHandler}
          currentName={this.state.username}>
        </UserInput>

        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName='Max' />

      </div>
     
    );
  }
}

export default App;
