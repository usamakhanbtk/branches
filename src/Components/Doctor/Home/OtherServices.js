import { Card, CardContent, Stack, Typography,useTheme,useMediaQuery } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const OtherServices = () => {
    const theme = useTheme();
    const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
    const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"));
    const otherServices = [
        {
        name1:"Video ",
        name2: "Consultation",
        desc : "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
        name1:"Blood ",
        name2: "Donation",
        desc : "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
        name1:"Aid_Charity ",
        name2:"System",
        desc : "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
        name1:"Health Monitoring ",
        name2:"System",
        desc : "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
        name1:"Labortory ",
        name2:"Management",
        desc : "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
]
  return (
    <>
    <Container maxWidth="xxl" sx={{background:"#f4f9fd",color:"#123453"}}> 
    <Container maxWidth="lg" sx={{py:"80px"}}>
        <Typography textAlign="center"  variant={isMatchSM?"h6":"h5"}><strong>Our Services</strong></Typography><br />
        <Typography textAlign="center"  variant={isMatchSM?"subtitle2":"h6"}><strong>you can find our Services here.</strong></Typography><br />
        <Stack direction="row" sx={{display:"flex",mt:"10px",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            {
                otherServices.map((service)=>{
                    return(
                        <Card sx={{borderRadius:"20px 0px 20px 20px",boxShadow:8,width:320,my:isMatchLG?"10px":"20px"}}>
                <CardContent>
                    <Typography textAlign="center" variant={isMatchSM?"h6":"h5"}><strong>{service.name1} <span style={{color:"#62c929"}}>{service.name2}</span></strong></Typography><br />
                    <Typography textAlign="center"  fontSize={isMatchSM?14:18}>{service.desc}</Typography>
                </CardContent>
            </Card>
                    )
                })
            }
        </Stack>
    </Container>
    </Container>
    </>
  )
}

export default OtherServices