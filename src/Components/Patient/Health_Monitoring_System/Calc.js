import React, { useState } from "react";
import {
    Container, Box, Tabs, Tab, AppBar, Grid, Card, CardContent, TextField, Typography, Stack, Button, useTheme,
    useMediaQuery,
} from "@mui/material";
import Overweight from "../images/overweight.png";
import Healthy from "../images/healthy.png";
import Underweight from "../images/underweight.png";
import HeaderPatient from "../HeaderPatient";
import Alert from '@mui/material/Alert';
import Sidebar from "../Sidebar";
import {Link} from 'react-router-dom';
const Calc = () => {

    const [alertMessage, setAlertMessage] = useState("");
    const [hide, setHide] = useState(false);
    const [val, setVal] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [message, setMessage] = useState('');
    const [image, setImage] = useState(0);
    const theme = useTheme();
    const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
    const bmiCalc = () => {
        if (weight === 0) {
            setAlertMessage("Please Enter valid wieght")
            setHide(true)
        } else if (height === 0) {
            setAlertMessage("Please Enter valid height")
            setHide(true)
        }
        else if (height === 0 && weight === 0) {
            setAlertMessage("Please Enter valid height and weight")
            setHide(true)
        }
        else {
            const obj = (weight / (height * height) * 703);
            setBmi(obj.toFixed(1));
            if (obj < 18.5) {
                setMessage("You are under weight");
                setImage(Underweight);
            } else if (obj >= 18.5 && obj < 24.9) {
                setMessage("you are healthy weight")
                setImage(Healthy);
            } else if (obj >= 25 && obj < 29.9) {
                setMessage("you are over weight")
                setImage(Overweight);
            } else if (obj > 30) {
                setMessage("you are obese")
                setImage(Overweight);
            } else {
                setMessage("Error Input")
            }
        }
    }
    const handleChange = (e, val) => {
        console.warn(val);
        setVal(val);
    };


    return (
        <>


            <Sidebar />


            {hide ?
                <Alert sx={{ width: "90vw", margin: "auto", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#FFCCCB" }} severity="error">{alertMessage}
                    <Button onClick={() => setHide(false)}>Ok</Button>
                </Alert> : null

            }
            <HeaderPatient />
            <Container sx={{ background: "#ffffff", margin: "auto", display: "flex", justifyContent: "space-evenly", my: "40px" }} position="static">
                <Tabs sx={{ mx: "auto" }} value={val} onChange={handleChange}>
                    <Tab sx={{ color: "#000000" }} label="BMI" />
                    <Tab sx={{ color: "#000000" }} label="Health Tracker" />
                </Tabs>
            </Container>

            <TabPanel value={val} index={0}>

                <Card sx={{ width: isMatchSm ? null : "50vw", margin: "auto", mt: isMatchSm ? null : "20px" }}>
                    <CardContent>
                        <Typography variant="h5" color="#002EA4" textAlign="center">BMI Calculator</Typography>


                        <Stack>
                            <TextField
                                required
                                id="standard-required"
                                label="Your Age"

                                variant="standard"
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Weight(lbs)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                variant="standard"
                            />
                            <TextField
                                required
                                id="standard-required"
                                label="Height(in)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                variant="standard"
                            />
                            <br />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    background:
                                        "linear-gradient(89.97deg, #002175 10.89%, #002175 156.51%)",
                                    boxShadow: "0px 0px 19px rgba(217, 217, 217, 0.419884)",
                                    borderRadius: "26px",
                                    m: isMatchSm ? null : "auto",
                                    width: isMatchSm ? null : "206px",
                                    height: isMatchSm ? null : "52px",
                                }}
                                onClick={bmiCalc}
                            >
                                Submit
                            </Button><br />
                            <Typography variant="body1" color="#002EA4" textAlign="center">Your Bmi Is {bmi}</Typography>
                            <Typography variant="h6" color="#000000" textAlign="center">{message}</Typography>
                            {
                                image != 0 ? <img style={{ height: "200px", width: "200px", margin: "auto" }} src={image} /> : null
                            }

                        </Stack>
                    </CardContent>
                </Card>
            </TabPanel>
            <TabPanel value={val} index={1}>
                <Container sx={{display:"flex",justifyContent:"center"}}>
                    <Stack spacing={2}>
                    <Typography variant="h4">
                       <b> Whats Your Goal...?</b>
                    </Typography><br />
                    <Link to="/bmr" style={{textDecoration:"none"}}><Button variant="contained" sx={{background:"grey",fontWeight:"bold",width:"300px"}}>Maintain Weight</Button></Link>
                    <Link to="/bmr" style={{textDecoration:"none"}}><Button variant="contained" sx={{background:"grey",fontWeight:"bold",width:"300px"}}>Weight Loss</Button></Link>
                    </Stack>
                </Container>
            </TabPanel>
        </>
    );
};

function TabPanel(props) {
    return <div>{props.value == props.index && props.children}</div>;
}

export default Calc
