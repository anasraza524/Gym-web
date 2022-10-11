import React, {useState} from 'react'
import { Box } from '@mui/system'
import SearchExercies from '../components/SearchExercies'
import Exercies from '../components/Exercies'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  return (
    <Box>
      <HeroBanner/>
    <SearchExercies/>
    <Exercies/>
    </Box>
  )
}

export default Home