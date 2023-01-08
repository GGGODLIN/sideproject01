import React, { useState, useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { Icon } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import SearchIcon from '@mui/icons-material/Search';

import { ThemeProvider } from 'styled-components';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';




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
  ]




  return (

    <Container sx={{ flex: 1, height: '100vh' }}>
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Box sx={{
          flex: 1,
          color: "#2DCC70",
          fontWeight: "800",
          fontSize: "24px",

        }}  >Chat</Box>


        <TextField
          id="input-with-icon-search"
          placeholder='search'

          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}

        />

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>


          {fakeFridensData.map((friend) => {
            return (
              <ListItem >
                <ListItemAvatar>

                  <Avatar alt={friend.name} src={friend.picture} />

                </ListItemAvatar>
                <ListItemText primary={friend.name} secondary={friend.priviewMsg} />
                <ListItemText 
               
                secondary={ <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
              </Badge>}
                />
              </ListItem>


            )
          })}

        </List>

      </Stack>
    </Container>



  );
};

export default Chatroom;