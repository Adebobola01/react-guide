import React, {Component} from "react";
import Person from "./Person/Person";

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log("persons.js getDerivedStateFromProps")
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Persons.js shouldComponentUpdate")
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("person.js getSnapShot")
        return null;
    }

    componentDidUpdate() {
        console.log("app.js componentDidUpdate")
    }

    render() {
        console.log("Persons rendering")
        return this.props.persons.map((person, personIndex) => {
            return <Person name={person.name} age={person.age} click={this.props.click.bind(this, personIndex)} changed={this.props.changed} key={person.id}/> 
        })
    }
}


export default Persons;