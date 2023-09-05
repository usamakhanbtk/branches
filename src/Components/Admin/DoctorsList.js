import { Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import axios from "axios";
import {  Paper, Table, TableHead, TableContainer, TableRow, TableCell, TableBody,Button} from '@mui/material';
import { Container } from '@mui/system';
import Footer from './Footer';
import Header from './Header';
const DoctorsList = () => {
    const [DoctorList,setDoctorList]=useState([]);
    // useEffect(()=>{
    //    axios.get("http://localhost:5001/getPatientData")
    //    .then((response)=>{
    //     // console.log(response.data)
    //     const user = response;
    //     setPatientList(user);
    //     console.log(patientList);
    //    })
    // },[])
    
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
  const delD = (id) => {
    console.log("delete");
    axios.delete("http://localhost:5001/deletedoctors", {
        id: id
    }).then((res) => {
        if (res) {
            alert(res.data.message);
        } else {
            alert("account deleted succesfully")
        }
    })
    window.location.reload(false);
}
  return (
    <>
    <Header/>
     <Typography textAlign="center" variant="h4" my="24px" color="#1769aa"><strong>Doctors List</strong></Typography>
    {DoctorList.length>0 && 
   
   <Container maxWidth="lg" sx={{ textAlign: "center" }}>
   <TableContainer component={Paper}>
       <Table>
           <TableHead sx={{ background: "#1769aa" }}>
               <TableRow>
                   <TableCell><Typography color="white" variant="h6"><b>Doctor Name</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>Gender</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>Cnic</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>City</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>Email</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>Qualification</b></Typography></TableCell>
                   <TableCell><Typography color="white" variant="h6"><b>Remove1 Patient</b></Typography></TableCell>
               </TableRow>
           </TableHead>
           <TableBody>

               {DoctorList.map((p) => {
                   return (
                       <>
                           <TableRow>
                               <TableCell><Typography>{p.name}</Typography></TableCell>
                               <TableCell><Typography>{p.gender}</Typography></TableCell>
                               <TableCell><Typography>{p.cnic}</Typography></TableCell>
                               <TableCell><Typography>{p.city}</Typography></TableCell>
                               <TableCell><Typography>{p.email}</Typography></TableCell>
                                <TableCell><Typography>{p.qualification}</Typography></TableCell>
                                <TableCell><Typography><Button variant="contained" onClick={() => delD(p.p_id)} sx={{ background: "red" }}>Delete</Button></Typography></TableCell>
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

export default DoctorsList