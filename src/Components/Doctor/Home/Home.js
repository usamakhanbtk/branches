import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { Container } from '@mui/system'
import { Button, Typography, useTheme, useMediaQuery, Grid, Stack, Card, CardContent } from '@mui/material';
import Groups2Icon from '@mui/icons-material/Groups2';
import HandshakeIcon from '@mui/icons-material/Handshake';
import Sidebar from '../Navbar';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Footer from '../Footer';
import img from '../images/Home.jpg'
import OtherServices from './OtherServices';
import ContactForm from './ContactForm';
const Home = () => {
    const [counter, setCounter] = useState(false);
    const [myObject, setMyObject] = useState(null);

    
   
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const storedObject = JSON.parse(localStorage.getItem("UsersData"));
    console.log(storedObject[0].name);
    setMyObject(storedObject[0].name);
      
    }, []);
    const facts = [
      {
        name: "Clients Worked With",
        icon: Groups2Icon,
        counter: <CountUp start={0} end={1200} duration={3} delay={0} />,
      }, {
        name: "Completed Projects",
        icon: HandshakeIcon,
        counter: <CountUp start={0} end={1000} duration={3} delay={0} />,
      },
      {
        name: "Winning Awards",
        icon: EmojiEventsIcon,
        counter: <CountUp start={0} end={140} duration={3} delay={0} />,
      },
    ];
    const theme = useTheme();
    const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
    const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"));
    

  return (
    <><Sidebar/> <Container maxWidth="xxl" sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}>
        <Container maxWidth="lg" sx={{ pt: "140px", pb: "120px", color: "#fff" }}>
          <Typography variant={isMatchMD ? "h5" : "h3"}><strong>Welcome </strong>{myObject}</Typography><br />
          <Typography variant={isMatchMD ? "subtitle1" : "h6"}>From Video Consultation To Health Monitoring<br/> System We Provide All Facillities Here</Typography><br />
          <a href="#contactus" style={{ textDecoration: "none" }}> <Button variant="contained" size={isMatchMD ? "small" : "large"} sx={{ backgroundColor: "#2cc501" }}>Contact Us</Button></a>
        </Container>
      </Container>
      <OtherServices/>
      <div id="contactus">
        <ContactForm />
      </div>
      <Container maxWidth="lg" sx={{ pt: "100px" }}>
        <Grid container>
          <Grid item sm={12} md={12} lg={6}>
            <Typography textAlign={isMatchSM ? "center" : null} variant="h3"><strong>About</strong></Typography>
            <Typography textAlign={isMatchSM ? "center" : null} variant="h4" color="#818282"><strong>E - C A R E</strong></Typography><br />
            <Typography textAlign="justify" variant="subtitle1" color="#818282">
            ECare is a virtual health center that provides a range of healthcare services to its users. The platform allows users to access video consultation with healthcare professionals, making it easier for patients to receive medical advice and treatment from the comfort of their homes.<br/>

ECare also provides a blood donation feature that enables users to donate blood to those in need. The platform has an aid and charity system that allows users to donate to charitable causes related to healthcare.<br/>

The diet plans offered by ECare are designed to help users achieve their health goals. The platform also features a BMI calculator, which helps users track their weight and determine if they are at a healthy weight.<br/>

Overall, ECare is a comprehensive virtual health center that offers a range of features and services to help users improve their health and well-being.<br/>The diet plans offered by ECare are designed to help users achieve their health goals. The platform also features a BMI calculator, which helps users track their weight and determine if they are at a healthy weight..
            </Typography>
          </Grid>
          <Grid item sm={12} md={12} lg={6}>
            <Stack sx={{ pt: "40px" }}>
              <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <Typography textAlign={isMatchMD ? "center" : "end"} variant="h1" mt={isMatchSM ? "20px" : null} color="#919191"><strong>{counter && <CountUp start={0} end={5} duration={2} delay={0} />}</strong></Typography>
                <Typography variant={isMatchSM ? "h4" : "h3"} textAlign={isMatchMD ? "center" : "end"} color="#b2b1b1">YEARS OF<br /> EXPERIENCE</Typography>
                <Stack direction="row" sx={{ display: "flex", mt: "10px", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                  {
                    facts.map((fact) => {
                      return (
                        <>
                          <Card sx={{ width: isMatchSM ? 350 : 180, boxShadow: 12, mb: "10px" }}>
                            <CardContent>
                              <Typography textAlign="center">
                                <fact.icon sx={{ fontSize: 100, color: "#274a9b" }} /></Typography><br />
                              <Typography textAlign="center" variant="h4">{counter && fact.counter}+</Typography>
                              <Typography textAlign="center">{fact.name}</Typography><br />
                            </CardContent>
                          </Card>
                        </>

                      )
                    })
                  }
                </Stack>
              </ScrollTrigger>
            </Stack>
          </Grid>
        </Grid>
      </Container>
     
      <Footer/>
    </>
  )
}

export default Home