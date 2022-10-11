import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import logo from '../assets/images/Logo.png';
import { SliderMark } from '@mui/material';
const Navbar = () => {
  return ( 
    <Stack 
    direction="raw"
    justifyContent="space-around"
    px="20px"
    sx={{gap:{
      sm:"122px",xs:"40px"},mt:{sm:"32px", xs:"20px"},justifyContent:'none'}}
    
    >
<Link to="/">
  <img src={logo} alt="Logo"
   style={{width:'48px',height:'48px',margin:'0 20px'}}
  />
</Link>

<Stack 
direction="raw"
gap="40px"
fontSize="24px"
alignItems="flex-end"
>

  <Link to="/" 
  style={{textDecoration:'none', color:'#3A1212', borderBottom:'solid 3px #FF2625'}}
  >Home</Link>

  <a href="#exersice" style={{textDecoration:'none',color:'#3A1212',}}>
    Exersices
  </a>
</Stack>

    </Stack>
  )
}

export default Navbar;