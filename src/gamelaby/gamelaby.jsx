import { IconButton } from '@chakra-ui/react'




const Gamelaby = ()=>{
    return(
        <IconButton
  colorScheme='teal'
  aria-label='遊戲大廳'
  size='lg'
  icon={<PhoneIcon />}
  isActive
/>,
       <IconButton
       colorScheme='whiteAlpha'
       aria-label='話題論壇'
       size='sm'
       icon={<PhoneIcon />}
     />
    ,
    <IconButton
  colorScheme='whiteAlpha'
  aria-label='訊息'
  size='lg'
  icon={<PhoneIcon />}
/>,
 <IconButton
 colorScheme='whiteAlpha'
 aria-label='交易所'
 size='lg'
 icon={<PhoneIcon />}
/>,
 <IconButton
 colorScheme='tewhiteAlphaal'
 aria-label='設定'
 size='lg'
 icon={<PhoneIcon />}
/>,

)
};

export default Gamelaby