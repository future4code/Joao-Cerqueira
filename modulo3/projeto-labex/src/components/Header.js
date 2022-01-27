import styled from "styled-components"
import React from "react"
import { useNavigate } from "react-router-dom"
import { GoToHomePage } from '../route/RouteFunctions'

const HeaderPrincipal = styled.header`
margin: 0;  
border: 2px solid #00FA9A; 
flex-grow: 0;
display: flex;
justify-content: center;
background-color: #3CB371;
`

const H1 = styled.h1`
cursor: pointer;
`
function Header() {
    const navigate = useNavigate()

    return (
        <HeaderPrincipal>

            <H1 onClick={() => GoToHomePage(navigate)}>Projeto LABEX</H1>

        </HeaderPrincipal>
    )
}

export default Header;