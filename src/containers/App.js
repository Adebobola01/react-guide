import React, { Component} from "react";
import Persons from "../components/Persons/Persons"
import './App.css';
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {

  constructor(props) {
    super(props)
    console.log("Apps constructor")
  }

  state = {
    persons: [
      { id: "kjalkdf", name: "Adebobola", age: 21 },
      { id: "jwijfoi", name: "Remilekun", age: 21 },
      { id: "jfka;f", name: "Oyedunmade", age: 21 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(state, props){
    console.log("App getDerivedStateFromProps", props)
    return state;
  }

  componentDidMount() {
    console.log("App componentDidmount")
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
    console.log("App render")
    let person = null;
  
    if (this.state.showPersons) {
      person = (
        <div>
          <Persons persons={ this.state.persons} click={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      )
    }


    return (
      <div className="App">
        <button onClick={() => { this.setState({ showCockpit: false }) }} >del Cockpit</button>
        {this.state.showCockpit ? (<Cockpit clicked={this.togglePerson} showPersons={this.state.showPersons} persons={this.state.persons} title={this.props.appTitle} />) : null}
        {person}
      </div>
    )
  };
}

export default App;
