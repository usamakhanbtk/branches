import React, { useState,useEffect } from 'react';
import {
    Typography, Stack, Button, useTheme,
    useMediaQuery,
    MenuItem,
    TextField,
} from '@mui/material';
import { Container } from '@mui/system'
import HeaderPatient from '../HeaderDoc';
import Alert from '@mui/material/Alert';
import Axios from 'axios';
const BloodFormByDoc = () => {
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        d_id: "",
        name: "",
        phone: "",
        cnic: "",
        gender: "",
        city: "",
        country: "",
        email: "",
        bloodgroup: "",
        age: "",
    });
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
    useEffect(()=>{
        setUser(user => ({ ...user, name: storedObject[0].name }));
            setUser(user => ({ ...user, d_id: storedObject[0].d_id }));
            setUser(user => ({ ...user, city: storedObject[0].city }));
            setUser(user => ({ ...user, phone: storedObject[0].phone }));
            setUser(user => ({ ...user, cnic: storedObject[0].cnic }));
            setUser(user => ({ ...user, gender: storedObject[0].gender }));
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
      
        if (user.country == "") {
            setHide(true);
            setMessage("Please Enter Your Country");
        }
        else if (user.bloodgroup == "") {
            setHide(true);
            setMessage("Please Enter Your Blood Group");
        }
        else if (user.age == "") {
            setHide(true);
            setMessage("Please Enter Your Age");
        }
        else {
            console.log(user);
            setHide(false);
            Axios.post("http://localhost:5001/registerBloodDonation",{
                id:user.d_id,
                name:user.name,
                gender:user.gender,
                email:user.email,
                phone:user.phone,
                country:user.country,
                city:user.city,
                cnic:user.cnic,
                age:user.age,
                bloodgroup:user.bloodgroup
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
            {hide ?
                <Alert sx={{ width: "90vw", margin: "auto", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#FFCCCB" }} severity="error">{message}
                    <Button onClick={() => setHide(false)}>Ok</Button>
                </Alert> : null

            }
            <HeaderPatient />
            <Container maxWidth="lg">
                <Stack >
                    <Typography variant={isMatchSm ? "h4" : "h3"} color="#002175"><b>Blood Donation</b></Typography>
                    <Typography variant="h6" color="#002175"><b>Register as A Donor</b></Typography>
                </Stack>
            </Container>
            <Container maxWidth="md" sx={{ mt: "40px" }}>
                <Stack spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <TextField label="First Name" name="name" value={storedObject[0].name}  sx={{ width: "100%" }} disabled/>
                        <TextField label="id" name="p_id" value={storedObject[0].p_id}  sx={{ width: "100%" }} disabled/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <TextField label="CNIC" name="cnic" value={storedObject[0].cnic}  sx={{ width: "100%" }} disabled/>
                        <TextField label="Phone No" value={storedObject[0].phone}  name="phone" type="number" sx={{ width: "100%" }} disabled/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <TextField label="City" value={storedObject[0].city}  name="city" sx={{ width: "49%" }} disabled/>
                        <TextField label="Country" name="country" value={user.country} onChange={handleChange} sx={{ width: "49%" }} />
                        <TextField label="Email id" name="email" value={storedObject[0].email}  sx={{ width: "100%" }} disabled/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <TextField label="Age" value={user.age} onChange={handleChange} name="age" type="number" sx={{ width: "25%" }} />
                        <TextField
                            label="Gender"
                            name="gender"
                            sx={{ width: "50%" }}
                            select
                            value={storedObject[0].gender} disabled
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                        </TextField>
                        <TextField
                            value={user.bloodgroup} onChange={handleChange}
                            variant="outlined"

                            label="Blood Group"
                            name="bloodgroup"
                            sx={{ width: "100%" }}
                            select

                        >
                            <MenuItem value={'A+'}>A+</MenuItem>
                            <MenuItem value={'A-'}>A-</MenuItem>
                            <MenuItem value={'B+'}>B+</MenuItem>
                            <MenuItem value={'B-'}>B-</MenuItem>
                            <MenuItem value={'AB+'}>AB+</MenuItem>
                            <MenuItem value={'AB-'}>AB-</MenuItem>
                            <MenuItem value={'O+'}>O+</MenuItem>
                            <MenuItem value={'O-'}>O-</MenuItem>
                        </TextField>
                    </Stack>
                </Stack><br /><br />
                <Button variant="contained" onClick={handleAdd} sx={{ color: "#D30404", background: "#ffffff", position: "absolute", left: isMatchSm ? "3%" : "45%" }}><b>Donate Blood</b></Button>
            </Container>
        </>
    )
}

export default BloodFormByDoc