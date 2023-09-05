import {
    Typography, Stack, Button, useTheme,
    useMediaQuery,
  } from '@mui/material'
  import { Container } from '@mui/system'
  import React from 'react'
  import { Link } from 'react-router-dom';
import HeaderDoc from '../HeaderDoc';
import Navbar from '../Navbar';
  
  const GiveAidByDoc = () => {
    const theme = useTheme();
    const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
      <>
      <Navbar/>
        <HeaderDoc/>
        <Container maxWidth="lg"><Typography variant={isMatchSm ? "h4" : "h3"} color="#002175"><b>Aid_Charity System</b></Typography></Container>
        <br />
        <Container maxWidth="lg" sx={{ height: "506px", background: "green", borderRadius: "17px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <Stack spacing={1}>
            <Typography variant="h3" color="#ffffff"><b>Need Money?</b></Typography>
            <Typography variant="h6" color="#ffffff"><b>We are here to help!</b></Typography>
            <Stack direction="row" spacing={1}>
              <Link to="/aidformbydoc" style={{ textDecoration: "none" }}>
                <Button variant="contained" sx={{ color: "green", background: "#ffffff",ml:isMatchSm?null:"80px" }}><b>Donate Money</b></Button>
              </Link>
            </Stack>
          </Stack>
        </Container>
      </>
    )
  }
  
  export default GiveAidByDoc