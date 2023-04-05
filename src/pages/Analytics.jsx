
import { Box, Typography } from '@mui/material';
import React from 'react';
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import GeoChart from '../Charts/GeoChart';
import PieChart from '../Charts/PiChart';
import MultiChart from '../Charts/MultiChart';
import CountUp from 'react-countup';



const Analytics = () => {
  return (
    <>
    <div className='bgcolor'>
    <Navbar />
    <Box height={70} />
    <Box sx={{ display: "flex"}}>
      
    <Sidenav />
    <Box component="main" sx={{ p: 3 }}>
    <Grid container spacing={2}>
        <Grid item>
        <Stack spacing={2} direction="row">
          <div className='cardgrid'>
          <Card className='gradient' sx={{color:"white"}}>
            <div className='paddingall'>
          <span className='pricesubtitle'> Visitors</span>
          <br/>
          <span className='pricetitle'>
          <CountUp delay={0.2} end={22000} duration={0.3} />
            </span><br/>
          <span className='pricesubtitle'> Since last week</span>
          </div>
          </Card>
          <Card className='gradientlight' sx={{color:"white"}}>
          <div className='paddingall'>
          <span className='pricesubtitle'> Visitors</span>
          <br/>
          <span className='pricetitle'>
          <CountUp delay={0.4} end={32000} duration={0.6} />            </span><br/>
          <span className='pricesubtitle'> Since last week</span>
          </div>
          </Card>
          <Card className='cardgrid3'>
          <CardContent>
      <MultiChart />
     </CardContent>
          </Card>
          <Card className='gradient' sx={{color:"white"}}>
          <div className='paddingall'>
          <span className='pricesubtitle'> Visitors</span>
          <br/>
          <span className='pricetitle'>
          <CountUp delay={0.4} end={12000} duration={0.6} />            
            </span><br/>
          <span className='pricesubtitle'> Since last week</span>
          </div>
          </Card>
          <Card className='gradientlight' sx={{color:"white"}}>
          <div className='paddingall'>
          <span className='pricesubtitle'> Visitors</span>
          <br/>
          <span className='pricetitle'>
          <CountUp delay={0.6} end={42000} duration={0.8} />     
            </span><br/>
          <span className='pricesubtitle'> Since last week</span>
          </div>
         
          </Card>
          </div>

        
          
        
    
    </Stack> 
         
        </Grid>
        
        
        
      </Grid>
      <Box height={30} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height: 50 + "vh" }}>
     <CardContent>
      <GeoChart />
     </CardContent>
   </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 50 + "vh" }}>
     <CardContent>
     <PieChart />
     </CardContent>
   </Card>
        </Grid>
        
        
      </Grid>
      
    
       
      </Box>
    </Box>
    </div>
   
    </>
  )
}

export default Analytics