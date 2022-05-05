import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled, { keyframes } from 'styled-components';

function App() {
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
    <div className="App">
      <Container maxWidth="xs" disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }} >
          <header className="App-header">
            <Typography display="block" gutterBottom textAlign={'left'} width="100%" paddingLeft={'1rem'}>
              Play time:{timeCount}s
            </Typography>
            <StyledImg src={logo} alt="logo" frequency={frequencyRef.current} />
            <Typography display="block" gutterBottom>
              {count}  (+{dx * frequency}/s)
            </Typography>
          </header>
          <Box sx={{ bgcolor: '#cfe8fc', flex: 1 }} >
            <Stack direction="column">
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
          </Box>
          <Typography textAlign={"left"}>
            v0.0.2
          </Typography>
        </Box>
      </Container>
    </div>
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
