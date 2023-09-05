import { Container, Stack } from '@mui/system';
import {Button, Card, CardContent,MenuItem, Grid, TextField, Typography} from '@mui/material'
import React,{useState,useEffect} from 'react';
import Footer from '../Footer'
import HeaderPatient from '../HeaderPatient'
import Sidebar from '../Sidebar'
import Axios from 'axios';
const Book = (props) => {
const [t ,setT] = useState([]);
    const [meetingLog,setMeetingLog]=useState({
        p_id: props.p_id ,
        d_id:props.d_id,
        date:"",
        time:"",
        link:"",
        time:""
      })
    const slots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];  
    useEffect(()=>{
      var a = slots.filter(slot => {
        return  slot>=opening && slot<=closing;
      });
      console.log(a);
      setT(a);
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
      
        setMeetingLog({
            ...meetingLog,
            [name]: value,
        });
      };
      const handleAdd = () => {
        
        if (meetingLog.time == "" || meetingLog.time<opening || meetingLog.time > closing) {
        alert("Please Enter Correct Time For Your Meeting");
      }else if (meetingLog.date == "") {
        alert("Please Enter Meeting Date");
      }else if (meetingLog.link == "") {
        alert("Please Enter Meeting Link");
      } else {
       
        Axios.post("http://localhost:5001/registerappointment",{
          p_id:meetingLog.p_id,
          d_id:meetingLog.d_id,
          date:meetingLog.date,
          time:meetingLog.time,
          link:meetingLog.link
         }).then((responce)=>{
          if(responce.data.message){
          alert(responce.data.message);
        }
          else{
            alert("submitted succesfully");
            window.location.href = "/video"
          }
         })
      }
    };
    const {opening,closing} = props;
    
  return (
    <>
     <Container maxWidth="sm">
      <Card sx={{boxShadow:8,borderRadius:4}}>
        <CardContent>
        <Typography variant='h6' textAlign="center">Create Meeting Log</Typography><br/>
        <Stack spacing={2}>
        <TextField variant="standard" label="Patients ID" type="text" name="date" onChange={handleChange} value={props.p_id} disabled/>
        <TextField variant="standard" type="text" label="Doctors ID" name="date" onChange={handleChange} value={props.d_id} disabled/>
        <TextField variant="standard" type="date" name="date" onChange={handleChange} value={meetingLog.date}/>
        <TextField
                  variant="standard"
                  label="Available Time"
                  name="time"
                  value={meetingLog.time}
                  onChange={handleChange}
                  
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
        <TextField variant="standard" label="Meeting Link" name="link" type="text" onChange={handleChange} value={meetingLog.link}/>
        </Stack><br/>
        <Button variant="contained" onClick={handleAdd}>Submit</Button>
        </CardContent>
      </Card>
    </Container><br/>
    </>
  )
}

export default Book