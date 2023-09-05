import { Card, CardContent, Typography,Stack,useTheme,
    useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Video from "./images/video.png";
import Blood from "./images/blood.png";
import Aid from "./images/aid.png";
import Lab from "./images/laboratory.png";
import Health from "./images/health.png";
import Footer from './Footer';
import Header from './Header';

const services = [{
    name:"Video Consultation",
    logo:Video
},
{
    name:"Blood Donation",
    logo:Blood
},
{
    name:"Aid & Charity",
    logo:Aid
},
{
    name:"Laboratory",
    logo:Lab
},{
    name:"Health Tracker",
    logo:Health
}];
const Services = () => {
    const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Header/>
    <Container maxWidth="xxl" sx={{mb:"100px"}}>
        <Typography variant="h2" padding="80px" textAlign="center" color="#002EA4" sx={{fontSize:isMatchSm?"30px":null}}>Our Services</Typography>
        <Container sx={{display:"flex" ,flex:"column",flexWrap:"wrap",justifyContent:"space-evenly"}}>
        {
            services.map((service)=>{
                return(
                    <>
                    <Stack spacing={2}>
                    <Card sx={{background:"rgba(217, 217, 217, 0.2)",borderRadius:"15px",border: "none", boxShadow: "none",height:"160px"}}>
                        <CardContent>
                            <img src={service.logo} alt="logo"/>
                        </CardContent>
                    </Card>
                    <Typography textAlign="center" fontWeight={400}>{service.name}</Typography>
                    </Stack>
                    </>
                )
            })
        }
        </Container>
    </Container>
    <Footer/>
    </>
  )
}

export default Services