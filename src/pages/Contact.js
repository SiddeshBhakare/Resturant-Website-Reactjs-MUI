 import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, colors } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

 const Contact = () => {
   return (
     <Layout>
      <Box sx={{my:10, ml:10, "& h4":{fontWeight:'bold',mb:2}}}>
        <Typography>Contact My Resturant</Typography>

        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
          beatae ducimus magni nobis culpa praesentium velit expedita quae,
          corrupti, pariatur inventore laboriosam consectetur modi impedit
          error, repudiandae obcaecati doloribus.

        </p>
      </Box>

      <Box sx={{m: 3, width:'600px', ml:10, "@media(max-width:600px)":{width:"300px"}}}>
        <TableContainer  component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white'}}
                align='center'>Contact Detail</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color : 'red',pt: 1}}/> 7744002525 (Toll Free)
                </TableCell>
              </TableRow>

              <TableRow>
              <TableCell>
                  <EmailIcon sx={{color : 'skyblue',pt: 1}}/> sssbhakare@gmail.com 
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <CallIcon sx={{color : 'green',pt: 1}}/> 0231 - 243125
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableContainer>
      </Box>
     </Layout>
   )
 }
 
 export default Contact