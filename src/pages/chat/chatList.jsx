import React, { useState, useEffect, useRef } from 'react';

import {
    Tabs, TabList, TabPanels, Tab, TabPanel,
    SearchIcon, Icon, createIcon
} from '@chakra-ui/react'

import {
    FormControl, FormLabel, Input, Stack, ButtonGroup,
    Button, InputLeftElement
} from '@chakra-ui/react'

import { Heading } from '@chakra-ui/react'



const ChatList = () => {






    return (

        <Tabs >

            <FormControl  >

                <Input onChange={hadleSerchInput} value={serchKey} placeholder='搜尋' width="25%" />

                <Heading size="md" color="#2DCC70" align='center' >
                    Chat

                </Heading>
            </FormControl>

            <TabList >
                {data.map((tab, index) => (
                    <Tab key={index}>{tab.label}</Tab>
                ))}
            </TabList>

            <TabPanels>
                {data.map((index) => (
                    <TabPanel p={4} key={index}>
                        <ChatList />
                    </TabPanel>
                ))}
            </TabPanels>

        </Tabs>
    )
}

// 2. Create an array of data
const chatListTag =

    [
        {
            label: '全部',
            content: 'Perhaps the greatest dish ever invented.',


        },
        {
            label: '＃檔案',
            content:
                'Perhaps the surest dish ever invented but fills the stomach more than rice.',
        },
        {
            label: '＃照片',
            content:
                'P1233333lls the stomach more than rice.',
        },
    ]


// 3. Pass the props and chill!
return <DataTabs data={chatListTag} />

export default ChatList;