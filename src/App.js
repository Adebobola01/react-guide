import React, {Component} from "react";
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

  render() {
    return (
      <div className="App">
        <h1>Adebobola's first time</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >I like anime</Person>
      </div>
    )
  };
}

export default App;
