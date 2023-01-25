import React, {Component} from "react"
import "./Person.css"
import styled from "styled-components"

const StyledDiv = styled.div`
    border: 1px solid #eee;
    margin: 10px auto;
    width: 60%;
    padding: 16px;

    @media (min-width: 500px){
        width: 450px
    }
`

class Person extends Component{
    render(){
        return (
            <StyledDiv>
                <p onClick={this.props.click}> {this.props.name} is {this.props.age} years old </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} ></input>
            </StyledDiv>
        )
    }
}

export default Person;