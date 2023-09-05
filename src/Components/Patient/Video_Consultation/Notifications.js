import React,{useState,useEffect} from 'react'
import { Container, Stack } from '@mui/system';
import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material'
import Footer from '../Footer'
import HeaderPatient from '../HeaderPatient'
import Sidebar from '../Sidebar';
import Axios from 'axios';

const Notifications = () => {
    const [preM,setPreM] = useState([]);
    const [pareM,setPareM] = useState([]);
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
   
    useEffect(()=>{
      Axios.post("http://localhost:5001/getAppointmentByP",{
      id:storedObject[0].p_id
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
    useEffect(()=>{
        Axios.post("http://localhost:5001/getBs",{
        id:storedObject[0].p_id
       }).then((responce)=>{
        if(responce.data.message){
        alert(responce.data.message);
        setPareM(responce.data)
        console.log(responce.data)
      }
        else{
         setPareM(responce.data)
         console.log(responce.data)
        }
       })
      },[])
  return (
   <>
   <Sidebar/>
   <HeaderPatient/>
   <Container maxWidth="lg" sx={{pb:"70px",pt:"50px"}}>
    <Typography textAlign="start" variant="h4"><b>Request Responce</b></Typography><br/>
    {preM.length > 0 && 
    <Stack direction="row" justifyContent="start" sx={{ display: "flex", flexWrap: "wrap" }}>
    {preM.map((d) => {
        return (
            <>
           
                <Card sx={{  my: "10px", borderRadius: "20px", boxShadow: 6,mx:"10px" }}>
                    <CardContent>
                        {d.status == "Your Request Has Been Accepted"?
                       <nobr> <Typography variant="h6" color="#123453"><b>Status: {d.status}</b></Typography></nobr>:
                       <nobr> <Typography variant="h6" color="red"><b>Status: {d.status}</b></Typography></nobr>
                       }
                       <Typography>Doctors ID: {d.d_id}</Typography>
                        <Typography>Meeting Date: {d.date}</Typography>
                        <Typography>Meeting Time: {d.time}</Typography>
                        <Typography>Meeting Link: {d.link}</Typography><br/>
                    </CardContent>
                </Card>
            </>
        )
    })
    }
</Stack>
    }</Container><br />
<Container maxWidth="lg" sx={{pb:"70px",pt:"50px"}}>
    <Typography textAlign="start" variant="h4"><b>Blood Responce</b></Typography><br/>
    {preM.length > 0 && 
    <Stack direction="row" justifyContent="start" sx={{ display: "flex", flexWrap: "wrap" }}>
    {pareM.map((d) => {
        return (
            <>
           
                <Card sx={{  my: "10px", borderRadius: "20px", boxShadow: 6,mx:"10px" }}>
                    <CardContent>
                        <Typography>Date: {d.date}</Typography>
                        <Typography>Time: {d.time}</Typography>
                        <Typography>Link: {d.location}</Typography><br/>
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

export default Notifications