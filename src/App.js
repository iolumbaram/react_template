import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import Radium, { StyleRoot } from 'radium';

//app inherites from component
class App extends Component {
  state = {
    persons: [
      {id: '1a', name: 'max1', age: 30},
      {id: '2a', name: 'max2', age: 24},
      {id: '3a', name: 'max3', age: 12},
      
    ],
    showProp : false //array
  }

  nameChangeHandler = (event, id) => {
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

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState({persons: persons})
  } 
  togglePersonsHandler = () => {
     const doesShow = this.state.showPerosns;
     this.setState({showPersons: !doesShow})
  }
  
  //lecture 44: passing a reference to a hanlder as a propoerty to 
  //another componenet i.e. passing a method here in app.js to 
  //another compo as a props, so that method can be called in 
  //another comp which might change state in another compo
  //this allows indeirect access to the state 
  render() {
    // inline styling
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover':{
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if (this.state.showPersons) {
      //map - taking individual element and an index
      //passing index to function
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonsHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id} 
                changed={(event) => this.nameChangeHandler(event, person.id)}
                />
                
            })}
        </div> 
      )
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    };

    let classes_red = ['red', 'bold'].join(' ')
    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red')
    }
    if(this.state.persons.length<=1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hello, react app!</h1>
        <h1 className = {classes_red}>this-is-sub-title</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Name</button>
          {persons}
      </div>
      // <StyleRoot>

      // </StyleRoot>

    );
  }
}

// export default Radium(App);
export default App
