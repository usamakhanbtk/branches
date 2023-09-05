import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import Landing from "./images/Landing.png";
import Doctor from "./images/doctor.png";
import Patient from "./images/patient.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Logo from "./images/logo.png";

const About = () => {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <>
    <Header/>
    <Container
        maxWidth="xxl"
        sx={{
          pt: "60px",
          position: "relative",
          height: isMatchSm ? "60vh" : "80vh",
          mt:"-40px",
        }}
        id="more"
      >
        <Stack sx={{ pl: isMatchSm ? null : "40px", width: isMatchSm ? null : "50%" }}>
          <Typography variant="h2" fontSize={isMatchSm ? "16px" : null} color="blue">
            <b>Challenge</b>
          </Typography>
          <Typography variant="h5" color="#2B2B36"  textAlign="justify" fontSize={isMatchlg ? "14px" : null} >
            
            In case of manual clinics Doctors have to invest a lot of money to
            make their clinic and they have to bear their monthly expenses also.
            Patients have to travel from one city to another city just to
            consult a doctor. There is no such system available to public where
            they can monitor their health and diet regularly. Also, there is no
            charity base donation system through which patients can get access
            to their desired doctors
            
          </Typography><br />
        </Stack>
        <Stack sx={{ float: "right", width: isMatchSm ? null : "50%", textAlign: "end" }}>
          <Typography variant="h2" fontSize={isMatchSm ? "16px" : null} color="blue">
            <b>Solution</b>
          </Typography>
          <Typography variant="h5" color="#2B2B36" textAlign="justify" fontSize={isMatchlg ? "18px" : null} >
            
            To automate the doctors and patient’s meetings in a very effective
            way. In the present manual clinics, the patients are bound to meet
            the doctors in person but this system will help them to organize
            their
            
          </Typography>
        </Stack>
      </Container>
      <Footer/>
    </>
  )
}

export default About