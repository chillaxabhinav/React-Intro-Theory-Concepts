import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharCompo from './Char/Char';


class App extends Component {
  state = {
    textLength : 0,
    mytext : ''
  }

  textChangeHandler = (event) =>{
    const mylength = event.target.value.length;
    const textchange = event.target.value;

    this.setState({
      textLength : mylength,
      mytext : textchange
    })
  }
  // state  = {
  //   person : [
  //     {id : 1,name : 'Abhi', age : 21},
  //     {id:  2,name : 'Second', age : 23}
  //   ],
  //   showPerson : false
  // }

  // deletePersonHandler =(personIndex) =>{
  //   const persons = [...this.state.person];
  //   persons.splice(personIndex,1);
  //   this.setState({person : persons})
  // }

  // nameChangedHandler = (event , id) =>{
  //   const personIndex = this.state.person.findIndex((p)=>{
  //     return p.id === id;
  //   })
  //   const copyPersonObj = {
  //     ...this.state.person[personIndex]
  //   }
  //   //const copyPersonObj = Object.assign({},this.state.person[personIndex]);
  //   copyPersonObj.name = event.target.value;

  //   const copyPersonArr = [...this.state.person];
    
  //   copyPersonArr[personIndex] = copyPersonObj;
  //   this.setState({
  //     person: copyPersonArr
  //   })
  // }


  // togglePersonHandler = () =>{
  //   const personShow = this.state.showPerson;
  //   this.setState({showPerson : !personShow});
  // }


  render() {
    // const Style = {
    //   backgroundColor : 'White',
    //   font : 'inherit',
    //   border : '1px solid blue',
    //   padding : '8px'
    // }

    // let persons = null;
    // if (this.state.showPerson){
    //   persons = (
    //     <div>
    //       {this.state.person.map((person,index) =>{
    //         return <Person
    //                   name={person.name}
    //                   age={person.age}
    //                   click = {() =>this.deletePersonHandler(index)}
    //                   key ={person.id}
    //                   changed = {(event) => this.nameChangedHandler(event,person.id)}
    //                 />
    //       })}
    //     </div>
    //   );
    // }
    let character = null;
    const myarray = Array.from(this.state.mytext);

    if(myarray.length>0){
       character = (
         <div>
         {myarray.map(ele => {
           return <CharCompo element={ele} textchanged={(event => this.textChangeHandler(event))}/>
         })}
         </div>
       )
    }
    return (
      <div className="App">
      <h1>My React App</h1>
        <p>{this.state.textLength}</p>
        <input type="text" onChange={this.textChangeHandler}/>
        <Validation mylength={this.state.textLength}/>
        {character}
      </div>
    );
  }
}

export default App;
