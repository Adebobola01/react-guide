import React from "react";
import classes from "./Cockpit.css"


const Cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = "";
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold)
    }
    return (
        <div>
            <h1>{ props.title}</h1>
            <p className={assignedClasses.join(" ")} >This is really working!</p>
            <button className={classes.Red} onClick={props.clicked}>toggle</button>
        </div>
    )
}

export default Cockpit;