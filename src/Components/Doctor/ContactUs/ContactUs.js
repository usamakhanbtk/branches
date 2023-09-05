
import Footer from '../Footer';
import HeaderPatient from '../HeaderDoc';
import Sidebar from '../Navbar';
import React, { useState, useEffect } from 'react'
import { Container } from '@mui/system';
import { Button, Typography, useTheme, useMediaQuery, Grid, Stack, Card, CardContent, TextField, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Axios from 'axios';
const ContactUs = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
      const [hide, setHide] = useState(false);
      const [show, setShow] = useState(false);
      const [message, setMessage] = useState("");
      const [user, setUser] = useState({
        p_id:null,
        name: "",
        phone: "",
        email: "",
        query: ""
      });
      const storedObject = JSON.parse(localStorage.getItem("UsersData"));
      useEffect(()=>{
          setUser(user => ({ ...user, name: storedObject[0].name }));
              setUser(user => ({ ...user, p_id: storedObject[0].d_id }));
              setUser(user => ({ ...user, phone: storedObject[0].phone }));
              setUser(user => ({ ...user, email: storedObject[0].email }));
      },[])
      const myTimeout1 = setTimeout(alerts1, 5000);
      const myTimeout2 = setTimeout(alerts2, 8000);
      function alerts1() {
        setHide(false);
    
      }
      function alerts2() {
    
        setShow(false);
      }
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      };
      const handleAdd = () => {
          if (user.query == "") {
          setHide(true);
          setMessage("Please Enter Your Query");
        } else {
          console.log(user);
          setHide(false);
          setShow(true);
          Axios.post("http://localhost:5001/contactUs",{
            id:user.p_id,
            name:user.name,
           
            email:user.email,
            phone:user.phone,
           
            message:user.query
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
      const theme = useTheme();
      const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
      const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    <Sidebar/>
    <HeaderPatient/>
    <Container maxWidth="lg" sx={{ my: "100px" }}>
        <Grid container>
          <Grid item md={12} sm={12} lg={6} >
            <Typography variant={isMatchSM ? "h4" : "h2"} textAlign={isMatchSM ? "center" : null} mb="40px" color="#818282" ml={isMatchSM ? "80px" : null}><strong>Get in</strong><strong> <span style={{ color: "#274a9a" }}>Touch</span></strong></Typography>
            <Stack spacing={2} >            <Stack direction={isMatchSM ? "column" : "row"} spacing={isMatchSM ? 2 : 4} sx={{ display: "flex", flexWrap: "wrap" }}>
              <Stack spacing={1}>
                <Stack spacing={2} direction="row">
                  <LocationOnIcon />
                  <Typography color="#274a9a" variant="h5"><strong>Address</strong></Typography>
                </Stack>
                <Typography variant="subtitle1">House No 170 C2<br /> Punjab Housing Society<br /> Faisalabad</Typography>
              </Stack>
              <Stack spacing={1}>
                <Stack spacing={2} direction="row">
                  <EmailIcon />
                  <Typography color="#274a9a" variant="h5"><strong>Email</strong></Typography>
                </Stack>
                <Typography variant="subtitle1">E-Care@gmail.com</Typography>
              </Stack>

            </Stack>
              <Stack spacing={1}>
                <Stack spacing={2} direction="row">
                  <PhoneIcon />
                  <Typography color="#274a9a" variant="h5" ><strong>Phone</strong></Typography>
                </Stack>
                <Typography variant="subtitle1" >+923122610585</Typography>
              </Stack>
            </Stack>
            {isMatchSM ? <br /> : null}
          </Grid>
          <Grid item md={12} sm={12} lg={6}>
            <Card sx={{ p: "20px", boxShadow: 8 }} id="contactus">
              <CardContent>
                <Typography variant="h6">
                  <strong>                You can give us a call, send us an email, or walk into our office.</strong>

                </Typography><br />

                <Stack spacing={2}>
                 <TextField label="Name" name="name" value={storedObject[0].name}  sx={{ width: "100%" }} disabled/>
                 <TextField label="Phone" name="phone" value={storedObject[0].phone}  sx={{ width: "100%" }} disabled/>
                 <TextField label="Email" name="email" value={storedObject[0].email}  sx={{ width: "100%" }} disabled/>
                  <TextField value={user.query}
                    name="query"
                    onChange={handleChange} sx={{ background: "white" }} variant="outlined" placeholder='How can we help you!' multiline
                    rows={2}
                    maxRows={4} required />
                </Stack><br />
                <Button onClick={handleAdd} type="submit" variant="contained" sx={{ float: "right" }}>Send Request</Button>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    <Footer/>
    </>
  )
}

export default ContactUs