import React, { useState} from 'react';
import SideBar from '../../Sidebar';
import HeaderPatient from '../../HeaderPatient';
import { Card, CardContent, Typography, Stack, Button, TextField, MenuItem } from '@mui/material';
import { Container } from '@mui/system';
import Alert from '@mui/material/Alert';
import DietPlanner from './DietPlanner';
const BmrCalc = () => {
    const [p,setP] = useState();
    const [route, setRoute] = useState(true);
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState("");
    const [calculateAmr, setCalculateAmr] = useState();
    const [bmr, setBmr] = useState({
        age: null,
        weight: null,
        height: null,
        gender: "",
        exercise: 0
    })
    const handleBmr = e => {
        if (bmr.age === null || bmr.weight === null || bmr.weight === null || bmr.gender == "" || bmr.exercise == 0) {
            setHide(true);
            setMessage("Please Enter Required Credentials");
        } else if (bmr.age < 0 || bmr.weight < 0 || bmr.height < 0) {
            setHide(true);
            setMessage("Credentials can't be negative");
        }else if (bmr.age>100 || bmr.wight>500 || bmr.height>300){
            setHide(true);
            setMessage("Kindly Enter Correct Details");
        }
        else {
            setHide(false);
            if (bmr.gender == 1) {
                const cal = 10 * bmr.weight + 6.25 * bmr.height - 5 * bmr.age + 5;
                const temp = bmr.weight;
                const a = temp * 0.8;
                setP(a)
                handleAmr(cal);
            }
            else if (bmr.gender == 2) {
                const cal = 10 * bmr.weight + 6.25 * bmr.height - 5 * bmr.age - 161;
                const temp = bmr.weight;
                const a = temp * 0.8;
                setP(a)
                handleAmr(cal);
            }
        }
    }
    const handleAmr = e => {
        if (bmr.exercise === 1) {
            setCalculateAmr(e * 1.2);
        }
        else if (bmr.exercise === 2) {
            setCalculateAmr(e * 1.375);
        }
        else if (bmr.exercise === 3) {
            setCalculateAmr(e * 1.55);
        }
        else if (bmr.exercise === 4) {
            setCalculateAmr(e * 1.725);
        }
        else if (bmr.exercise === 5) {
            setCalculateAmr(e * 1.9);
        }
       
        setRoute(false);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBmr({
            ...bmr,
            [name]: value,
        });
    };
    return (
        <>
            <SideBar />
            <HeaderPatient />

            {hide ?
                <Alert sx={{ width: "50vw", margin: "auto", height: "10vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#FFCCCB", mt: "20px" }} severity="error">{message}</Alert> : null
            }
            {route ?
                <Container maxWidth="sm">
                    <Card>
                        <CardContent>
                            <Stack spacing={3}>
                                <Typography variant="h4" ><b><u>Count Your Calories</u></b></Typography>
                                <Stack direction="row" spacing={4}>
                                    <Typography variant='h6'><b>Gender</b></Typography>
                                    <input name="gender" value="1" id="18" onChange={handleChange} type="radio" />&nbsp;Male
                                    <input name="gender" value="2" id="bel" onChange={handleChange} type="radio" />&nbsp;Female
                                </Stack>
                                <Stack direction="row" >
                                    <Typography variant='h6' paddingRight="50px"><b>Age:</b></Typography>
                                    <TextField name="age" type="number" value={bmr.age} onChange={handleChange} label="years" variant='outlined' />
                                </Stack>
                                <Stack direction="row" >
                                    <Typography variant='h6' paddingRight="20px"><b>Weight:</b></Typography>
                                    <TextField name="weight" type="number" value={bmr.weight} onChange={handleChange} label="kg" variant='outlined' />
                                </Stack>
                                <Stack direction="row" >
                                    <Typography variant='h6' paddingRight="24px"><b>Height:</b></Typography>
                                    <TextField name="height" type="number" value={bmr.height} onChange={handleChange} label="cm" variant='outlined' />
                                </Stack>
                                <TextField name="exercise" value={bmr.exercise} onChange={handleChange} label="How Much Exercise You Do In a Week" select>
                                    <MenuItem value={1}>Sedentary (little or no exercise)</MenuItem>
                                    <MenuItem value={2}>Lightly active (exercise 1-3 days/week)</MenuItem>
                                    <MenuItem value={3}>Moderately active (exercise 3-5 days/week)</MenuItem>
                                    <MenuItem value={4}>Active (exercise 6-7 days/week)</MenuItem>
                                    <MenuItem value={5}>Very active (exercise 6-7 days/week)</MenuItem>
                                </TextField>
                            </Stack><br />
                            <Button variant="contained" size='medium' type="submit" onClick={handleBmr}>calculate</Button>
                        </CardContent>
                    </Card>
                </Container> :
                <DietPlanner amr={calculateAmr} protien={p} />}
        </>
    )
}

export default BmrCalc