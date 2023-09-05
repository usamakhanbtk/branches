import {  useTheme,
  useMediaQuery,Button } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React from 'react';
import Notifications from "./images/notifications.svg";
import './HeaderPatient.css';
import {Link} from 'react-router-dom';
const HeaderPatient = () => {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: "70px",mb:"30px" }}>
        <Stack direction="row">
        <input type="text" placeholder="Search.." name="search2" style={{width:isMatchSm?null:"50%",borderRadius:"25px",border:"none",background:"#E5E5E5",padding:"10px"}}/>
         
          
          <Stack spacing={3} direction="row" sx={{ ml: "auto", mr: "60px" }}>
           
          
         <Link to="/editp" style={{textDecoration:"none"}}>  <Button>Edit</Button></Link>
         <Link to="/notification" style={{textDecoration:"none"}}> <Button variant="contained" size="small">Notifications</Button></Link>
           <a href="http://localhost:3001/" target = "_blank" style={{textDecoration:"none"}}> <Button variant="contained"size="small">Start Video Chat</Button></a>
           
          </Stack>
        </Stack>
      </Container>

    </>
  )
}

export default HeaderPatient