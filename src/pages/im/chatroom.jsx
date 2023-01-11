import React, { useState, useEffect, useRef } from 'react';

import {
  ChakraProvider, ChakraBaseProvider,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  Tooltip, SearchIcon,
  Icon, createIcon
  , IconButton,
  Table, Thead, Tbody, Tfoot,
  Tr, Th, Td, TableCaption,
  TableContainer, Search2Icon


} from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

import {
  Popover, PopoverTrigger, PopoverContent,
  PopoverHeader, PopoverBody, PopoverFooter,
  PopoverArrow, PopoverCloseButton, PopoverAnchor,
  FormControl, FormLabel, Input, Stack, ButtonGroup,
  Button,
} from '@chakra-ui/react'

import PopoverTop from '../../components/popovertop';

import {
  createBrowserRouter, RouterProvider,
  Outlet, BrowserRouter as Router, Routes, Route, Navigate, Link,
} from "react-router-dom";

import { Heading } from '@chakra-ui/react'






const Chatroom = () => {

  const fakeFridensData = [
    {
      name: "123",
      picture: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1657077940743.jpg',
      priviewMsg: 'hello world',
      lastMsgTime: '2023-01-08T12:24:11.718Z',
      newMsgCount: 2
    },

    {
      name: "456",
      picture: 'https://memeprod.sgp1.digitaloceanspaces.com/user-wtf/1657077940743.jpg',
      priviewMsg: 'hello world2',
      lastMsgTime: '2023-01-08T12:25:11.718Z',
      newMsgCount: 8
    }
  ];

  function DataTabs({ data }) {
    return (

      <Tabs >

        <FormControl  >
          <FormLabel></FormLabel>
          <Input placeholder='搜尋' width="25%" />
          <Heading size="md" color="#2DCC70" align='center' >
            Chat
            <Icon as={Search2Icon} align='end' color="black" />
          </Heading>
        </FormControl>


        <TabList >
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel p={4} key={index}>
              <Table>
                <Tbody >
                  {tab.content}
                </Tbody>
              </Table>

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
      {
        label: '全部',
        content: '11111222222.',

      },
    ]


  // 3. Pass the props and chill!
  return <DataTabs data={tabData} />
}
export default Chatroom;