import { Button, Grid, TextField, Typography ,useTheme,useMediaQuery} from '@mui/material'
import { Container } from '@mui/system'
import React,{useState} from 'react'
import Office from '../images/office.jpg'
import {Stack} from '@mui/system'
import Alert from '@mui/material/Alert';
const ContactForm = () => {
    const [show,setShow ]= useState(false)
    const [hide,setHide]=useState(false);
  const [message,setMessage] = useState("");
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email:"",
    query:""
  });
  const myTimeout1 = setTimeout(alerts1, 8000);
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
    if (user.name == "") {
      setHide(true);
      setMessage("Please Enter Your Name");
    } else if (user.phone == "") {
      setHide(true);
      setMessage("Please Enter Your Phone Number");
    }else if (user.email == "") {
        setHide(true);
        setMessage("Please Enter Your Email");
      }else if (user.query == "") {
        setHide(true);
        setMessage("Please Enter Your Query");
      } else {
      console.log(user);
      setHide(false);
      setShow(true);
      setUser({
        name:"",
        phone:"",
        email:"",
        query:""
      })
    }
  };
    const theme = useTheme();
    const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
    {hide?
    <Alert sx={{width:"100vw",margin:"auto",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#FFCCCB",mt:"20px"}} severity="error">{message}</Alert>:null
}
{show?
    <Alert sx={{width:"100vw",margin:"auto",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",background:"#2cc501",mt:"20px"}} severity="success">Submit Succesfully</Alert>:null
}
    <Container  maxWidth="xxl" sx={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) ),url(${Office})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            
            }}>
                <Container maxWidth="lg" sx={{py:"100px",color:"white"}}>
                    <Grid container>
                        <Grid item sm={12} lg={6}>
                            <Typography variant={isMatchMD?"h5":"h3"}>
                                <strong>Request For Our  <br/> <span style={{color:"#2cc501"}}>Services</span></strong>
                            </Typography><br />
                            <Typography fontSize={isMatchMD?14:22} mb={isMatchMD?"16px":null}>
                            Starting a business right now? We can <br />help you set up your business website
                            </Typography>
                        </Grid>
                        <Grid item sm={12} lg={6}>
                    
                            <Stack spacing={2}>
                            <TextField  value={user.name}
                  name="name"
                  onChange={handleChange}
                   sx={{background:"white",width:isMatchSM?"80vw":null}} variant="outlined" placeholder='Name'/>
                            <TextField  value={user.phone}
                  name="phone"
                  onChange={handleChange}
                   sx={{background:"white"}} variant="outlined" placeholder='Phone'/>
                            <TextField sx={{background:"white"}}  value={user.email}
                  name="email"
                  onChange={handleChange}
                   variant="outlined" placeholder='Email'/>
                            <TextField sx={{background:"white"}} variant="outlined"  value={user.query}
                  name="query"
                  onChange={handleChange}
                   placeholder='Your Message' multiline
  rows={2}
  maxRows={4}/>
                            </Stack><br />
                            <Button type="submit" onClick={handleAdd} variant="contained" sx={{backgroundColor:"#2cc501"}} size="large">Submit Request</Button>
                            
                        </Grid>
                    </Grid>
                </Container>
    </Container>
    </>
  )
}

export default ContactForm