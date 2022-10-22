import React from 'react'
import { Stack,Typography } from '@mui/material'
import icon from '../assets/icons/gym.png'
const BodyParts = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack type='button'
    alignItems='center' 
    justifyContent='center'
    className='bodyPart-card'
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625',
    
      borderBottomLeftRadius: '20px',
       width: '270px',
        height: '282px',
         cursor: 'pointer',
          gap:'45px' } :
           { 
           borderBottomLeftRadius: '20px',
            width: '270px', height: '282px',
             cursor: 'pointer', gap: '47px' }}
             onClick={() => {
              setBodyPart(item);
              window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          
    }}
  >

     
     <img src={icon} alt="dumbles" style={{width:'40px',height:'40px'}} />
     <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="white" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyParts