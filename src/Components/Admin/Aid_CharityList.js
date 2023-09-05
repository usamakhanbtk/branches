import { Card, CardContent, Grid, TextField } from '@mui/material'
import { Paper, Table, TableHead, TableContainer,Typography, MenuItem,TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container, Stack } from '@mui/system';
import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import axios from 'axios';
const BloodDonationsList = () => {
  const curA = React.useRef();
  const [bloodDonationList, setBloodDonationList] = useState([]);
  const [requestForBlood, setRequestForBlood] = useState([]);
  const [showA,setShowA] = useState();
  const [temp,setT] = useState();
  const [currentAid,setCurrentAid] = useState();
  const [user, setUser] = useState({
    id: 0,
    ammount :0,
});
  useEffect(() => {
    const fetchBloodData = async () => {
      const result = await axios(
        'http://localhost:5001/getAidData',
      );


      if (result?.data) setBloodDonationList(result.data);
    };

    fetchBloodData();
    
  }, []);
  useEffect(() => {
    const fetchRequestData = async () => {
      const result = await axios(
        'http://localhost:5001/getCharityData',
      );


      if (result?.data) setRequestForBlood(result.data);
    };

    fetchRequestData();
    
  }, []);
  
  useEffect(() => {
    const fetchData = async () => {
        const result = await axios(
            'http://localhost:5001/getTotalDonations',
        );

        if(result?.data) setCurrentAid(result.data);
        curA.current = result.data;
        console.log(curA.current);
        setT(curA.current[0].ammount)
    };

    fetchData();
    console.log(currentAid);
    
}, []);
const handleChange = (e) => {
  const { name, value } = e.target;

  setUser({
      ...user,
      [name]: value,
  });
};
const handleAdd = (money,curId) =>{
  console.log(user);
  if(money > currentAid[0].ammount){
    alert("insufficient Ammount");
  }else{
    setNewAid(money,curId);
    giveRequiredAid(money,curId);
   delP(curId);
  }
}
const setNewAid = (money,curId) =>{
  const total = currentAid[0].ammount - money;
  axios.put("http://localhost:5001/TotalDonations",{
      id:curId,
      ammount:total
     }).then((responce)=>{
      if(responce.data.message){
      alert(responce.data.message);
    }
      else{
        alert("submitted succesfully")
      }
     })
     
}
const giveRequiredAid = (money,curId) =>{
  axios.put("http://localhost:5001/setAid",{
    id:curId,
    ammount:money
   }).then((responce)=>{
    if(responce.data.message){
    alert(responce.data.message);
  }
    else{
      alert("submitted succesfully")
      
    }
   })
}
const delP = (id) => {
  console.log("delete");
  axios.put("http://localhost:5001/deleteGetAidPatient", {
      id: id
  }).then((res) => {
      if (res) {
          alert(res.data.message);
      } else {
          alert("account deleted succesfully")
          window.location.reload(false);
      }
  })
  window.location.reload(false);
}
  return (
    <>
      <Header />
      <Typography variant="h4" m="20px"><b>Total Donations: {temp}</b></Typography>
      <Grid container>
        <Grid item lg={6} xl={6} sm={12}>
        {bloodDonationList.length > 0 && 
           <Container maxWidth="lg" sx={{ textAlign: "center",mt:"40px" }}>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead sx={{ background: "#1769aa" }}>
                       <TableRow>
                           <TableCell><Typography color="white" variant="h6"><b>Donor</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>id</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Ammount Donated</b></Typography></TableCell>
                          
                       </TableRow>
                   </TableHead>
                   <TableBody>

                       {bloodDonationList.map((p) => {
                           return (
                               <>
                                   <TableRow>
                                       <TableCell><Typography>{p.name}</Typography></TableCell>
                                       <TableCell><Typography>{p.id}</Typography></TableCell>
                                       <TableCell><Typography>{p.city}</Typography></TableCell>
                                       <TableCell><Typography>{p.email}</Typography></TableCell>
                                       <TableCell><Typography>{p.ammount}</Typography></TableCell>
                                       
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
        {/* <Grid item lg={4} xl={4} sm={12}>
          <Card sx={{mt:"140px"}}>
            <CardContent>
              <br />
              <Typography variant="h6">Total Aid: </Typography>
              <Stack spacing={0}>
              <TextField label="User Id" variant='standard' value={user.id} name="id" onChange={handleChange}/><br />
              <TextField label="Ammount" variant='standard' value={user.ammount} name="ammount" onChange={handleChange}/><br />
              <Button variant="contained" onClick={handleAdd}>Submit</Button>


              </Stack>
            </CardContent>
          </Card>
        </Grid> */}
        <Grid item lg={6} xl={6} sm={12}>
          {requestForBlood.length > 0 && 
           <Container maxWidth="lg" sx={{ textAlign: "center",mt:"40px" }}>
           <TableContainer component={Paper}>
               <Table>
                   <TableHead sx={{ background: "#1769aa" }}>
                       <TableRow>
                           <TableCell><Typography color="white" variant="h6"><b>Receiver</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>id</b></Typography></TableCell>
                          
                           <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Ammount Ask</b></Typography></TableCell>
                           <TableCell><Typography color="white" variant="h6"><b>Approve</b></Typography></TableCell>
                       </TableRow>
                   </TableHead>
                   <TableBody>

                       {requestForBlood.map((p) => {
                           return (
                               <>
                                   <TableRow>
                                       <TableCell><Typography>{p.name}</Typography></TableCell>
                                       <TableCell><Typography>{p.id}</Typography></TableCell>
                                       <TableCell><Typography>{p.city}</Typography></TableCell>
                                       <TableCell><Typography>{p.email}</Typography></TableCell>
                                       <TableCell><Typography>{p.ammount}</Typography></TableCell>
                                       <Button sx={{mt:"5px",background:"green"}} variant="contained" onClick={()=>handleAdd(p.ammount,p.id)}>Approve</Button>
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