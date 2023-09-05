import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <>
    <Container maxWidth="xxl" sx={{background: "#1769aa",py:"30px",
     position:"fixed",
     bottom:0,
     
}}>
    <Typography textAlign="center" variant="subtitle1" color="white">Copyright © 2023. All Rights Reserved !E-Care</Typography>
    </Container>
    </>
  )
}

export default Footer