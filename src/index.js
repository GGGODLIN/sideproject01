import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  BrowserRouter as Router,
  Routes, Route, Navigate,

} from "react-router-dom";
import Computertest from "./pages/computer/computer"
import Footer from './components/footer';
import Chatroom from './pages/im/chatroom';
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from '@mui/icons-material';
import PopoverTop from './components/popovertop';
import ChatList from './pages/chatlist/chatlist';






const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ChakraProvider>

    <Router>
      <Routes>
       
          <Route path="/" element={<App />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/im" element={<Chatroom />} />
          
          <Route path="" element={<Navigate replace to="/im" />} />
         
        
      </Routes>

    </Router>
  </ChakraProvider>
);



