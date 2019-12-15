import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../Auxiliary/WithClass';
// import ErrorBounday from './ErrorBoundary/ErrorBoundary';



class App extends PureComponent {


  state  = {
    persons : [
      {id : 1,name : 'Abhi', age : 21},
      {id:  2,name : 'Second', age : 23},
      {id: 3, name : 'third', age: 24}
    ],
    showPerson : false,
    showCockpit : false
  }

  // ==== Used PureComponents so don't have to use this ==== //
  // shouldComponentUpdate(nextProps,nextState){
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked 
  //   ){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

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

  showCockpitHandler = () =>{
    if(this.state.showCockpit){
    this.setState({
      showCockpit : false
      })
    }
    else{
      this.setState({
        showCockpit : true
      })
    }
}

  render() {
    let persons = null;

    if (this.state.showPerson){
      persons = (
          <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
          />
      );
    }

    let myCockpit = null;
    if(this.state.showCockpit){
      myCockpit = (
        <Cockpit
          showPersons={this.state.showPerson}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
        />
      )
    }

   
    return (
 
      <WithClass classes={classes.App}>
        <button onClick={this.showCockpitHandler} className={classes.cockpit}>Click to show cockpit</button>
        {myCockpit}
        {persons}
      </WithClass>
     
    );
  }
}

export default App;
