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
const Home = () => {
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchlg = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatchmd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Header />
      <Container
        maxWidth={"xxl"}
        sx={{
          pb:"200px",
          background: "linear-gradient(180deg, #1A91FF 0%, #00172C 100%)",
          position: "relative",
          bottom: "41px",
          display: "flex",
          alignItems: isMatchSm ? "center" : null,
          textAlign: isMatchSm ? "center" : null,
          width: isMatchSm ? "100vw" : null,
          pt:isMatchSm ? "41px" : null
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Container
              sx={{
                ml: isMatchmd ? null : "100px",
                mt: isMatchSm ? null : "140px",
              }}
            >
              <Typography
                variant={isMatchlg ? "h5" : "h2"}
                letterSpacing="0.03em"
                textTransform="capitalize"
                color="#FFFFFF"
              >
                <b>
                  Say <br /> GoodBye To The Hustle!
                </b>
              </Typography>
              <Typography
                variant="subtitle1"
                letterSpacing="0.03em"
                textTransform="capitalize"
                color="#FFFFFF"
                fontSize={isMatchlg ? "16px" : "20px"}
              >
                <b>
                  Introducing a virtual health system
                  <br /> to get connected to your doctor virtually
                </b>
              </Typography>
              <Typography
                variant="subtitle1"
                letterSpacing="0.03em"
                textTransform="capitalize"
                color="#FFFFFF"
                fontSize={isMatchlg ? "12px" : "16px"}
              >
                From video consultation to monitoring your daily <br /> health, E-care has it all covered!
              </Typography>
              <a href="#more" style={{ textDecoration: "none" }}>
                <br />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "#FFFFFF",
                    color: "#002175",
                    width: isMatchSm ? null : "200px",
                    height: isMatchSm ? null : "70px",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "19px",
                    ml: isMatchSm ? null : "90px",
                  }}
                >
                  <b>Read More</b>
                </Button>
              </a>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={Landing} style={{width:isMatchSm?"400px":null}} alt="logo" />
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xxl"
        sx={{
          pt: "60px",
          position: "relative",
          bottom: "41px",
          height: isMatchSm ? "60vh" : "80vh",

          background: "rgba(0, 33, 117, 0.16)",
        }}
        id="more"
      >
        <Stack sx={{ pl: isMatchSm ? null : "40px", width: isMatchSm ? null : "50%" }}>
          <Typography variant="h2" fontSize={isMatchSm ? "16px" : null} color="#002175">
            <b>Challenge</b>
          </Typography>
          <Typography variant="h5" color="#2B2B36" textAlign="justify" fontSize={isMatchlg ? "14px" : null} >
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
          <Typography variant="h2" fontSize={isMatchSm ? "16px" : null} color="#002175">
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
      <Grid container sx={{ mt: "100px" }}>
        <Grid
          item
          xs={12}
          sx={12}
          md={6}
          lg={6}
          style={{
            paddingLeft:isMatchSm?null: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack direction="column" spacing={1}>
            <Typography
              pl="50px"
              variant="h2"
              color="#D30404"
              fontSize="64px"
              fontWeight={600}
              sx={{ fontSize: isMatchSm ? "40px" : null }}
            >
              CONNECTING
            </Typography>
            <Typography
              pl="50px"
              color="#2B0000"
              fontWeight={240}
              fontFamily="poppins"
              fontStyle="normal"
              sx={{ fontSize: isMatchSm ? "16px" : "24px" }}
            >
              Patients And Doctors Virtually
            </Typography>
            <img src={Landing} style={{width:isMatchSm?"400px":null}} alt="logo" />
          </Stack>
        </Grid>
        <Grid item xs={12} sx={12} md={6} lg={6}>
          <Typography
            variant="h4"
            textAlign={isMatchmd?"center":"end"}
            paddingRight="140px"
            fontWieght="2000px"
            color="#002175"
          >
            <b>Welcome</b>
          </Typography>
          <Container
            maxWidth="sm"
            sx={{
              mt: isMatchSm ? "20px" : "100px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2}>
              <Stack spacing={3} direction="row">
                <Link to="dlogin">
                  <Card
                    sx={{
                      background:
                        "linear-gradient(180deg, #002175 0%, #02365E 233.33%)",
                      borderRadius: "19px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <CardContent>
                      <Stack>
                        <img
                          style={{ height: "120px" }}
                          src={Doctor}
                          alt="logo"
                        />
                        <Typography color="#ffffff">Login as Doctor</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="plogin">
                  <Card
                    sx={{
                      background:
                        "linear-gradient(180deg, #002175 0%, #02365E 233.33%)",
                      borderRadius: "19px",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <CardContent>
                      <Stack>
                        <img
                          style={{ height: "120px" }}
                          src={Patient}
                          alt="logo"
                        />
                        <Typography color="#ffffff">
                          Login as Patient
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </Stack>
              <a href="#signUp" style={{ textDecoration: "none" }}>
                <Typography >
                  Don't have an account?<Button>Sign Up Now</Button>{" "}
                </Typography>
              </a>
            </Stack>
          </Container>
        </Grid>
      </Grid>
      <Container
        maxWidth="xxl"
        id="signUp"
        sx={{
          height: isMatchSm ? "80vh" : "93vh",
          background: "linear-gradient(180deg, #1A91FF 0%, #00172C 100%)",
          display: "flex",
          alignItems: isMatchSm ? "center" : null,
          textAlign: isMatchSm ? "center" : null,
          justifyContent: "center",
          pt: "120px",
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h2" color="#ffffff" fontSize={isMatchlg ? "34px" : null} textAlign="center">
            <b>Objective</b>
          </Typography>
          <Typography color="#ffffff" variant="h4" fontSize={isMatchlg ? "20px" : null} textAlign="center">
            To provide patients and doctors alike access to online platform.
            <br /> To provide doctors facility of virtual clinic so they don’t{" "}
            <br /> need to invest in making their clinics
          </Typography>
          <Stack>
            <Link style={{ textDecoration: 'none' }} to="dsign">
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  m: "auto",
                  borderRadius: "19px",
                  color: "#002175",
                  background: "#ffffff",
                  textDecoration: "none",
                  ml: isMatchSm ? null : "38%"
                }}
              >
                <b>Sign Up As Doctor</b>
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: 'none' }} to="psign">
              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  m: "auto",
                  borderRadius: "19px",
                  color: "#002175",
                  background: "#ffffff",
                  textDecoration: "none",
                  ml: isMatchSm ? null : "38%"
                }}
              >
                <b>Sign Up As Patient</b>
              </Button>
            </Link>
          </Stack>
        </Stack>

      </Container>
      <Footer />
    </>
  );
};

export default Home;
