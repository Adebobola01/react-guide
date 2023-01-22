import React from "react"
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

const person = (props) => {
    return (
        <StyledDiv>
            <p onClick={props.click}> {props.name} is {props.age} years old </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} ></input>
        </StyledDiv>
    )
}

export default person;