//creating a component
//function which returns jsx, html
//function - stateless

//one single element in the persons component
import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';

const person = (props) => {
    // const style = {
    //     '@media (min-width: 500px)':{
    //         width: '450px'
    //     }
    // }
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>A person, {props.name} - {props.id} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        )
}

//dynamic content output

// export default Radium(person);
export default person;