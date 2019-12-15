import React , {Fragment} from 'react';
//import classes from './Person.css';
//import Aux from '../../../Auxiliary/Auxiliary';


const person = (props) => {
    return (
        <Fragment>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        </Fragment>
    )
};

export default person;