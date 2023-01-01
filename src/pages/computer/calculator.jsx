import {
    ChakraProvider,
    Input, HStack, Box, Text, Heading,
    Button, Center, Select, Stack, Table,
    Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { useReducer, useState, useEffect } from 'react';


const Calculator = (props) => {
    const [leftBtn, setleftBtn] = useState(0);
    const [rightBtn, setrightBtn] = useState(0);

    console.log(props.sunBtn);

    useEffect(() => {
        props.setsunBtn(leftBtn*rightBtn);
    }, [leftBtn, rightBtn])
    //問老師Q3 setsunBtn(hadleSum())可否放這一個



    const handleLeftInput = (e) => {
        return setleftBtn(Number(e.target.value))
            ;
    }
    const handleRightInput = (e) => {
        return setrightBtn(Number(e.target.value))
    }

    return (
        <Center bg='blackAlpha.300' h='200px' color='white'>
            <Input value={leftBtn} onChange={handleLeftInput} htmlSize={4} width='100px' whiteSpace="200" />
            <Heading>X</Heading>
            <Input value={rightBtn} onChange={handleRightInput} htmlSize={4} width='100px' />
            <Heading>=</Heading>
            <Text fontSize='3xl'>{props.sumBtn}</Text>


        </Center>
    )

}

export default Calculator