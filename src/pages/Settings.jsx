import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";


const Settings = () => {
  return (
    <>
     <Navbar />
    <Box height={30} />
   <Box sx={{ display: "flex"}}>
    <Sidenav />
    <h1>Settings</h1>
    </Box>
    </>
  )
}

export default Settings