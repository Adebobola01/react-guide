import React, { Component} from "react";
import Person from "./Person/Person"
import './App.css';
import person from "./Person/Person";

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
    let person = null;
  
    if(this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, personIndex) => {
            return <Person name={person.name} age={person.age} click={ this.deletePersonHandler.bind(this, personIndex)} key={person.id} />
          })}
        </div>
      )
    }

    const style = {
      border: "1px solid red",
      backgroundColor: "white",
      padding: "8px"
    }
    return (
      <div className="App">
        <h1>Adebobola's first time</h1>
        <button onClick={this.togglePerson} style={style}>toggle</button>
        {person}
      </div>
    )
  };
}

export default App;
