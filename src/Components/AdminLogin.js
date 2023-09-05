import {
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
    useTheme,
    useMediaQuery,
  } from "@mui/material";
  
  import { Container, Stack } from "@mui/system";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import Alert from '@mui/material/Alert';
  import axios from "axios";
  const AdminLogin = () => {
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
      name: "",
      password: "",
    });
   
    const theme = useTheme();
    const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    };
    const handleAdd = (e) => {
      if (user.name == "") {
        setHide(true);
        setMessage("Please Enter Your Name");
      } else if (user.password == "") {
        setHide(true);
        setMessage("Please Enter Your Password");
        } else {
          e.preventDefault();
          axios.post("http://localhost:5001/loginAdmin", {
            name: user.name,
            password: user.password,
          }).then((response) => {
            if (response.data.message) {
              alert("wrong password");
            } else {
              const userData = response.data;
              console.log(userData);
              
              window.location.href = "/adminPatientsList";
            }
          })
        setHide(false);
        user.name = "";
        user.password = "";
      }
    };
    return (
      <>
        {hide ?
          <Alert sx={{ width: "50vw", margin: "auto", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#FFCCCB", mt: "20px" }} severity="error">{message}</Alert> : null
        }
        <Container
          maxWidth="xxl"
          sx={{ mt: "100px", display: "flex", justifyContent: "center" }}
        >
          <Stack spacing={1}>
            <Typography
              variant="h3"
              sx={{ fontSize: isMatchSm ? "34px" : "48px" }}
              color="#002175"
              fontFamily="Poppins"
              textAlign="center"
            >
              <b>LOG IN</b>
            </Typography>
            <Typography
              sx={{ fontSize: isMatchSm ? "16px" : "25px" }}
              lineHeight="25px"
              fontFamily="Roboto"
              textAlign="center"
            >
              As a Admin
            </Typography>
            <Card
              sx={{
                background: "#FFFFFF",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                borderRadius: "36px",
                border: "1px solid black",
              }}
            >
              <CardContent sx={{ mt: "50px", mx: "10px" }}>
                <Stack spacing={2}>
                  <TextField
                    variant="standard"
                    label="Name"
                    sx={{ width: isMatchSm ? null : "355px" }}
                    value={user.name}
                    name="name"
                    autoComplete="false"
                    onChange={handleChange}
                  />
                  <TextField
                    variant="standard"
                    label="Password"
                    sx={{ width: isMatchSm ? null : "355px" }}
                    value={user.password}
                    name="password"
                    type="password"
                    onChange={handleChange}
                  />
                  <Stack direction="row">
                    <input type="checkbox" />
                    <Typography fontSize={isMatchSm ? "14px" : null}>
                      &nbsp;Remember me
                    </Typography>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Typography
                      sx={{ textDecoration: "underline" }}
                      color="primary"
                      fontSize={isMatchSm ? "14px" : null}
                    >
                      Forgot Password?
                    </Typography>
                  </Stack>
                </Stack>
  
                <br />
                <br />
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    position: isMatchSm ? null : "relative",
                    left: isMatchSm ? null : "38%",
                    background:
                      "linear-gradient(89.97deg, #002175 10.89%, #002175 156.51%)",
                    boxShadow: "0px 0px 19px rgba(217, 217, 217, 0.419884)",
                    borderRadius: "10px",
                    my: isMatchSm ? "0px" : "30px",
                  }}
                  onClick={handleAdd}
                >
                  <b>Log In</b>
                </Button>
              </CardContent>
            </Card>
          </Stack>
        </Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2}>
            <Typography
              textAlign="center"
              mt="10px"
              sx={{ textDecoration: "underline" }}
              color="red"
            >
              Did'nt have an account
            </Typography>
  
            {" "}
            <Link style={{ textDecoration: "none" }} to="/psign">
              <Button
                variant="contained"
                sx={{
                  background: "#FFFFFF",
                  color: "#000000",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "8px",
                  textDecoration: "none",
                }}
              >
                Sign Up As Patient
              </Button>
            </Link>
          </Stack>
        </div>
      </>
    );
  };
  
  export default AdminLogin;
  