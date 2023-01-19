import React, { Component} from "react";
import Person from "./Person/Person"
import './App.css';

class App extends Component {

  state = {
    persons: [
      { name: "Adebobola", age: 21 },
      { name: "Remilekun", age: 21 },
      {name: "Oyedunmade", age: 21}
    ]
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

  
  render() {
    const style = {
      border: "1px solid red",
      backgroundColor: "white",
      padding: "8px"
    }
    return (
      <div className="App">
        <h1>Adebobola's first time</h1>
        <button onClick={this.switchNameHandler.bind(this, "bobo")} style={style}>switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={ this.nameChangedHandler}  />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} clicked={this.switchNameHandler.bind(this, "muhy")} >I like anime</Person>
      </div>
    )
  };
}

export default App;
