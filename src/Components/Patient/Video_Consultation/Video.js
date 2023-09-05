import React,{useState,useEffect} from 'react'
import Footer from '../Footer'
import HeaderPatient from '../HeaderPatient'
import Sidebar from '../Sidebar'
import axios from 'axios'
import Book from './Book';
import { Container } from '@mui/system';
import { Button, Typography, useTheme, useMediaQuery, Grid, Stack, Card, CardContent } from '@mui/material';
const Video = () => {
  const [DoctorList,setDoctorList]=useState([]);
  const [showBook,setShowBook] = useState(false);
  const [myDid, setMyDid] = useState(null);
  const [myPid, setMyPid] = useState(null);
  const [opening, setOpening] = useState(null);
  const [closing, setClosing] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5001/getDoctorData',
      );

      setDoctorList(result.data);
    };

    fetchData();
    console.log(DoctorList)
  }, []);
  const storedObject = JSON.parse(localStorage.getItem("UsersData"));
  const handleRoute = (e,open,close) =>{
    setMyPid(storedObject[0].p_id);
    setMyDid(e);
    console.log(myPid,myDid);
    setOpening(open);
    setClosing(close);
    console.log(opening,closing);
    setShowBook(true);
   
  }
  return (<>
  <Sidebar/>
    <HeaderPatient/>
    {showBook?<Book p_id={myPid} d_id = {myDid} opening={opening} closing={closing}/>:
    DoctorList.length > 0 && 
    <>
     <Container maxWidth="lg" sx={{ pb: "80px" }}>
               

                <Stack direction="row" justifyContent="space-evenly" sx={{ display: "flex", flexWrap: "wrap" }}>
                    {DoctorList.map((d) => {
                        return (
                            <>
                           
                                <Card sx={{ width: 340, my: "10px", borderRadius: "20px", boxShadow: 6 }}>
                                    <CardContent>
                                        <Typography variant="h5" color="#919191">{d.qualification}</Typography>
                                        <Typography variant="h6" color="#123453"><b>0{d.phone}</b></Typography>
                                        <Typography variant="body1">{d.city}</Typography>
                                        <Stack direction="row">
                                          <Typography variant="body1">
                                            {d.opening<12?
                                            <>
                                            {d.opening}am
                                            </>:
                                            <>
                                            {d.opening}pm
                                            </>
                                            }
                                            </Typography> - <Typography variant="body1">
                                            {d.closing<12?
                                            <>
                                            {d.closing}am
                                            </>:
                                            <>
                                            {d.closing}pm
                                            </>
                                            }
                                            </Typography>
                                        </Stack><br />
                                        <Button  variant="contained" onClick={()=>handleRoute(d.d_id,d.opening,d.closing)}  sx={{ backgroundColor: "#123453" }}>Book</Button>
                                    </CardContent>
                                </Card>
                            </>
                        )
                    })
                    }
                </Stack>

            </Container>
    </>
    }
    <Footer/>
    </>
  )
}

export default Video