import React from 'react'
import '../App.css';
import HeroBannerImage from '../assets/images/banner2.jpg';

import { Box, Stack, Typography } from '@mui/material';
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography className='buttonColor' fontWeight="600" fontSize="35px">Fitness Club</Typography>
    <Typography letterSpacing={6} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    <span style={{ fontSize:'60px' }} >LIFT</span>
    <br /> <span style={{ fontSize:'40px' }} >AWAY</span> <br />
    <span style={{ fontSize:'30px' }} >THE</span><br /> 
      <span style={{ fontSize:'60px' }} >PAIN</span>
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective <br /> exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" className='buttonBackgroundColor'  style={{  marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', padding: '14px', fontSize: '22px', textTransform: 'none',  color: '#DDDDDD', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography className='buttonColor' fontWeight={600} color="#F05454" sx={{ opacity: '0.1', display: { lg: 'block',xs:'none'  }, fontSize: '160px' }}>
      Exercise
    </Typography>
   
    <img  src={HeroBannerImage}
     alt="Banner"
      className="hero-banner-img" />
  </Box>

  )
}

export default HeroBanner;