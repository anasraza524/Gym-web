

import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
const SearchExercies = () => {
  return (
    <Stack alignItems='center'mt='37px' justifyContent='center' p="20px">
<Typography fontWeight={700}  sx={{fontSize:{lg:'44px',sm:'34',xs:'30px'}}} mb='50' textAlign='center'>
  Awesome Exercises You <br /> Should Know
  <hr />
</Typography>
<Box position='relative'mt='50px' mb='72px'>
<TextField 
sx={{
  input:{
    fontWeight:'700'
    ,border:'none'
    ,borderRadius:'4px'
  },
  width:{lg:'800px', xs:'350px'},
  backgroundColor:'#fff',
  borderRadius:'4px'
}}
height='76px'
value=''
onChange={(e)=>{}}
type='text'
placeholder='Search Exercises'
>

</TextField>
<Button className="search-btn"
 sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
</Box>
    </Stack>
    
  )
}

export default SearchExercies