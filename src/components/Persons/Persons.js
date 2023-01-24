import React from "react";
import Person from "./Person/Person"

const Persons = (props) => {
    console.log("Persons rendering")
    return props.persons.map((person, personIndex) => {
    return <Person name={person.name} age={person.age} click={props.click.bind(this, personIndex)} changed={props.changed} key={person.id}/>
})}


export default Persons;