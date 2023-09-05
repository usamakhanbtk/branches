import React, { useState,useEffect } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import SideBar from './Navbar';
import HeaderP from './HeaderDoc';
import Footer from './Footer';
import Axios from 'axios';
const Edit = () => {
    const [user,setUser] = useState({
        id:null,
        name: "",
        gender: "",
        email: "",
        phone: "",
        password: "",
        city: "",
        cnic: "",
      qualification:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
    useEffect(()=>{
        setUser(user => ({ ...user, name: storedObject[0].name }));
            setUser(user => ({ ...user, id: storedObject[0].d_id }));
            setUser(user => ({ ...user, city: storedObject[0].city }));
            setUser(user => ({ ...user, phone: storedObject[0].phone }));
            setUser(user => ({ ...user, cnic: storedObject[0].cnic }));
            setUser(user => ({ ...user, gender: storedObject[0].gender }));
             setUser(user => ({ ...user, email: storedObject[0].email }));
              setUser(user => ({ ...user, password: storedObject[0].password }));
               setUser(user => ({ ...user, qualification: storedObject[0].qualification }));
    },[])
    const Cities = ['Faislabad','Lahore','Multan','Karachi','Queeta','Sialkot','Islamabad'];
    const handleAdd = () =>{
        Axios.put("http://localhost:5001/updateDoctor",{
            id:user.id,
            name:user.name,
            gender:user.gender,
            email:user.email,
            phone:user.phone,
            
            city:user.city,
            cnic:user.cnic,
            
            password:user.password,
            qualification:user.qualification
           }).then((responce)=>{
            if(responce.data.message){
            alert("Changes Will Be Done When You LogOut");
           
          }
            else{
                
              alert("submitted succesfully")
            }
           })
          
    }
  return (
    <>
    <SideBar/>
    <HeaderP/>
     <Container maxWidth="md">
   <Card>
    <CardContent>
            <Stack spacing={2}>
              <TextField
                variant="standard"
                label="Name"
                sx={{ width:  "100%" }}
                name="name"
               value={user.name}
               onChange={handleChange}
              />
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="standard"
                  label="Gender"
                  sx={{ width:  "20%" }}
                  name="gender"
                  value={user.gender}
                  select
                  onChange={handleChange}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>

                </TextField>
                <TextField
                  variant="standard"
                  label="CNIC No"
                  sx={{ width: "60%" }}
                  name="cnic"
                  value={user.cnic}
                  onChange={handleChange}
                />
              </Stack>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="standard"
                  type="number"
                  label="Phone No"
                  sx={{ width: "40%" }}
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                />
                <TextField
                  variant="standard"
                  label="City"
                  sx={{ width:"60%" }}
                  name="city"
                  value={user.city}
                  select
                  onChange={handleChange}
                >
                  {
                    Cities.map((city) => {
                      return (
                        <MenuItem value={city}>
                          {city}
                        </MenuItem>
                      )
                    })
                  }

                </TextField>
              </Stack>
              <TextField
                variant="standard"
                label="Email Address"
                sx={{ width: "100%" }}
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              <TextField
               
                variant="standard"
                label="Type Password"
                sx={{ width: "100%" }}
                name="password"
                onChange={handleChange}
                value={user.password}
              />
             
            </Stack><br />
            <Button
              type="submit"
              variant="contained"
              onClick={handleAdd}
              sx={{
                background:
                  "linear-gradient(89.97deg, #002175 10.89%, #002175 156.51%)",
                boxShadow: "0px -266px 19px rgba(217, 217, 217, 0.419884)",
                borderRadius: "26px",
                ml: "30%",
                width:  "206px",
                height:  "52px",
              }}
            >
              Update Account
            </Button>
         
    </CardContent>
   </Card>
   </Container>
    <Footer/>
    </>
  )
}

export default Edit