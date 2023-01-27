import React, { Component} from "react";
import Persons from "../components/Persons/Persons"
import './App.css';
import Cockpit from "../components/Cockpit/Cockpit"
import AuthContext from "../context/auth-context";

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
    showCockpit: true,
    changeCounter: 0,
    Authenticated: false,
  }

  static getDerivedStateFromProps(state, props){
    // console.log("App getDerivedStateFromProps", props)
    return state;
  }

  componentDidMount() {
    // console.log("App componentDidmount")
  }

  nameChangedHandler = (event) => {
    this.setState((prevState, props) => {
      return {
        persons: [
          { name: "Adebobola", age: 21 },
          { name: event.target.value, age: 21 },
          { name: "Oyedunade", age: 21 }
        ],
        changeCounter: prevState.changeCounter + 1,
      }
    })
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

  login = () => {
    console.log("here")
    this.setState({Authenticated: true})
  }
  
  
  
  render() {
    // console.log("App render")
    let person = null;
  
    if (this.state.showPersons) {
      person = (
        <div>
          <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.nameChangedHandler} isAuthenticated={this.state.Authenticated } />
        </div>
      )
    }
    
    
    return (
      <div className="App">
        <button onClick={() => { this.setState({ showCockpit: false }) }} >del Cockpit</button>
        <AuthContext.Provider value={{Authenticated: this.state.Authenticated, login: this.login}}>
          {this.state.showCockpit ? (
            <Cockpit
              clicked={this.togglePerson}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              title={this.props.appTitle}
            />
            ) : null}
          {person}
        </AuthContext.Provider>
      </div>
    )
  };
}

export default App;
