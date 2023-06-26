import React,{ Component } from 'react';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import {  NavLink } from 'react-router-dom';
import "../../styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Logo from '../../images/logo.svg'



const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    //handle menu click
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    //menu driver
    const drawer =(
        <Box onClick= {handleDrawerToggle} sx={{textAlign :'center'}}>
                 <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow : 1}} >
                 <img src={Logo} alt='logo' height={'70px'} width={'200px'}/>

                    </Typography>
                         <ul className='mobile-nevigation'>
                            <li>
                                <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                         </ul>
                    
        </Box>
    )
  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{bgcolor : 'black'}}>
            <Toolbar>
                <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm: 'none'}}} onClick={handleDrawerToggle}>
                    <MenuIcon/>
                </IconButton>

                    <img src={Logo} alt='logo' height={'70px'} width={'250px'}/>
                    <Typography color={'goldenrod'} variant='h6' component='div' sx={{flexGrow : 1, my: 2}} >
                        
                    </Typography>
                    <Divider/>
                    <Box sx={{display : { xs : "name", sm: 'block'}}}>
                         <ul className='nevigation-menu'>
                            <li>
                                <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/menu'}>Menu</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                         </ul>
                    </Box>
            </Toolbar>
        </AppBar>
        <Box component='nav'>
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs: 'block', sm: 'none'}, "& .MuiDrawer-paper":{ boxSizing :"border-box", width :"240px"
            } }}>
                {drawer}
            </Drawer>
        </Box>
        <Toolbar/>
    </Box>
</>
  )
}

export default Header