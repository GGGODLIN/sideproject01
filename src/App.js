import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled, { keyframes } from 'styled-components';

function App() {
  const [count, setCount] = useState(0);
  const [coefficients, setCoefficients] = useState({ Lv1: 0 })
  const coefficientsRef = useRef({ Lv1: 0 });
  const [refreshFlag, setRefreshFlag] = useState(true);
  const [frequency, setFrequency] = useState(1);
  const frequencyRef = useRef(1);

  useEffect(() => {
    setTimeout(() => {
      setCount(getAnswer(count, coefficientsRef.current))
      setRefreshFlag(!refreshFlag)
    }, (1000 / frequency))
  }, [refreshFlag]);

  const handleLv1AddClick = () => {
    setCoefficients({ ...coefficients, Lv1: coefficients.Lv1 + 1 })
    coefficientsRef.current = { ...coefficientsRef.current, Lv1: coefficientsRef.current.Lv1 + 1 }
  }
  const handleAddFrequencyClick = () => {
    setFrequency(frequency + 1)
    frequencyRef.current = frequencyRef.current + 1
  }
  const getAnswer = (nowCount, coefficients) => {
    return nowCount + coefficients?.Lv1 * 1
  }
  console.log('rerender', count, frequency)
  return (
    <div className="App">
      <Container maxWidth="xs" disableGutters>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }} >
          <header className="App-header">
            <StyledImg src={logo} alt="logo" frequency={frequencyRef.current} />
            <Typography variant="button" display="block" gutterBottom>
              {count}
            </Typography>
          </header>
          <Box sx={{ bgcolor: '#cfe8fc', flex: 1 }} >
            <Stack direction="column">
              <Button size="large" variant="text" onClick={handleLv1AddClick}>{coefficients.Lv1}</Button>
              <Button size="large" variant="text" onClick={handleAddFrequencyClick}>{frequency}</Button>
              <Button size="large" variant="text">Text</Button>
            </Stack>
          </Box>
          <Typography textAlign={"left"}>
            v0.0.1
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
