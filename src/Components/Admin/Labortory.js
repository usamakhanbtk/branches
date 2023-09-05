import { Grid ,Card,Typography,Container, CardContent, TextField,MenuItem,Button} from '@mui/material'
import { Stack } from '@mui/system'
import React,{useState} from 'react'
import Footer from './Footer'
import Header from './Header'
import Axios from 'axios';
const Labortory = () => {
    const [user, setUser] = useState({
        name: "",
        location: "",
        opening: "",
        closing: ""
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
      const handleAdd = () => {
        if (user.name == "") {
       
        alert("Please Enter Lab Name");
      } else  if (user.location == "") {
       
        alert("Please Enter Lab Location");
      } else  if (user.opening == "") {
       
        alert("Please Enter Lab Opening Time");
      } else  if (user.closing == "") {
       
        alert("Please Enter Lba Closing Time");
      }   else {
        console.log(user);
        Axios.post("http://localhost:5001/setLabortory",{
          name:user.name,
          location:user.location,
          open:user.opening,
          close:user.closing
         }).then((responce)=>{
          if(responce.data.message){
          alert(responce.data.message);
        }
          else{
            alert("submitted succesfully")
          }
         })
      }
    };
  return (
   <>
   <Header/>
   
        <Container sx={{pt:"100px"}}>
           
            <Container maxWidth="sm">
            <Card sx={{borderRadius:6,boxShadow:8}}>
                <CardContent>
                <Typography textAlign="center" variant="h5" color="#1769aa"><b>Add New Labortory</b></Typography><br/>
                    <Stack>
                    <TextField variant="standard" name="name" value={user.name} onChange={handleChange} label="Enter Lab Name"/><br/>
                    <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        label="Location"
                        name="Location"
                        select
                        value={user.location} onChange={handleChange}
                        name="location"
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                    >
                        <MenuItem value={'Faislabad'}>Faislabad</MenuItem>
                        <MenuItem value={'Multan'}>Multan</MenuItem>
                        <MenuItem value={'Lahore'}>Lahore</MenuItem>
                        <MenuItem value={'Karachi'}>Karachi</MenuItem>
                        <MenuItem value={'Sialkot'}>Sialkot</MenuItem>
                        <MenuItem value={'Islamabad'}>Islamabad</MenuItem>
                        <MenuItem value={'Queeta'}>Queeta</MenuItem>
                    </TextField><br/>
                    <TextField variant="standard"  value={user.opening} name="opening" type="time" onChange={handleChange} label="Enter Lab Opening Time"/><br/>
                    <TextField variant="standard"  value={user.closing} name="closing" type="time" onChange={handleChange} label="Enter Lab Closing Time"/><br/>
                   
                    <Button variant="contained" onClick={handleAdd}>Enter</Button>
                    </Stack>
                </CardContent>
            </Card>
            </Container>
        </Container>
   
   
   <Footer/>
   </>
  )
}

export default Labortory