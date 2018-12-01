//creating a component
//function which returns jsx, html
//function - stateless

import React from 'react';
import './Person.css';
// import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width: '450px'
        }
    }
    return (
        <div className="Person" sytle={style}>
            <p onClick={props.click}>A person, {props.name} - {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
}

//dynamic content output

// export default Radium(person);
export default person;