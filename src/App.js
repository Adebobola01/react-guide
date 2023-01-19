import React, { useState} from "react";
import Person from "./Person/Person"
import './App.css';

const App = (props)=>{

  // state = {
  //   persons: [
  //     { name: "Adebobola", age: 21 },
  //     { name: "Remilekun", age: 21 },
  //     {name: "Oyedunmade", age: 21}
  //   ]
  // }

  const [personState, setPersonState] = useState({
    persons: [
      { name: "Adebobola", age: 21 },
      { name: "Remilekun", age: 21 },
      {name: "Oyedunmade", age: 21}
    ]
  })

  const switchName = () => {
    setPersonState({
      persons: [
        {name: "Oyedunmade", age: 21},
        { name: "Remilekun", age: 21 },
        { name: "Adebobola", age: 21 }
    ]})
  }

  // render() {
    return (
      <div className="App">
        <h1>Adebobola's first time</h1>
        <button onClick={switchName} >switch</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} >I like anime</Person>
      </div>
    )
  // };
}

export default App;
