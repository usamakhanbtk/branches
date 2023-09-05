import { Container, Stack } from '@mui/system';
import {Button, Card, CardContent, Grid, TextField, Typography,Modal,MenuItem, Box} from '@mui/material'
import React,{useState,useEffect} from 'react';
import HeaderDoc from '../HeaderDoc';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Axios from 'axios';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
const DocHome = () => {
  const [preM,setPreM] = useState([]);
  const [open, setOpen] = useState(false);
  const [t,setT] =useState([]);
  const storedObject = JSON.parse(localStorage.getItem("UsersData"));
  const opening = storedObject[0].opening;
  const closing = storedObject[0].closing;
  const [incase,setIncase] = useState();
  const [newT,setNewT] = useState();
  const [pid,setPid] = useState();
  const [did,setDid] = useState();
  const [date,setDate] = useState();
  const [link,setLink] = useState();
  useEffect(()=>{
    Axios.post("http://localhost:5001/getAppointment",{
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
  const slots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];  
    useEffect(()=>{
      var a = slots.filter(slot => {
        return  slot>=opening && slot<=closing;
      });
      console.log(a);
      setT(a);
    },[])
  const handleAdd = (p_id,d_id,date,time,link) =>{
    Axios.put("http://localhost:5001/updateApoointment",{
            p_id:p_id,
            d_id:storedObject[0].d_id,
            date:date,
            time:time,
            link:link,
            status:"Your Request Has Been Accepted"
           }).then((responce)=>{
            if(responce.data.message){
            console.log("Changes Has Been Added");
           
          }
            else{
                
              alert("submitted succesfully")
            }
           })
  };
  const addMeetingLog=(p_id,d_id,date,time,link)=>{
    setIncase(time);
    setNewT(incase);
    setPid(p_id);
    setDid(d_id);
    setDate(date);
    setLink(link)
    Axios.post("http://localhost:5001/setMeetingLog",{
      id:storedObject[0].d_id,
      date:date,
      time:time,
      link:link,
     }).then((responce)=>{
      if(responce.data.message){
      setOpen(true);
    }
      else{
          
        alert("Meeting Log Has Benn Added")
        handleAdd(p_id,d_id,date,time,link);
      }
     })
  }
  const handleNewM = () =>{
    
    console.log(newT);
    Axios.post("http://localhost:5001/setMeetingLog",{
      id:storedObject[0].d_id,
      date:date,
      time:newT,
      link:link,
     }).then((responce)=>{
      if(responce.data.message){
      alert("already exist")
      
    }
      else{
          
        alert("Meeting Log Has Benn Added")
        handleNewA();
      }
     })
  }
  const handleNewA = () =>{
    Axios.put("http://localhost:5001/updateApoointmentAfterU",{
      p_id:pid,
      d_id:storedObject[0].d_id,
      date:date,
      time:newT,
      link:link,
      status:"Your Request Has Been Accepted"
     }).then((responce)=>{
      if(responce.data.message){
      console.log("Changes Has Been Added");
    }
      else{
        alert("submitted succesfully")
      }
     })
  }
  const handleRej = (p_id,d_id,date,time,link) =>{
    Axios.put("http://localhost:5001/updateApoointment",{
            p_id:p_id,
            d_id:storedObject[0].d_id,
            date:date,
            time:time,
            link:link,
            status:"Your Request Has Been Declined"
           }).then((responce)=>{
            if(responce.data.message){
            alert("Changes Added");
            Axios.put("http://localhost:5001/deleteMeetingLog",{
            id:storedObject[0].d_id,
            date:date,
            time:time,
           }).then((responce)=>{
            if(responce.data.message){
            alert("Changes Added");
            
          }
            else{
                
              alert("submitted succesfully")
            }
           })
          }
            else{
                
              alert("submitted succesfully")
            }
           })
           
  }
  
  const handleAddNewTime = () => {
    setOpen(false);
    if(incase == newT){
      alert("This Time Slot Already Registered")
    }else if(newT==null){
      alert('Kindly Enter New Time Slot')
    }else{
      handleNewM(); 
   

    }
    
    
  };

  return (
    <>
    <Navbar/>
    <HeaderDoc/>
    <Container maxWidth="lg" sx={{pb:"70px",pt:"50px"}}>
    <Typography textAlign="start" variant="h4"><b>Appoinment History</b></Typography><br/>
    {preM.length > 0 && 
    <Stack direction="row" justifyContent="start" sx={{ display: "flex", flexWrap: "wrap" }}>
    {preM.map((d) => {
        return (
            <>
           
                <Card sx={{ width: 340, my: "10px", borderRadius: "20px", boxShadow: 6,mx:"10px" }}>
                    <CardContent>
                        <Typography variant="h5" color="#123453"><b>Patient Id: {d.p_id}</b></Typography>
                        <Typography>Meeting Date: {d.date}</Typography>
                        <Typography>Meeting Time: {d.time}</Typography>
                        <Typography>Meeting Link: {d.link}</Typography><br/>
                        <Stack direction="row" spacing={1}>
                          <CheckCircleOutlineIcon sx={{fontSize:50,color:"green"}} onClick={()=>addMeetingLog(d.p_id,d.d_id,d.date,d.time,d.link)}/>
                          <CancelOutlinedIcon sx={{fontSize:50,color:"red"}}  onClick={()=>handleRej(d.p_id,d.d_id,d.date,d.time,d.link)}/>
                        </Stack>
                    </CardContent>
                </Card>
            </>
        )
    })
    }
</Stack>
    }</Container>
    <Modal open={open} onClose={handleAddNewTime}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          width: 400, 
          bgcolor: 'background.paper', 
          borderRadius: 4, 
          boxShadow: 24, 
          p: 2 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Time Slot already registered
          </Typography>
          
          <TextField
                  variant="standard"
                  label="Enter New Time"
                  name="time"
                  value={newT}
                  onChange={(e)=>setNewT(e.target.value)}
                  sx={{width:"80%"}}
                  select
                >
                  {
                    t.map((city)=>{
                      return(
                        <MenuItem value={city}>
                       {
                          city>12?<>
                        {city} &nbsp;
                        <Typography>pm</Typography>
                        </>:<>{city} &nbsp;am</>
                        }
                        </MenuItem>
                      )
                    })
                  }
                  
                  </TextField>
          <br /><br />
          <Button variant="contained" onClick={handleAddNewTime}>Submit</Button>
        </Box>
      </Modal>
    <Footer/>
    </>
  )
}

export default DocHome