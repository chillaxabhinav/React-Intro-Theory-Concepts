import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state  = {
    person : [
      {name : 'Abhi', age : 21},
      {name : 'Second', age : 21}
    ]
  }

  switchNameHandler = (newname) =>{
    this.setState({
      person : [
      {name : newname, age : 22},
      {name : 'Second', age : 21}
    ]
    })
  }

  changeNameHandler = (event) =>{
    this.setState({
      person: [
        { name: 'Abhinav', age: 22 },
        { name: event.target.value, age: 21 }
      ]
    })
  }


  render() {
    const Style = {
      backgroundColor : 'White',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px'
    }
    return (
      <div className="App">
       <h1>My React App</h1>
       <button style={Style} onClick={()=>this.switchNameHandler('Abhinav from switchname passed')}>Swich name</button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler}>My Hobbies: Development</Person>
       <Person name={this.state.person[1].name} age={this.state.person[1].age} changed={this.changeNameHandler}/>
      </div>
    );
  }
}

export default App;
