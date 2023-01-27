import React, {useEffect} from "react";
import "./Cockpit.css"
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {

    useEffect(() => {
        // console.log("useEffect")
        return () => {
            // console.log("cleanup on cockpit")
        }
    }, [])

    // console.log("Cockpit rendering")
    const assignedClasses = [];
    let btnClass = "button";
    if (props.showPersons) {
        btnClass = "button button.Red";
    }
    if (props.persons.length <= 2) {
        // assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        // assignedClasses.push(classes.bold)
    }
    return (
        <div>
            <h1>{ props.title}</h1>
            <p className={assignedClasses.join(" ")} >This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>toggle</button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer>
        </div>
    )
}

export default Cockpit;