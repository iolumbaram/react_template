import React, { Component } from 'react';
import './App.css';
import classes from './App.css'
import Persons from '../components/Persons/Persons'
// import Radium, { StyleRoot } from 'radium';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Cockpit from '../components/Cockpit/Cockpit';

//app.js is a container component
//that manages states
//app inherites from component
//better not involve with UI rendering as much as possible
//i.e. rendering method better be lean
class App extends Component {
  state = {
    persons: [
      {id: '1a', name: 'max1', age: 30},
      {id: '2a', name: 'max2', age: 24},
      {id: '3a', name: 'max3', age: 12},
      
    ],
    showPersons: false //array
  }

  nameChangedHandler = (event, id) => {
    // console.log('was clicked')
    // this.state.persons[0].name = 'hazel'
    // this doesnt work
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    
    this.setState({persons:persons})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState({persons: persons})
  } 
  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }
  
  //lecture 44: passing a reference to a hanlder as a propoerty to 
  //another componenet i.e. passing a method here in app.js to 
  //another compo as a props, so that method can be called in 
  //another comp which might change state in another compo
  //this allows indeirect access to the state 
  render() {
    // inline styling
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover':{
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
    // };

    let persons = null;

    if ( this.state.showPersons ) {
      //map - taking individual element and an index
      //passing index to function
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

// export default Radium(App);
export default App
