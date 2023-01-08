
import { useReducer, useState, useEffect } from 'react';
import Calculator from './calculator';




let data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Computertest() {


  const [tableBtn, settableBtn] = useState(false);

  const [sumBtn, setsunBtn] = useState(0);







  return (

    <ChakraProvider>
      <div>
        <Center bg='blackAlpha.500' h='100px' color='white'>
          <Heading mb={4} >計算機  ||  九九乘法表</Heading>
        </Center>

        <Calculator sumBtn={sumBtn} setsunBtn={setsunBtn} />




        <Center bg='' h='100px' color='white'>
          <Button size='lg' onClick={(e) => settableBtn(true)} colorScheme='blackAlpha' mt='24px'>
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

        <p>
          {sumBtn}
        </p>


      </div>
    </ChakraProvider>


  );
}