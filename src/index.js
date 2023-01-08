import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Computertest from "./pages/computer/computer"
import Footer from './components/footer';
import Chatroom from './pages/im/chatroom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const NavbarWrapper =()=>{
return(
  <div>
  
    <Outlet />
    <Footer/>
  </div>
)
}



const router =createBrowserRouter([
  {
    path:'/',
    element: <NavbarWrapper />,
    children:[{
      path: "/",
      element: <App />
    },
  
    {
      path: "/computer",
      element: <Computertest />
    },
    {
      path: "/im",
      element: <Chatroom />
    },
  
  ]

    
  }
])





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    

    <RouterProvider router={router} />
  
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
