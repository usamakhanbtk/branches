import React, { useState ,useEffect} from 'react';
import {
    Typography, Stack, Button, useTheme,
    useMediaQuery,
    MenuItem,
    TextField,
} from '@mui/material';
import { Container } from '@mui/system'
import HeaderPatient from '../HeaderPatient';
import Alert from '@mui/material/Alert';
import SideBar from '../Sidebar';
import Axios from 'axios';
const Aid = () => {
    const [totalD,setTotalD] = useState([]);
    const curA = React.useRef();
    const [hide, setHide] = useState(false);
    const [message, setMessage] = useState("");
    const [user, setUser] = useState({
        name: "",
        p_id: "",
        phone: "",
        cnic: "",
        gender: "",
        city: "",
        country: "",
        email: "",
        ammount: 0,
        age: "",
    });
    const storedObject = JSON.parse(localStorage.getItem("UsersData"));
    useEffect(()=>{
        setUser(user => ({ ...user, name: storedObject[0].name }));
            setUser(user => ({ ...user, p_id: storedObject[0].p_id }));
            setUser(user => ({ ...user, city: storedObject[0].city }));
            setUser(user => ({ ...user, phone: storedObject[0].phone }));
            setUser(user => ({ ...user, cnic: storedObject[0].cnic }));
            setUser(user => ({ ...user, gender: storedObject[0].gender }));
            setUser(user => ({ ...user, email: storedObject[0].email }));
    },[])
    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(
                'http://localhost:5001/getTotalDonations',
            );

            curA.current = result.data;
        };

        fetchData();
        
    }, []);
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
        else if (user.ammount == 0) {
            setHide(true);
            setMessage("Please Enter Your Blood Group");
        }
        else if (user.age == "") {
            setHide(true);
            setMessage("Please Enter Your Age");
        }
        
        else {
            const total = curA.current[0].ammount + parseInt(user.ammount);
            console.log(curA.current[0].ammount,parseInt(user.ammount));
            console.log(user);
            setHide(false);
            Axios.put("http://localhost:5001/TotalDonations",{
                id:user.p_id,
                name:user.name,
                gender:user.gender,
                email:user.email,
                phone:user.phone,
                country:user.country,
                city:user.city,
                cnic:user.cnic,
                age:user.age,
                ammount:total
               }).then((responce)=>{
                if(responce.data.message){
                alert(responce.data.message);
              }
                else{
                  alert("submitted succesfully")
                }
               })
           
        }
        aidList()
       
    }
    const aidList = () =>{
        
        Axios.post("http://localhost:5001/aid",{
            id:user.p_id,
            name:user.name,
            gender:user.gender,
            email:user.email,
            phone:user.phone,
            country:user.country,
            city:user.city,
            cnic:user.cnic,
            age:user.age,
            ammount:parseInt(user.ammount)
           }).then((responce)=>{
            if(responce.data.message){
            alert(responce.data.message);
          }
            else{
              alert("submitted succesfully")
            }
           })
           console.log("hello");
           window.location.reload(false);
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
                    <Typography variant={isMatchSm ? "h4" : "h3"} color="#002175"><b>Give Charity</b></Typography>
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
                            value={user.ammount} onChange={handleChange}
                            variant="outlined"
                            label="Total Ammount"
                            name="ammount"
                            type="number"
                            sx={{ width: "100%" }}
                          

                        />
                          
                    </Stack>
                </Stack><br /><br />
                <Button variant="contained" onClick={handleAdd} sx={{ color: "green", background: "#ffffff", position: "absolute", left: isMatchSm ? "3%" : "45%" }}><b>Donate Money</b></Button>
            </Container>
        </>
    )
}

export default Aid