import { Avatar, Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { margin, padding, width } from '@mui/system'
import React from 'react'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';








const Signup = () => {
    const paperStyle={padding:'50px 20px', width:300, margin:"60px auto"}
    const headerStyle={margin:10}
    const avaterStyle={backgroundColor:'green'}
    const marginTop={marginTop:20}
    const navigate = useNavigate();
    function handleClick (){
        navigate("/home")
    }
    return (
   <Grid>
    <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
            <Avatar style={avaterStyle}>
                <AddCircleOutlineOutlinedIcon/>
            </Avatar>
            <h2 style={headerStyle}>
             Login Page
        </h2>
        <Typography variant='caption'>Please fill this form to log in your account</Typography>
        </Grid>

        <form>
            <TextField variant='standard' fullWidth label='Username' placeholder='enter your username'/>
            <FormControl style={marginTop}>
 
</FormControl>
            <TextField variant='standard' style={marginTop} fullWidth label='Password' placeholder='enter your password'/>
            
            <Button style={marginTop} type='submit' fullWidth variant='contained' color='success'
             onClick={handleClick}>Login </Button>
        </form>
        
    </Paper>
   </Grid>
  )
}

export default Signup