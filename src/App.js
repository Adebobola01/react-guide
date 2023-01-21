import React, { Component} from "react";
import Person from "./Person/Person"
import './App.css';

class App extends Component {

  state = {
    persons: [
      { id: "kjalkdf", name: "Adebobola", age: 21 },
      { id: "jwijfoi", name: "Remilekun", age: 21 },
      { id: "jfka;f", name: "Oyedunmade", age: 21}
    ],
    showPersons: false 
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Adebobola", age: 21},
        { name: event.target.value, age: 21 },
        { name: "Oyedunade", age: 21 }
    ]})
  }

  switchNameHandler = (switchedName) => {
    this.setState({
      persons: [
        {name: switchedName, age: 21},
        { name: "Remilekun", age: 21 },
        { name: "Adebobola", age: 21 }
    ]})
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  togglePerson = () => {
    let show = this.state.showPersons
    this.setState({
      showPersons: !show
    })
  }

  
  
  
  render() {
    const style = {
      border: "1px solid green",
      backgroundColor: "green",
      padding: "8px",
      color: "white",
      fontSize: "16px",
      ":hover": {
        backgroundColor: "white",
        cursor: "pointer",
      }
    }
    let person = null;
  
    if (this.state.showPersons) {
      style.backgroundColor = "red"
      person = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return <Person name={person.name} age={person.age} click={this.deletePersonHandler.bind(this, personIndex)} key={person.id} changed={this.nameChangedHandler} />
          })}
        </div>
      )
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red")
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold")
    }


    return (
      <div className="App">
        <h1>Adebobola's first time</h1>
        <p className={classes.join(" ")} >This is really working!</p>
        <button onClick={this.togglePerson} style={ style}>toggle</button>
        {person}
      </div>
    )
  };
}

export default App;
