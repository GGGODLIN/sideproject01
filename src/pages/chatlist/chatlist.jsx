import {
  Table, Thead, Tbody, Tfoot, Tr,
  Th, Td, TableCaption, TableContainer,
  Badge, Flex, Box, Avatar, Text, Grid
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'



let src = "https://638b643281df38ab3467feab.mockapi.io/account1"


const ChatList = ({serchKey}) => {



  const [srcData, setSrcData] = useState([]);
console.log("test",serchKey)

let renderData=srcData

if(serchKey){
  renderData= srcData.filter((data)=>{
    console.log("test2",data,serchKey,data?.nickname?.includes?.(serchKey))
    return (data?.nickname?.includes?.(serchKey) )})
}
  useEffect(() => {
    fetch(src)
      .then(response => { return response.json(); })
      .then((json) => { setSrcData(json) })
  }
    , []);

  




  return (

    
    <TableContainer>
      <Table variant='simple'>

        <Tbody >
          {renderData?.map((data) => {
            return <Tr key={data.id}>
              <Td>
                {/* 聊天列表『全部訊息總覽』 */}
                <Flex   >
                  {/* 聊天列表大頭貼 */}
                  <Avatar src={data.avatar} />
                  {/* 聊天列表暱稱 */}
                  <Box ml='3'>
                    <Box fontWeight='bold' >
                      {data.nickname}
                    </Box>
                    {/* 聊天列表訊息文字 */}
                    <Box
                      maxWidth={'sm'} noOfLines={1}
                      fontSize='sm' textOverflow="ellipsis"
                      whiteSpace='nowrap'>{data.message}
                    </Box>
                  </Box>
                </Flex>
              </Td>
                            
              <Flex>
                <Box ml='3'>
                  {/* 聊天列表顯示時間 */}
                  <Box>{new Date(data.time).toLocaleTimeString()}</Box>
                  {/* 聊天列表訊息通知 */}
                  <Box>{"訊息通知2"}</Box>
                </Box>
              </Flex>

            </Tr>
            
          })
          // .filter(setSrcData.message.inclub())  式這裡filter麻
        }
        </Tbody>

      </Table>
    </TableContainer>

  )
}

export default ChatList;

