import React from 'react';
import './personal.css';
import { Container, CssBaseline, Typography, Grid, Item, Button, TextField } from '@mui/material';
import svg1 from './svg_art.svg';

const PersonalInfoPage = () => {
    return (
        <>
        <CssBaseline/>
        <Container maxWidth='md'>
            <Typography align='center' variant='h2' style={{color:'#A405DC',fontWeight:'600',marginTop:100}}>Lakshya</Typography>
            <Typography variant='h2' fontWeight='400' align='center'>Complete your Account Setup</Typography>
            <Typography variant='h6' fontWeight='400' align='center'>We will never share your personal information</Typography>

        </Container>
        <Container>
            <Grid container>
                <Grid item align='center' xs={12} md={6} xl={6}>
                    <img src={svg1} style={{marginLeft:30}} alt="SVG"></img>
                </Grid>
                <Grid item xs={12} md={6} xl={6}>
                    <Container style={{marginTop:30}}>
                        <Grid container spacing='30'>
                            <Grid item xs={6} md={6}>
                                <TextField fullWidth label="First Name" InputLabelProps={{ shrink: true }}placeholder='First Name' variant="outlined" />
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <TextField fullWidth label="Last Name" InputLabelProps={{ shrink: true }} placeholder='Last Name'variant="outlined" />
                            </Grid> 
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField fullWidth label="Email" InputLabelProps={{ shrink: true }} placeholder='Email' variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField fullWidth label="College" InputLabelProps={{ shrink: true }} placeholder='College' variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField fullWidth label="Degree" InputLabelProps={{ shrink: true }} placeholder='Degree' variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField fullWidth type='date' label="Date of Birth" InputLabelProps={{ shrink: true }} variant="outlined" />
                            </Grid>
                            <Grid item xs={12} md={12} xl={12} align='center'>
                                <Button variant='contained' size='large' style={{backgroundColor: '#A405DC',marginBottom:10 ,color: '#FFFFFF', borderRadius: "0.7em"}}>Next</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>
                
            </Grid>
        </Container>
        </>
    );
}

export default PersonalInfoPage;
