import React from "react";
import styled from 'styled-components'
import { useState } from 'react';

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
const CardDiv = styled.div`
width: 350px;
height: 210px;
background-color: ${({toggle}) => toggle ? '#03BEEC': '#2b2929'};
border-radius: 20px;
display: flex;
flex-direction: column;
align-items:center;
justify-content: space-around;
box-shadow: 4px 4px 8px #9b9999;
`

/////
const LogoReact = styled.div`
display:flex;
align-items:center;
`
const CardLogo = styled.div`
color: white;
font-family: arial;
font-size:30px;
font-weight: bolder;
`
const SimboloReact = styled.div`
color:white;
font-size:70px;
padding: 5px;
`
const CardName = styled.h2`
font-family: monospace;
color: white;
text-shadow: 1px 1px rgba(94, 92, 92, 0.628);
font-size: 15px;
letter-spacing: 4px;
`
const CardDivMaster = styled.div`
width:350px;
display:flex;
align-items:center;
justify-content: space-evenly;
`
const CardMasterLogo = styled.img`
width: 60px;
`
const CardBlackButton = styled.button`
border: 2px solid black;
border-radius: 10px;
font-size: 25px;
padding: 10px;
background-color: white;
margin-bottom: 20px;
`


export function Cartao(props){

    const [toggle, setToggle] = React.useState(true);

    return(
        <MainDiv>
            <CardBlackButton onClick={e => setToggle(state => !state)}> 🔄 Cliente Standart / Black</CardBlackButton> 

            <CardDiv toggle={toggle}>
                <LogoReact>
                    <CardLogo>React Bank</CardLogo>
                    <SimboloReact>&#9883;</SimboloReact>
                </LogoReact>
                <CardName>{props.numero}</CardName>

                <CardDivMaster>
                <CardName>{props.nome}</CardName>
                <CardMasterLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1280px-Mastercard_2019_logo.svg.png" />
                </CardDivMaster>
            </CardDiv>
        </MainDiv>
    )
}