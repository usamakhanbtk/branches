import { Typography,Stack,Card,CardContent, Button } from '@mui/material'
import { Container } from '@mui/system'
import React,{useState,useEffect} from 'react'
import Footer from '../Footer'
import HeaderDoc from '../HeaderDoc'
import Navbar from '../Navbar'
import Axios from 'axios';

const MeetingLog = () => {
  const [preM,setPreM] = useState([]);
  const storedObject = JSON.parse(localStorage.getItem("UsersData"));
  
  useEffect(()=>{
    Axios.post("http://localhost:5001/getMeetingLog",{
    id:storedObject[0].d_id
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
 const handleDel = (date,time) =>{
  Axios.put("http://localhost:5001/deleteMeetingLog",{
    id:storedObject[0].d_id,
    date:date,
    time:time,
   }).then((responce)=>{
    if(responce.data.message){
    alert("Changes Added");
    window.location.reload(false);
  }
    else{
        
      alert("submitted succesfully")
    }
   })
  }
  return (
    <>
    <Navbar/>
    <HeaderDoc/>
    <Container maxWidth="lg" sx={{mb:"50px"}}>
        <Typography variant="h5"><b>Meeting Logs</b></Typography>
        {preM.length > 0 && 
    <Stack direction="row" justifyContent="start" sx={{ display: "flex", flexWrap: "wrap" }}>
    {preM.map((d) => {
        return (
            <>
           
                <Card sx={{ width: 340, my: "10px", borderRadius: "20px", boxShadow: 6,mx:"10px" }}>
                    <CardContent>
                       <br/>
                        <Typography>Meeting Date: {d.date}</Typography>
                        <Typography>Meeting Time: {d.time}</Typography>
                        <Typography>Meeting Link: {d.link}</Typography><br/>
                       <Button sx={{background:"red"}} onClick={()=>handleDel(d.date,d.time)} variant="contained" size="small">Delete Log</Button>
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

export default MeetingLog