import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBounday from './ErrorBoundary/ErrorBoundary';



class App extends Component {
  state  = {
    persons : [
      {id : 1,name : 'Abhi', age : 21},
      {id:  2,name : 'Second', age : 23},
      {id: 3, name : 'third', age: 24}
    ],
    showPerson : false
  }

  deletePersonHandler =(personIndex) =>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons})
  }

  nameChangedHandler = (event , id) =>{
    const personIndex = this.state.persons.findIndex((p)=>{
      return p.id === id;
    })
    const copyPersonObj = {
      ...this.state.persons[personIndex]
    }
    //const copyPersonObj = Object.assign({},this.state.person[personIndex]);
    copyPersonObj.name = event.target.value;

    const copyPersonArr = [...this.state.persons];
    
    copyPersonArr[personIndex] = copyPersonObj;
    this.setState({
      persons: copyPersonArr
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
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
      );
      // Style.backgroundColor = 'red';
      // Style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color : 'black'
      // }

          

    }

   
    return (
 
      <div className={classes.App}>
        <Cockpit showPersons ={this.state.showPerson} persons={this.state.persons} clicked={this.togglePersonHandler} />
        {persons}
      </div>
     
    );
  }
}

export default App;
