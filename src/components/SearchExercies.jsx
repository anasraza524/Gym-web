

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
height='76px'
value=''
onChange={(e)=>{}}
type='text'
placeholder='Search Exercises'
>

</TextField>
</Box>
    </Stack>
    
  )
}

export default SearchExercies