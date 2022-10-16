import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../assets/images/Logo.png';
import { SliderMark } from '@mui/material';
const Navbar = () => {
  return ( 
    <Stack 
    direction="raw"
    justifyContent="space-around"
    px="20px"
    sx={{gap:{
      sm:"60px",xs:"40px"},mt:{sm:"32px", xs:"20px"},justifyContent:'none'}}
    
    >
<Link to="/">
  <img src={logo} alt="Logo"
   style={{width:'48px',height:'48px',margin:'0 5px'}}
  />
</Link>

<Stack 
direction="raw"
gap="30px"
fontSize="24px"
alignItems="flex-end"
>

  <Link to="" 
  style={{textDecoration:'none', color:'#DDDDDD', borderBottom:'solid 3px #ef5151'}}
  >Home</Link>

  <a href="#exercies" style={{textDecoration:'none',color: '#DDDDDD',}}>
  Exercies
  </a>
  <Link to="" 
  style={{textDecoration:'none', color:'#DDDDDD'}}
  >About</Link>
</Stack>

    </Stack>
  )
}

export default Navbar;