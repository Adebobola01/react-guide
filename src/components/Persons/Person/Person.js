import React, {Component} from "react"
import "./Person.css"
// import styled from "styled-components"
import PropTypes from "prop-types"
import Aux from "../../../hoc/Auxiliary"
import AuthContext from "../../../context/auth-context"

// const StyledDiv = styled.div`
//     border: 1px solid #eee;
//     margin: 10px auto;
//     width: 60%;
//     padding: 16px;

//     @media (min-width: 500px){
//         width: 450px
//     }
// `

class Person extends Component{
    render(){
        return (
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.Authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> {this.props.name} is {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} ></input>
            </Aux>
        )
    }
}

Person.propsTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;