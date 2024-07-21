import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div>
       <Box sx ={{flexGrow:1}}>
            <AppBar position="static" style={{backgroundColor:'black'}}>
                <Toolbar>
                    <Typography variant='h5' sx={{flexGrow:1}} style={{marginLeft:"3%",color:"white"}}>Product</Typography>
                    <HomeIcon onClick={()=>{navigate('/')}} size='large' color='primary' aria-label='home' sx={{mr:2}} edge='start'/>
                    <Button><Link to={'/a'} style={{textDecoration:"none",color:"white"}}>AddItems</Link></Button>
                </Toolbar>
            </AppBar>
        </Box> 
    </div>
  )
}

export default Navbar