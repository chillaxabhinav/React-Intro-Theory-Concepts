import React from 'react';
import './Validation.css';

const Validation = (props) =>{
    let myvalidation = null;
    if (props.mylength > 5){
        myvalidation = (
           <p>Your string is perfect!</p>
        );
    }
    else{
        myvalidation = (
            <p>Increase a bit</p>
        );
    }
    return (
        <div className="Validation">
            <p>{props.mylength}</p>
            {myvalidation}
        </div>
    );
}

export default Validation;