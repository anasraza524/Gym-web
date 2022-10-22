// import React, {useState} from 'react'
import { Box } from '@mui/material';
import SearchExercies from '../components/SearchExercies';
import Exercies from '../components/Exercies';
import HeroBanner from '../components/HeroBanner';
import React, {  useState } from 'react';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercies, setExercies ] = useState([])
  return (
    <Box>
      
    
    
    <HeroBanner/>
    
    <SearchExercies setExercies={setExercies}
    bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    
    <Exercies setExercies={setExercies}
    bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home;