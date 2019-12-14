import React from 'react';
import './Char.css';

const CharCompo = (props) =>{
    const style ={
        display : 'inline-block',
        padding : '16px',
        textAlign : 'center',
        margin: '16px',
        border : '1px solid black'
    }
    // let character = null;
    // const myarray = Array.from(props.targetValue);
    // if(myarray.length > 0){
    //     character = (
    //         <div>
    //         {myarray.map(ele=>{
    //             return  <p>{ele}</p>  
    //         })}
    //         </div> 
    //     )
    return (
        <p style={style} onChange={props.textChnaged}>{props.element}</p>
    );
}

export default CharCompo;