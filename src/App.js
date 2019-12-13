import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton = styled.button`
             background-color : ${props => props.alt ? 'red' : 'green' };
              color : white;
              font : inherit;
              border : 1px solid blue;
              padding : 8px;
              &:hover {
                background-color : ${props => props.alt ? 'salmon' : 'lightgreen'};
                color : black;
              }
`;


class App extends Component {
  state  = {
    person : [
      {id : 1,name : 'Abhi', age : 21},
      {id:  2,name : 'Second', age : 23},
      {id: 3, name : 'third', age: 24}
    ],
    showPerson : false
  }

  deletePersonHandler =(personIndex) =>{
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({person : persons})
  }

  nameChangedHandler = (event , id) =>{
    const personIndex = this.state.person.findIndex((p)=>{
      return p.id === id;
    })
    const copyPersonObj = {
      ...this.state.person[personIndex]
    }
    //const copyPersonObj = Object.assign({},this.state.person[personIndex]);
    copyPersonObj.name = event.target.value;

    const copyPersonArr = [...this.state.person];
    
    copyPersonArr[personIndex] = copyPersonObj;
    this.setState({
      person: copyPersonArr
    })
  }


  togglePersonHandler = () =>{
    const personShow = this.state.showPerson;
    this.setState({showPerson : !personShow});
  }


  render() {
    // const Style = {
    //   backgroundColor : 'green',
    //   color : 'white',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding : '8px',
    //   ':hover':{
    //     backgroundColor :'lightgreen',
    //     color : 'black'
    //   }
    // }

    let persons = null;
    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.person.map((person,index) =>{
            return <Person
                      name={person.name}
                      age={person.age}
                      click = {() =>this.deletePersonHandler(index)}
                      key ={person.id}
                      changed = {(event) => this.nameChangedHandler(event,person.id)}
                    />
          })}
        </div>
      );
      // Style.backgroundColor = 'red';
      // Style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color : 'black'
      // }
    }

    const classes = [];
    if(this.state.person.length <= 2){
      classes.push('red');
    }
    if(this.state.person.length <= 1){
      classes.push('bold');
    }

    return (
 
      <div className="App">
       <h1>Hi, I'm a react app</h1>
       <p className={classes.join(' ')}>This is really working!!</p>
       <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>Toggle and delete</StyledButton>
        {persons}
      </div>
     
    );
  }
}

export default App;
