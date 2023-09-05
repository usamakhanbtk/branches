import { Container } from '@mui/system'
import React, { useState,useEffect } from 'react';
import {
    Typography, Stack, Button, useTheme,
    useMediaQuery,
    MenuItem,
    TextField,
} from '@mui/material'
import HeaderPatient from '../HeaderPatient';
import Axios from 'axios';
const RequestCallForBlood = () => {
    const [user, setUser] = useState({
        ammount: "",
        city: "",
        name:"",
        p_id:"",
        email:"",
        phone:"",
    });
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
    useEffect(()=>{
        setUser(user => ({ ...user, name: storedObject[0].name }));
            setUser(user => ({ ...user, p_id: storedObject[0].p_id }));
            setUser(user => ({ ...user, city: storedObject[0].city }));
            setUser(user => ({ ...user, phone: storedObject[0].phone }));
            setUser(user => ({ ...user, email: storedObject[0].email }));
    },[])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleAdd = () => {
      
        if (user.bloodgroup == "") {
            alert("Enter Required Ammount");
        }
        else {
            console.log(user);
            Axios.post("http://localhost:5001/charity",{
                id:user.p_id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                city:user.city,
                ammount:user.ammount
               }).then((responce)=>{
                if(responce.data.message){
                alert(responce.data.message);
              }
                else{
                  alert("submitted succesfully")
                }
               })
            
        }
    }
    const theme = useTheme();
    const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <>
            <HeaderPatient />
            <Container maxWidth="lg"><Typography variant={isMatchSm ? "h4" : "h3"} color="#002175"><b>Aid_Charity</b></Typography></Container>
            <Container maxWidth="lg" sx={{ mt: "40px", display: "flex", justifyContent: isMatchSm ? null : "center" }}>
                <Stack spacing={4} direction="column">
                    <Typography variant={isMatchSm ? "h6" : "h4"} textTransform="uppercase" textAlign="center" color=" #002175"><b>enter recipent details</b></Typography>

                   <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        name="address"
                        value={storedObject[0].name}
                        label="&nbsp;&nbsp;&nbsp;&nbsp;Name"
                        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", width: isMatchSm ? "100%" : "525px", borderRadius: "10px", height: "78px", pl: "20px" }}
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                        disabled
                    />
                    <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        name="address"
                        value={storedObject[0].city}
                        label="&nbsp;&nbsp;&nbsp;&nbsp;City"
                        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", width: isMatchSm ? "100%" : "525px", borderRadius: "10px", height: "78px", pl: "20px" }}
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                        disabled
                    />
                    <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        label="&nbsp;&nbsp;&nbsp;&nbsp;Email"
                        value={storedObject[0].email}
                        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", width: isMatchSm ? "100%" : "525px", borderRadius: "10px", height: "78px", pl: "20px" }}
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                        disabled
                    />
                     <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        label="&nbsp;&nbsp;&nbsp;&nbsp;Phone"
                        value={storedObject[0].phone}
                        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)", width: isMatchSm ? "100%" : "525px", borderRadius: "10px", height: "78px", pl: "20px" }}
                        InputProps={{
                            // <== adjusted this
                            disableUnderline: true, // <== added this
                        }}
                        disabled
                    />
                     <TextField
                        labelId="demo-simple-select-label"
                        variant="standard"
                        id="demo-simple-select"
                        label="Enter Required Ammount"
                        name="ammount"
                        value={user.ammount}
                        onChange={handleChange}
                        
                        
                        
                    />
                       </Stack>
            </Container>
            <Button variant="contained" onClick={handleAdd} sx={{ color: "#D30404", background: "#ffffff", position: "absolute", left: isMatchSm ? "3%" : "45%",mt:"4px" }}><b>Request a Call</b></Button>
        </>
    )
}

export default RequestCallForBlood