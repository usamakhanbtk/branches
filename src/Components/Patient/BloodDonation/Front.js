import {
  Typography, Stack, Button, useTheme,
  useMediaQuery,
} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import HeaderPatient from '../HeaderPatient';
import Sidebar from '../Sidebar';
const Front = () => {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Sidebar/>
      <HeaderPatient />
      <Container maxWidth="lg"><Typography variant={isMatchSm ? "h4" : "h3"} color="#002175"><b>Blood Donation</b></Typography></Container>
      <br />
      <Container maxWidth="lg" sx={{ height: "506px", background: "linear-gradient(127.29deg, #DE0000 3.06%, #A40000 106.32%)", borderRadius: "17px", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Stack spacing={1}>
          <Typography variant="h3" color="#ffffff"><b>Need Blood?</b></Typography>
          <Typography variant="h6" color="#ffffff"><b>We are here to help!</b></Typography>
          <Stack direction="row" spacing={1}>
            <Link to="/requestcallforblood" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ color: "#D30404", background: "#ffffff" }}><b>Request a Call</b></Button>
            </Link>
            <Link to="/donateblood" style={{ textDecoration: "none" }}>
              <Button variant="contained" sx={{ color: "#D30404", background: "#ffffff" }}><b>Donate Blood</b></Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Front