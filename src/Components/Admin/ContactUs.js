import React,{useState,useEffect} from 'react'
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { Paper, Table, TableHead, TableContainer, Typography,TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Container } from '@mui/system';
const ContactUs = () => {
    const [cList, setCList] = useState([]);
   
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:5001/getContactUs',
            );

            setCList(result.data);
        };

        fetchData();
        console.log(cList)
    }, []);
  return (
    <>
    <Header/>
    {cList.length > 0 &&
    <Container maxWidth="lg" sx={{ textAlign: "center" ,mt:"80px"}}>
    <TableContainer component={Paper}>
        <Table>
            <TableHead sx={{ background: "#1769aa" }}>
                <TableRow>
                    <TableCell><Typography color="white" variant="h6"><b>User id</b></Typography></TableCell>
                    <TableCell><Typography color="white" variant="h6"><b>Name</b></Typography></TableCell>
                    <TableCell><Typography color="white" variant="h6"><b>Phone</b></Typography></TableCell>
                    <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                    <TableCell><Typography color="white" variant="h6"><b>Message</b></Typography></TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>

                {cList.map((p) => {
                    return (
                        <>
                            <TableRow>
                                <TableCell><Typography>{p.id}</Typography></TableCell>
                                <TableCell><Typography>{p.name}</Typography></TableCell>
                                <TableCell><Typography>{p.phone}</Typography></TableCell>
                                <TableCell><Typography>{p.email}</Typography></TableCell>
                                <TableCell><Typography>{p.message}</Typography></TableCell>
                                
                            </TableRow>
                        </>
                    )
                })}

            </TableBody>

        </Table>
    </TableContainer><br />

</Container>
    }
    <Footer/>
    </>
  )
}

export default ContactUs