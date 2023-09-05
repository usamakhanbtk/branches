import { Card, CardContent, Grid, TextField } from '@mui/material'
import { Paper, Table, TableHead, TableContainer,Typography, MenuItem,TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios';
const BloodDonationsList = () => {
  const [temp,setTemp] = useState('')
  const [email, setEmail] = useState('');
  const [id, setId] = useState();
  const [Location, setLocation] = useState('');
  const [time,setTime] = useState('');
  const [bloodDonationList, setBloodDonationList] = useState([]);
  const [requestForBlood, setRequestForBlood] = useState([]);
  const [user, setUser] = useState({
    time:"",
    location: "",
    date:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchBloodData = async () => {
      const result = await axios(
        'http://localhost:5001/getBloodDonationData',
      );


      if (result?.data) setBloodDonationList(result.data);
    };

    fetchBloodData();
    console.log(bloodDonationList);
  }, []);
  useEffect(() => {
    const fetchRequestData = async () => {
      const result = await axios(
        'http://localhost:5001/getRequestForBloodData',
      );


      if (result?.data) setRequestForBlood(result.data);
    };

    fetchRequestData();
    console.log(requestForBlood);
  }, []);
  const handleAdd = () => {
    if (user.email == "") {
    alert("Please Enter Your email");
  } else if(user.time == ""){
    alert("Please Enter Your time");
  }else if(user.location==""){
    alert("Please Enter Your location");
  }else if(user.date==""){
    alert("Please Enter Your Date");
  }else {
    axios.post("http://localhost:5001/bloodSchedule",{
      id,id,
      email:email,
      time:user.time,
      location:user.location, 
      date:user.date,
     }).then((responce)=>{
      if(responce.data.message){
      alert(responce.data.message);
    }
      else{
        alert("submitted succesfully")
        if(temp == 'donor'){
          delD(id);
        }else if (temp == 'reciever'){
          delR(id);
        }
      }
     })
  }
};
const delD = (id) => {
  console.log("delete");
  axios.put("http://localhost:5001/deleteBS1", {
      id: id
  }).then((res) => {
      if (res) {
          alert(res.data.message);
      } else {
          alert("account deleted succesfully")
      }
  })
  window.location.reload(false);
}
const delR = (id) => {
  console.log("delete");
  axios.put("http://localhost:5001/deleteBS2", {
      id: id
  }).then((res) => {
      if (res) {
          alert(res.data.message);
      } else {
          alert("account deleted succesfully")
      }
  })
  window.location.reload(false);
}
  return (
    <>
      <Header />
     
      <Grid container>
        <Grid item lg={5} xl={5} sm={12}>
        {bloodDonationList.length > 0 && 
           <Container maxWidth="lg" sx={{ textAlign: "center",mt:"40px" }}>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead sx={{ background: "#1769aa" }}>
                       <TableRow>
                           <TableCell><Typography color="white" variant="h6"><b>Donor Name</b></Typography></TableCell>
                           
                          
                           <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Blood Group</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Approve</b></Typography></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>

                       {bloodDonationList.map((p) => {
                           return (
                               <>
                                   <TableRow>
                                       <TableCell><Typography>{p.name}</Typography></TableCell>
                                       <TableCell><Typography>{p.city}</Typography></TableCell>
                                       <TableCell><Typography>{p.email}</Typography></TableCell>
                                       <TableCell><Typography>{p.bloodgroup}</Typography></TableCell>
                                       <Button sx={{mt:"5px"}} variant="contained" onClick={()=>{
                                        setEmail(p.email);setId(p.id);setTemp('donor');
                                       }}>Approve</Button>
                                   </TableRow>
                               </>
                           )
                       })}

                   </TableBody>

               </Table>
           </TableContainer><br />

       </Container>
      
    }
        </Grid>
        <Grid item lg={2} xl={2} sm={12}>
          <Card sx={{mt:"140px"}}>
            <CardContent>
              <br />
              <Stack spacing={0}>
              <TextField  value={id} disabled variant='standard'/><br />
              <TextField  value={email} disabled variant='standard'/><br />
              <TextField label="" type="date" value={user.date} name="date"
                        onChange={handleChange} variant='standard'/><br />
              <TextField label="" type="time" value={user.time} name="time"
                        onChange={handleChange} variant='standard'/><br />
              <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        label="Location"
                        name="location"
                        select
                        value={user.location}
                        onChange={handleChange}
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                    >
                        <MenuItem value={'Allied Hospital(Faislabad)'}>Allied Hospital(Faislabad)</MenuItem>
                        <MenuItem value={'Civil Hospital(Multan)'}>Civil Hospital(Multan)</MenuItem>
                        <MenuItem value={'National Hospital(Lahore)'}>National Hospital(Lahore)</MenuItem>
                        <MenuItem value={'ARC org(Karachi)'}>ARC org(Karachi)</MenuItem>
                        <MenuItem value={'ABD firm(Sialkot)'}>ABD firm(Sialkot)</MenuItem>
                        <MenuItem value={'Blood Center(Islamabad)'}>Blood Center(Islamabad)</MenuItem>
                        <MenuItem value={'Red Cross(Queeta)'}>Red Cross(Queeta)</MenuItem>
                    </TextField><br/>
              <Button variant="contained" onClick={handleAdd}>Send Email</Button>


              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={5} xl={5} sm={12}>
          {requestForBlood.length > 0 && 
           <Container maxWidth="lg" sx={{ textAlign: "center",mt:"40px" }}>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead sx={{ background: "#1769aa" }}>
                       <TableRow>
                           <TableCell><Typography color="white" variant="h6"><b>Receiver Name</b></Typography></TableCell>
                           
                          
                           <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Blood Group</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Approve</b></Typography></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>

                       {requestForBlood.map((p) => {
                           return (
                               <>
                                   <TableRow>
                                       <TableCell><Typography>{p.name}</Typography></TableCell>
                                       <TableCell><Typography>{p.city}</Typography></TableCell>
                                       <TableCell><Typography>{p.email}</Typography></TableCell>
                                       <TableCell><Typography>{p.bloodgroup}</Typography></TableCell>
                                       <Button sx={{mt:"5px"}} variant="contained" onClick={()=>{
                                        setEmail(p.email);setId(p.id);setTemp('reciever');
                                       }}>Approve</Button>
                                   </TableRow>
                               </>
                           )
                       })}

                   </TableBody>

               </Table>
           </TableContainer><br />

       </Container>
          }
        </Grid>
      </Grid>

      <Footer />
    </>
  )
}

export default BloodDonationsList