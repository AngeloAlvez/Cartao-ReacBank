import { useState } from 'react';
import React from 'react';
import { Cartao } from './components/Cartao';
import styled from 'styled-components'

let cor ='#FF7900'

const DivMain = styled.div`
display: flex;
flex-direction: column;
align-items:center;
color: black;
`
const InputMain = styled.input`
text-align: center;
width: 300px;
border: 3px solid ${cor}
border-radius: 4px;
font-size:20px;
padding: 10px;
margin-bottom: 30px;
`
function App() {

  const [inputName, setInputName] = useState('NOME COMPLETO')

  const [inputNumero, setInputNumero] = useState('0000  0000  0000  0000')


  const handleInputName = (event) => {
    setInputName(event.target.value)
  }
  const handleInputNumero = (event) => {
    setInputNumero(event.target.value)
  }

  return (
    <DivMain>
      <h1>Informe seus dados e veja seu cartão:</h1>
      <InputMain value={inputName} onChange={handleInputName}></InputMain>
      <InputMain value={inputNumero} onChange={handleInputNumero}></InputMain>
      <Cartao numero={inputNumero} nome={inputName}>
      </Cartao>
    </DivMain>
  );
}

export default App;
