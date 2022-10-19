

import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {exceriseOption,fetchData } from '../Utills/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercies = ({setExercies}) => {
 const  [Search, SetSearch] = useState('')
//  const [exercies, setExercies ] = useState([])
const [bodyParts, setBodyParts] = useState([])
useEffect(() => {
  const fetchExercisesData = async () => {
    const bodyPartsData = await fetchData
    (`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`
    , exceriseOption);
console.log(bodyPartsData);
    setBodyParts(['all', ...bodyPartsData]);
  };

  fetchExercisesData();
  
console.log(fetchExercisesData);
}, []);



 const  handleSearch = async () =>{
if (Search){
  const  exerciesData = await  
  fetchData(`https://exercisedb.p.rapidapi.com/exercises`
  , exceriseOption);
  console.log("exerciesData",exerciesData);
  const searchedExercises = exerciesData.filter(
    (item) => item.name.toLowerCase().includes(Search)
           || item.target.toLowerCase().includes(Search)
           || item.equipment.toLowerCase().includes(Search)
           || item.bodyPart.toLowerCase().includes(Search),
  );
SetSearch('');
setExercies=(searchedExercises)

console.log(searchedExercises);
}
 }
  return (
    <Stack alignItems='center'mt='37px' justifyContent='center' p="20px">
<Typography fontWeight={700}  sx={{fontSize:{lg:'44px',sm:'34',xs:'30px'}}} mb='50' textAlign='center'>
  Awesome Exercises You <br /> Should Know
  <hr />
</Typography>
<Box position='relative'mt='50px' mb='72px'>
<TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '4px' }}
          value={Search}
          onChange={(e) => SetSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
<Button className="search-btn"
onClick={handleSearch}
 sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
          Search
        </Button>
</Box>
<Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
 {/* <HorizontalScrollbar/>  */}
      </Box>
    </Stack>
  
  )
}

export default SearchExercies;