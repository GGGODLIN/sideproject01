import { useState } from 'react';

import { Input, FormControl, } from '@chakra-ui/react'




const ChatSearch = () => {

    const [serchKey, setSerchKey] = useState("");


    const hadleSerchInput = (e) => { setSerchKey(e.target.value) };


    return (
      <input type="button" button="button">123</input>,
        <FormControl  >
            <Input onChange={hadleSerchInput} value={serchKey} placeholder='搜尋' width="25%" />
        </FormControl>
     

    )
}

export default ChatSearch;