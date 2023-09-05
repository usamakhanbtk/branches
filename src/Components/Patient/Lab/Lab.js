import { Container } from '@mui/system';
import React,{useState,useEffect} from 'react'
import Footer from '../Footer'
import HeaderPatient from '../HeaderPatient'
import {Typography,Card,CardContent,Stack,Grid} from '@mui/material';
import Sidebar from '../Sidebar';
import Axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TimerOff from '@mui/icons-material/TimerOff';
import Labs from './Pakistan_Cities_Labs.json';
const Lab = () => {
    const [preM,setPreM] = useState([]);
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
   
    useEffect(()=>{
      Axios.post("http://localhost:5001/getLabortory",{
      city:storedObject[0].city
     }).then((responce)=>{
      if(responce.data.message){
      alert(responce.data.message);
      setPreM(responce.data)
      console.log(responce.data)
    }
      else{
       setPreM(responce.data)
       console.log(responce.data)
      }
     })
    },[])
  return (
    <>
    <Sidebar/>
    <HeaderPatient/>
    <Container maxWidth="lg" sx={{py:"50px"}}>
    <Typography textAlign="start" variant="h4"><b>Available Labs in Your City</b></Typography><br/>
    {preM.length > 0 && 
    <Stack direction="column" justifyContent="start" sx={{ display: "flex", flexWrap: "wrap" }}>
    {preM.map((d) => {
        return (
            <>
           
                <Card sx={{  my: "10px", borderRadius: "20px", boxShadow: 6,mx:"10px" }}>
                    <CardContent>
                       <Grid container>
                        <Grid item lg={3} sm={3} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <Typography textAlign="center" variant="h5" color="#1769aa"><b>{d.name}</b></Typography>
                        </Grid>
                        <Grid item lg={3} sm={3}>
                            <Container sx={{display:"flex",justifyContent:"center"}}>
                            <Stack spacing={1}>  
                            <Typography variant="h6"><b>{d.location}</b></Typography>
                            <LocationOnIcon sx={{fontSize:"40px",color:"green"}}/>
                            </Stack>
                            </Container>
                        </Grid>
                        <Grid item lg={3} sm={3}>
                        <Container sx={{display:"flex",justifyContent:"center"}}>
                            <Stack spacing={1}>  
                            <Typography variant="h6"><b>{d.opening}AM</b></Typography>
                            <AccessTimeIcon sx={{fontSize:"40px",color:"blue"}}/>
                            </Stack>
                            </Container>
                        </Grid>
                        <Grid item lg={3} sm={3}>
                        <Container sx={{display:"flex",justifyContent:"center"}}>
                            <Stack spacing={1}>  
                            <Typography variant="h6"><b>{d.closing}PM</b></Typography>
                            <TimerOff sx={{fontSize:"40px",color:"red"}}/>
                            </Stack>
                            </Container>
                        </Grid>
                       </Grid>

                    </CardContent>
                </Card>
            </>
        )
    })
    }
</Stack>
    }</Container>
    <Footer/>
    </>
  )
}

export default Lab