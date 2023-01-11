import {
  Table, Thead, Tbody, Tfoot, Tr,
  Th, Td, TableCaption, TableContainer,
  Badge,Flex,Box,Avatar,Text
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'


let src = "https://638b643281df38ab3467feab.mockapi.io/account1"


const ChatList = () => {


  const [srcData, setSrcData] = useState(0);


  const chatData = useEffect(() => {
    fetch(src)
      .then(response => { return response.json(); })
      .then((json) => { setSrcData(json) })
  }, [setSrcData]);




  //chatData.map((item)=>{return <Tr></Tr>})

  return (
    <TableContainer>
      <Table variant='simple'>
        <Tr>
          <Th></Th>
          <Th></Th>
          <Th></Th>
         
        </Tr>
        <Tbody >
          {srcData?.map((data) => {
            return <Tr key={srcData.id}>
              <Td></Td>
              <Td>{srcData.time}</Td>
              <Td>{"訊息通知2"}</Td>
            

            </Tr>
          })}

        </Tbody>

      </Table>
    </TableContainer>

  )
}

export default ChatList;

