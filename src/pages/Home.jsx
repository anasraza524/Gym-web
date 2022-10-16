// import React, {useState} from 'react'
import { Box } from '@mui/material';
import SearchExercies from '../components/SearchExercies';
import Exercies from '../components/Exercies';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  return (
    <Box>
      
    <SearchExercies/>
    <Exercies/>
    <HeroBanner/>
    </Box>
  )
}

export default Home;