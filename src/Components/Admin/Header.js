import { AppBar, Toolbar,Button, Grid ,Typography, Stack} from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import {Link} from "react-router-dom";
import Logo from '../Patient/images/logo.png'
const pages = [
  {
    route: "/adminPatientsList",
    name: "Total Patients",
  },
  {
    route: "/admindoctorsList",
    name: "Total Doctors",
  },
  {
    route: "/adminblooddonationList",
    name: "Blood Donations",
  }, {
    route: "/adminaidcharityList",
    name: "Aid/Charity",
  },{
    route:"/contactusbyadmin",
    name:"ContactUs List"
  },{
    route:"/labortorybyadmin",
    name:"Add Labortory"
  }
];

const Header = () => {
  return (
    <>
    <AppBar position="sticky" sx={{background:"#1769aa"}} elevation={0}>
      <Toolbar>
        <Grid container>
          <Grid item lg={4}>
            <Stack direction="row" spacing={1}>
            <Typography variant="h5">E-Care</Typography>
            <img style={{width:"34px",height:"34px"}} src={Logo}/>
            </Stack>
          </Grid>
          <Grid item lg={8}>
<Container maxWidth="lg" sx={{display:"flex",justifyContent:"space-around"}}>
{pages.map((page) => {
              return (
                <>
                  <Link to={page.route} style={{textDecoration:"none"}}>
                    <Button variant="text" sx={{color:"white"}}>
                      {page.name}
                    </Button>
                  </Link>
                </>
              );
            })}
            <Link to="/" style={{textDecoration:"none"}}><Button variant="contained" sx={{background:"green"}}>Logout</Button></Link>
</Container>
</Grid>
</Grid>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Header