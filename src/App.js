import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBounday from './ErrorBoundary/ErrorBoundary';



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


    let btnClass = [classes.Button];


    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.person.map((person,index) =>{
            return <ErrorBounday key ={person.id}><Person
                      name={person.name}
                      age={person.age}
                      click = {() =>this.deletePersonHandler(index)}
                      changed = {(event) => this.nameChangedHandler(event,person.id)}
                    /></ErrorBounday>
          })}
        </div>
      );
      // Style.backgroundColor = 'red';
      // Style[':hover'] = {
      //   backgroundColor : 'salmon',
      //   color : 'black'
      // }

          btnClass.push(classes.Red);

    }

    const assignedClasses = [];
    if(this.state.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.person.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
 
      <div className={classes.App}>
       <h1>Hi, I'm a react app</h1>
       <p className={assignedClasses.join(' ')}>This is really working!!</p>
       <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>Toggle and delete</button>
        {persons}
      </div>
     
    );
  }
}

export default App;
