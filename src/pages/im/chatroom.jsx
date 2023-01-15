import React, { useState, useEffect, useRef } from 'react';

import {
  ChakraProvider, ChakraBaseProvider,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Tooltip, SearchIcon,
  Icon, createIcon

} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import chakraTheme from '@chakra-ui/theme'

import {
  FormControl, FormLabel, Input, Stack, ButtonGroup,
  Button, InputLeftElement
} from '@chakra-ui/react'

import PopoverTop from '../../components/popovertop';

import {
  createBrowserRouter, RouterProvider,
  Outlet, BrowserRouter as Router, Routes, Route, Navigate, Link,
} from "react-router-dom";

import { Heading } from '@chakra-ui/react'
import ChatList from '../chatlist/chatlist';
import { array } from 'i/lib/util';








const Chatroom = () => {




  function DataTabs({ data }) {

    const [serchKey, setSerchKey] = useState("");


    const hadleSerchInput = (e) => { setSerchKey(e.target.value) };



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
              <ChatList serchKey={serchKey} />
            </TabPanel>
          ))}
        </TabPanels>

      </Tabs>
    )
  }

  // 2. Create an array of data
  const tabData =

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
  return <DataTabs data={tabData} />
}
export default Chatroom;