import React, { useState } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import Axios from 'axios';
import Patient from "./images/dSignup.png";
import { Box, Stack } from "@mui/system";
import { useFormik } from "formik";
import { SchemasD } from "./SchemasD";
import Catogories from '../doctorsQualification.json';
const SignUpDoctor = () => {
  const [agreement, setAgreement] = useState(false);
  const [am, setAm] = useState("am");
  const [pm, setPm] = useState("pm");
  const Cities = ['Faislabad','Lahore','Multan','Karachi','Queeta','Sialkot','Islamabad'];
  const slots = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  const initialValues = {
    name: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    cnic: "",
    qualification: "",
    opening:"",
    closing:""
  };
  const emailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com','icloud.com','protonmail.com'];
  const onSubmitHandler = (e) => {
    console.log(e);
    const inputEmail = e.email;
    const [username, domain] = inputEmail.split('@');
    console.log(domain);
if (emailDomains.includes(domain)) {
      if(e.opening>= e.closing){
        alert("Kindly Enter Correct Time Slots")
      }else{
      Axios.post("http://localhost:5001/registerDoctor",{
        name:e.name,
        gender:e.gender,
        email:e.email,
        phone:e.phone,
        password:e.password,
        city:e.city,
        cnic:e.cnic,
        qualification:e.qualification,
        opening:e.opening,
        closing:e.closing
       }).then((responce)=>{
        if(responce.data.message){
        alert(responce.data.message);
      }
        else{
          alert("account created succesfully")
        }
       })}
    } else{
      alert("Email Format is not Valid");
}
  }
  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SchemasD,

      onSubmit: onSubmitHandler
    });
  const theme = useTheme();
  const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
    
      <Grid container sx={{ mt: isMatchSm ? null : "80px" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src={Patient}
            sx={{ height: isMatchSm ? null : "500px" }}
            alt="logo"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Typography
            variant="h3"
            sx={{ fontSize: isMatchSm ? "30px" : "48px" }}
            color="#002175"
          >
            <b>Sign Up</b>
          </Typography>
          <Typography
            sx={{ fontSize: isMatchSm ? "20px" : "25px" }}
            lineHeight="25px"
            fontFamily="Roboto"
          >
            As a Doctor
          </Typography>
          <br></br>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                variant="standard"
                label="Name"
                sx={{ width: isMatchSm ? null : "80%" }}
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                
              />
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="standard"
                  label="Gender"
                  sx={{ width: isMatchSm ? null : "20%" }}
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.gender && Boolean(errors.gender)}
                  helperText={touched.gender && errors.gender}
                  select
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            
                  </TextField>
                <TextField
                  variant="standard"
                  label="CNIC No"
                  sx={{ width: isMatchSm ? null : "59%" }}
                  name="cnic"
                  value={values.cnic}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.cnic && Boolean(errors.cnic)}
                  helperText={touched.cnic && errors.cnic}
                  
                />
              </Stack>
              <Stack direction="row" spacing={1}>
                <TextField
                  variant="standard"
                  type="number"
                  label="Phone No"
                  sx={{ width: isMatchSm ? null : "40%" }}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <TextField
                  variant="standard"
                  label="City"
                  sx={{ width: isMatchSm ? null : "39%" }}
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                  select
                >
                  {
                    Cities.map((city)=>{
                      return(
                        <MenuItem value={city}>
                         {city}
                        </MenuItem>
                      )
                    })
                  }
                  
                  </TextField>
              </Stack>
              <Stack direction="row" spacing={1}>
              <TextField
                  variant="standard"
                  label="Available Time(open)"
                  sx={{ width: isMatchSm ? null : "39%" }}
                  name="opening"
                  value={values.opening}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.opening && Boolean(errors.opening)}
                  helperText={touched.opening && errors.opening}
                  select
                >
                  {
                    slots.map((city)=>{
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
                <TextField
                  variant="standard"
                  label="Available Time(close)"
                  sx={{ width: isMatchSm ? null : "39%" }}
                  name="closing"
                  value={values.closing}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.closing && Boolean(errors.closing)}
                  helperText={touched.closing && errors.closing}
                  select
                >
                  {
                    slots.map((city)=>{
                      return(
                        <MenuItem value={city}>
                       { city>12?<>
                        {city} &nbsp;
                        <Typography>pm</Typography>
                        </>:<>{city} &nbsp;am</>}
                        </MenuItem>
                      )
                    })
                  }
                  
                  </TextField>
              </Stack>
              <TextField
                variant="standard"
                label="Email Address"
                sx={{ width: isMatchSm ? null : "80%" }}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                type="password"
                variant="standard"
                label="Type Password"
                sx={{ width: isMatchSm ? null : "80%" }}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <TextField
                variant="standard"
                label="Type qualification"
                sx={{ width: isMatchSm ? null : "80%" }}
                name="qualification"
                value={values.qualification}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.qualification && Boolean(errors.qualification)}
                helperText={touched.qualification && errors.qualification}
                select
                >
                  {
                    Catogories.map((catogory)=>{
                      return(
                        <MenuItem value={catogory.name}>
                        {catogory.name}
                        </MenuItem>
                      )
                    })
                  }
                  
                  </TextField>
              <Stack direction="row" spacing={1}>
                <input
                  type="checkbox"
                  onClick={() => setAgreement(!agreement)}
                />
                <Typography
                  variant="body1"
                  sx={{ fontSize: isMatchSm ? 10 : null }}
                >
                  I Agreed to the term and condition applied
                </Typography><br />
              </Stack>
            </Stack>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background:
                  "linear-gradient(89.97deg, #002175 10.89%, #002175 156.51%)",
                boxShadow: "0px -266px 19px rgba(217, 217, 217, 0.419884)",
                borderRadius: "26px",
                ml: isMatchSm ? null : "30%",
                width: isMatchSm ? null : "206px",
                height: isMatchSm ? null : "52px",
              }}
            >
              Create Account
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpDoctor;
