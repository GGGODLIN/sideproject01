import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ChakraProvider, Stack, Button, Text, Box, Input,HStack } from '@chakra-ui/react'
//import {Box} from '@chakra-ui/react';
//import Container from '@mui/material/Container';
//import Button from '@mui/material/Button';
//import Text from '@mui/material/Text';
import styled, { keyframes } from 'styled-components';

function App() {
const[lef,setLef]=useState(0);
const[right,setRight]=useState(0);
const[sum,setSum]=useState(0);

const handleSum=(lefNum,rightNum)=>{
  if(isNaN(lefNum)||isNaN(rightNum)){
    return "error"
  } else{return lef*right }
  
  
}



  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;
  const [dx, setDx] = useState(0);
  const [coefficients, setCoefficients] = useState({ Lv1: 0 })
  const coefficientsRef = useRef({ Lv1: 0 });
  coefficientsRef.current = coefficients
  const [refreshFlag, setRefreshFlag] = useState(true);
  const [frequency, setFrequency] = useState(1);
  const frequencyRef = useRef(frequency);
  frequencyRef.current = frequency
  const [startTime, setStartTime] = useState(new Date());
  let timeCount = coefficients.Lv1 === 0 ? 0 : Math.floor((new Date() - startTime) / 1000)

  useEffect(() => {

    setTimeout(() => {
      const dx = getDx(coefficientsRef.current)

      setCount(countRef.current + dx)
      setDx(dx)
      setRefreshFlag(!refreshFlag)

    }, (1000 / frequencyRef.current))

  }, [refreshFlag]);

  const handleLv1AddClick = () => {
    if (coefficients.Lv1 === 0) {
      setStartTime(new Date())
    }
    setCount(count - getAddLv1Cost(coefficients))
    setCoefficients({ ...coefficients, Lv1: coefficients.Lv1 + 1 })
  }
  const handleAddFrequencyClick = () => {
    setCount(count - getFrequencyCost(frequency))
    setFrequency(frequency + 1)
  }
  const getDx = (coefficients) => {
    return coefficients?.Lv1 * 1
  }
  const getAddLv1Cost = (coefficients) => {
    return (Math.ceil(coefficients?.Lv1 * Math.pow(2, Math.log(coefficients?.Lv1)))) || coefficients?.Lv1
  }
  const getFrequencyCost = (frequency) => {
    return (Math.ceil(Math.pow(1.8, frequency))) + Math.pow(frequency, 2) || 1
  }
  //console.log('rerender', count, frequency)
  return (
    <ChakraProvider>


      <div className="App">

        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }} >
          <header className="App-header">
            <Text display="block" gutterBottom textAlign={'left'} width="100%" paddingLeft={'1rem'}>
              Play time:{timeCount}s
            </Text>
            <StyledImg src={logo} alt="logo" frequency={frequencyRef.current} />
            <Text display="block" gutterBottom>
              {count}  (+{dx * frequency}/s)
            </Text>
          </header>
          <Box sx={{ bgcolor: '#cfe8fc', flex: 1 }} >
            <Stack direction="column" >
              <Button size="large" variant="text" disabled={count - getAddLv1Cost(coefficients) < 0} onClick={handleLv1AddClick} style={{ justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'left', textTransform: 'none' }}>
                  係數Lv1
                </div>
                <div >
                  {coefficients.Lv1}
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  購買下一級：-{getAddLv1Cost(coefficients)}
                </div>
              </Button>
              <Button size="large" variant="text" disabled={count - getFrequencyCost(frequency) < 0 || frequency === 60} onClick={handleAddFrequencyClick}>
                <div style={{ flex: 1, textAlign: 'left', textTransform: 'none' }}>
                  頻率
                </div>
                <div >
                  {frequency}
                </div>
                <div style={{ flex: 1, textAlign: 'right' }}>
                  購買下一級：-{getFrequencyCost(frequency)}
                </div>
              </Button>
            </Stack>
            <HStack spacing='15px'>
            <Input placeholder='Basic usage'  value={lef} onChange={(e)=>setLef(e.target.value)} />
            <Text fontSize='4xl'>x</Text>
            <Input placeholder='Basic usage' />
            <Text fontSize='4xl'>=</Text>
            <Text fontSize='4xl'></Text>
            </HStack>
            
          </Box>
          <Text textAlign={"left"}>
            v0.0.3
          </Text>
        </Box>


      </div>

    </ChakraProvider>
  );
}

const logoAnimation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`
const StyledImg = styled.img`
animation: ${logoAnimation} infinite ${props => 1 / props?.frequency || 1}s linear;
height: 40vmin;
pointer-events: none;
`;

export default App;
