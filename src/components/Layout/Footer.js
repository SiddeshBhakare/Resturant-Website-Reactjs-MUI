import React from 'react'
import {Box, Link, Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <>
        <Box sx={{textAlign: 'center', bgcolor:'#1A1A19', color: 'white', p:3 }}>
          <Box sx={{my: 3, '& svg' : {
            fontSize: '60px',
            cursor : 'pointer',
            mr: 2, },'& svg:hover':{
                color:'goldenrod', transform:'translate(5px)', transition: 'all 400ms'
            }}}>
                <Link href='https://www.linkedin.com/in/siddesh-bhakare/'> <LinkedInIcon/></Link>
                
                <Link href='https://github.com/SiddeshBhakare'><GitHubIcon/></Link>
                
                <Link href='https://www.instagram.com/siddesh_bhakare/'><InstagramIcon/></Link>
                
                <TwitterIcon/>
                
                <YouTubeIcon/>
          </Box>
           <Typography variant='h5'sx={{'@media (max-width: 600px)':{ fontSize : '1rem'}}}>
                All Right Reserved &copy; Siddesh Bhakare
            </Typography> 
        </Box>
    </>
  )
}

export default Footer