import { Container, Stack } from '@mui/system'
import {
    Button, Grid, TextField, Typography, useTheme,
    useMediaQuery,
} from '@mui/material'
import {Link} from 'react-router-dom';
import React from 'react'

const Footer = () => {
    const theme = useTheme();
    const isMatchSm = useMediaQuery(theme.breakpoints.down("sm"));
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Container maxWidth="xxl" sx={{ background: "rgba(0, 33, 117, 0.16)" }}>
                <Grid container sx={{ py: "50px" }}>
                    <Grid item xs={12} sm={3} lg={3} sx={{ display: "flex", justifyContent: isMatchSm ? "start" : "center", my: isMatchSm ? "20px" : null }}>
                        <Stack direction="column" spacing={1}>
                            <Typography sx={{ textDecoration: 'underline' }} color="#2D2E2E"><b>About</b></Typography>
                            <Typography color="#2D2E2E"><b>Our Story</b></Typography>
                            <Typography color="#2D2E2E"><b>Benefits</b></Typography>
                            <Typography color="#2D2E2E"><b>Team</b></Typography>
                            <Typography color="#2D2E2E"><b>Career</b></Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={3} lg={3} sx={{ display: "flex", justifyContent: isMatchSm ? "start" : "center", my: isMatchSm ? "20px" : null }}>
                        <Stack direction="column" spacing={1}>
                            <Typography sx={{ textDecoration: 'underline' }} color="#2D2E2E"><b>Legal</b></Typography>
                            <Typography color="#2D2E2E"><b>Terms & Conditions</b></Typography>
                            <Typography color="#2D2E2E"><b>Privacy Policy</b></Typography>
                            <Typography color="#2D2E2E"><b>Terms of use</b></Typography>
                            
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6} sx={{ display: "flex", justifyContent: isMatchSm ? "center" : "start" }}>
                        <Stack spacing={2}>
                            <Typography sx={{ textDecoration: 'underline' }} color="#2D2E2E"><b>Subscribe Now</b></Typography>
                            <Stack direction="row" spacing={0}>
                                <TextField vairant="outlined" label="Enter Your Email Address" sx={{ backgroundColor: "#ffffff", width: isMatch? null : "390px" }}></TextField>
                                <Button variant="contained" sx={{ background: "#002175" }}>Subscribe</Button>
                            </Stack>
                            <Stack sx={{ display: "flex", justifyContent: "center" }} spacing={2} direction="row">

                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Footer