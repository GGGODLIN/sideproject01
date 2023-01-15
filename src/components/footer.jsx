import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {
  ChakraProvider, ChakraBaseProvider,
  Tabs, TabList, TabPanels, Tab, TabPanel
  , Image, extendTheme, useRouter,

} from '@chakra-ui/react'

const Footer = () => {

  //const footerNavigate = useNavigate();

  const [value, setValue] = React.useState(0);


  return (
    <Tabs defaultIndex={1} align="center" isFitted size="sm">


      <TabList >
        <Tab >
          <Link to="/">
            遊戲大廳
          </Link>
        </Tab>

      
          <Tab >話題論壇</Tab>
       

        <Link to="/im">
          <Tab >訊息</Tab>
        </ Link >

        <Tab >交易所</Tab>

        <Tab >設定</Tab>

        {/* <Tab onClick={() => { footerNavigate("/") }}> 遊戲大廳</Tab> */}
        {/* //<Tab >話題論壇</Tab>
    <Tab onClick={() => { footerNavigate("/im") }}>訊息</Tab>
    <Tab >交易所</Tab>
    <Tab >設定</Tab> */}

      </TabList>
    </Tabs >

  );
}

export default Footer;