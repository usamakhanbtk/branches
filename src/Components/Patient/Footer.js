import React,{useState} from 'react';
import {Container, Grid, TextField, Typography,Button, Avatar} from '@mui/material';
import { Stack } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
const pages=[{
    name:"Home",
    route:"/homep",
  },{
    name:"Video Consultation",
    route:"/video",
  },
  {
    name:"Aid/Charity",
    route:"/frontpageforaid",
  },
  {
    name:"Blood Donation",
    route:"/frontpageforblood",
  },
  {
    name:"Health Calculators",
    route:"/HMS",
  }, {
    name:"Contact Us",
    route:"/contactusbypatient",
  },
  {
    name:"Logout",
    route:"/",
  },
 
 
];
const pages2 = ['Privacy Policy', 'Terms & Conditions' , 'Partners'];
const Footer = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
    <Container maxWidth="xxl" sx={{background:"#1769aa",color:"white",mt:"20px"}}>
        <Container maxWidth="lg" sx={{py:"100px"}}> 
        <div className='margin'>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={3}>
                <Stack spacing={4}>
                    <Typography variant="h5"><b>E-Care</b></Typography>
                    <Typography variant="subtitle1">We strive to embrace and drive change in our industry which
                    allows us to keep our clients relevant.</Typography>
                </Stack>
            </Grid>
            <Grid item  xs={12} lg={3}>
                {
                    pages.map((page)=>{
                        return(<><Link to={page.route} style={{textDecoration:"none"}}>
                            <Button variant="text" sx={{color:"#fff"}}>{page.name}</Button>
                            </Link>
                            <br></br>
                            </>
                        )
                    })
                }
            </Grid>
           
            <Grid item  xs={12} lg={3}>
            {
                    pages2.map((page)=>{
                        return(<>
                            <Button variant="text" sx={{color:"#fff"}}>{page}</Button>
                            <br></br>
                            </>
                        )
                    })
                }
            </Grid>
            <Grid item xs={12} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <WhatsAppIcon/>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <Avatar src="https://scontent.flyp4-1.fna.fbcdn.net/v/t39.30808-6/283293809_2282412368579011_7393363407933315456_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wg6B7oOOgagAX_MLbHT&_nc_ht=scontent.flyp4-1.fna&oh=00_AT_63wByyncSAvLa_dr_i1Py4aISpappu8JMd4eaahYriw&oe=63423674"></Avatar>
                </Stack>
                <Button variant='contained'  onClick={handleOpen} sx={{background:"green",borderRadius:9}}>Contact Us</Button>
                </Stack>
            </Grid>
        </Grid><br></br><br></br>
        <hr size="1"></hr>
        <br></br><br></br>
        <Typography variant="h6" textAlign="center">E-Care@gmail.com</Typography>
        </div>  
        </Container>
    </Container>
    <Modal
              sx={{ borderRadius: 24 }}
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography><b>Our Phone:</b></Typography><Typography color="blue"> 03122610585</Typography><br />
                <Typography><b>Our Email:</b></Typography><Typography color="blue"> E-Care@gmail.com</Typography><br />
                <hr /><br />
                <Typography variant="h5"> Contact Us</Typography>
                <TextField variant="standard" sx={{ width: "100%" }} label="Your Name " /><br /><br />
                <TextField
                  sx={{ width: "100%" }}
                  placeholder="Your Comment"
                  multiline
                  rows={2}
                  maxRows={4}
                /><br /><br />
                <Button variant="contained">Submit</Button>
              </Box>
            </Modal>
    </>
  )
}

export default Footer