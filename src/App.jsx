import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Table from './components/Table'
import styled from 'styled-components';
import "./styles.css"

const BoxWrapper = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
width: '100%',
height: '100vh',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
background: '#5865F2'
  &:hover {
    background-color: ${props => props.primary ? '#0062cc' : '#5a6268'};
  }
`;

function App() {
  return (
    <BoxWrapper>
      <NavBar />
      <Table />
      <Footer />
    </BoxWrapper>

  )
}

export default App