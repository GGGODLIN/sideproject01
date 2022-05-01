import logo from './logo.svg';
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);
  const [coefficients, setCoefficients] = useState({ Lv1: 0 })
  const coefficientsRef = useRef({ Lv1: 0 });
  const [refreshFlag, setRefreshFlag] = useState(true);
  const [frequency, setFrequency] = useState(1);

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
  }
  const getAnswer = (nowCount, coefficients) => {
    return nowCount + coefficients?.Lv1 * 1
  }
  console.log('rerender', count)
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', display: 'flex', flexDirection: 'column' }} >
          <header className="App-header">
            <StyledImg src={logo} alt="logo" frequency={frequency} />
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
        </Box>
      </Container>
    </div>
  );
}

const StyledImg = styled.img`
animation: App-logo-spin infinite ${props => 6 / props?.frequency || 6}s linear;
height: 40vmin;
pointer-events: none;
`;

export default App;
