import React, { useState } from "react";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import Patient from "./images/pSignup.png";
import { Box, Stack } from "@mui/system";
import { useFormik } from "formik";
import { SchemasP } from "./SchemasP";
import Axios from "axios";
const SignUpPatient = () => {
  const [agreement, setAgreement] = useState(false);
  const initialValues = {
    name: "",
    gender: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    cnic: "",
  };
  const Cities = ['Faislabad','Lahore','Multan','Karachi','Queeta','Sialkot','Islamabad'];
  const onSubmitHandler = (e) => {
    console.log(e);
   Axios.post("http://localhost:5001/registerPatient",{
    name:e.name,
    gender:e.gender,
    email:e.email,
    phone:e.phone,
    password:e.password,
    city:e.city,
    cnic:e.cnic
   }).then((responce)=>{
    if(responce.data.message){
    alert(responce.data.message);
  }
    else{
      alert("account created succesfully");
      resetForm();
    }
   })
  }
  const { errors, handleBlur, handleChange, handleSubmit, values, touched,resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SchemasP,

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
            As a Patient
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
              Create Account with new branch
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUpPatient;
