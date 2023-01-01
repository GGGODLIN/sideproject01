import {
  ChakraProvider,
  Input, HStack, Box, Text, Heading,
  Button, Center, Select, Stack, Table,
  Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useReducer, useState ,useEffect} from 'react';
import Table1 from './table';



let data =[1,2,3,4,5,6,7,8,9]

export default function Computertest() {

  const [leftBtn, setleftBtn] = useState(0);
  const [rightBtn, setrightBtn] = useState(0);
  const [sumBtn, setsunBtn] = useState(0);
  const [tableBtn,settableBtn]=useState(false);

  useEffect(() => {
    setsunBtn(leftBtn*rightBtn);
  }, [leftBtn, rightBtn])
//問老師Q3 setsunBtn(hadleSum())可否放這一個

  const handleLeftBtn = (e) => {
    return setleftBtn(Number(e.target.value))
      ;
  }
  const handleRightBtn = (e) => {
    return setrightBtn(Number(e.target.value))
  }
 
  





  
    
  



  return (

    <ChakraProvider>
      <div>
        <Center bg='blackAlpha.500' h='100px' color='white'>
          <Heading mb={4} >計算機  ||  九九乘法表</Heading>
        </Center>


        <Center bg='blackAlpha.300' h='200px' color='white'>
          <Input value={leftBtn} onChange={handleLeftBtn} htmlSize={4} width='100px' whiteSpace="200" />
          <Heading>X</Heading>
          <Input value={rightBtn} onChange={handleRightBtn} htmlSize={4} width='100px' />
          <Heading>=</Heading>
          <Text fontSize='3xl'>{sumBtn}</Text>
                
                      
        </Center>


        <Center bg='' h='100px' color='white'>
          <Button size='lg' onClick={(e)=>settableBtn(true)}  colorScheme='blackAlpha' mt='24px'>
            九九乘法表全表
          </Button>
          <Button size='lg' colorScheme='blackAlpha' mt='24px'>
            資料導出自動乘積
          </Button>

          <Select placeholder='排序' color="blackAlpha.700" width="100" >
            <option value='option1'>排序由小至大 </option>
            <option value='option2'>排序由大至小</option>
          </Select>
          <Select placeholder='Top' color="blackAlpha.700" width="100">
            <option value='option1'>前12名 </option>
          </Select>
        </Center>

        {tableBtn? <Table1 ></Table1>:null}

      </div>
    </ChakraProvider>


  );
}