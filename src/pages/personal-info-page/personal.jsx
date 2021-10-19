import React,{useState,useRef,useEffect} from 'react';
import './personal.css';
import { Container, CssBaseline, Typography, Grid, Button, TextField } from '@mui/material';
import svg1 from './svg_art.svg';
const PersonalInfoPage = () => {
    const [page, setPage]=useState(1);
    
    function ProfileData() {
        const [firstName,setFirstName]=useState(null);
        const [lastName,setLastName]=useState(null);
        const [college,setCollege]=useState(null);
        const [degree,setDegree]=useState(null);
        const [DOB,setDOB]=useState(null);
    
        function getFirstName(event){
            setFirstName(event.target.value);
    
        }
    
        function getLastName(event){
            setLastName(event.target.value);
    
        }
        function getCollege(event){
            setCollege(event.target.value);
    
        }
        function getDegree(event){
            setDegree(event.target.value);
    
        }
        function getDOB(event){
            setDOB(event.target.value);
    
        }
        function displayData(){
            console.log(firstName);
            console.log(lastName);
            console.log(college);
            console.log(degree);
            console.log(DOB);
        }
        function nextPage(){
            setPage(page=>page+1);
            displayData();
        }
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
                                    <TextField fullWidth label="First Name" onChange={getFirstName} InputLabelProps={{ shrink: true }}placeholder='First Name' variant="outlined" />
                                </Grid>


                                <Grid item xs={6} md={6}>
                                    <TextField fullWidth label="Last Name" onChange={getLastName} InputLabelProps={{ shrink: true }} placeholder='Last Name'variant="outlined" />
                                </Grid> 


                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth label="College" onChange={getCollege} InputLabelProps={{ shrink: true }} placeholder='College' variant="outlined" />
                                </Grid>


                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth label="Degree" onChange={getDegree} InputLabelProps={{ shrink: true }} placeholder='Degree' variant="outlined" />
                                </Grid>


                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth type='date' onChange={getDOB} label="Date of Birth" InputLabelProps={{ shrink: true }} variant="outlined" />
                                </Grid>


                                <Grid item xs={12} md={12} xl={12} align='center'>
                                    <Button variant='contained' size='large' onClick={nextPage} style={{backgroundColor: '#A405DC',marginBottom:10 ,color: '#FFFFFF', borderRadius: "0.7em"}}>Next</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            </>
        )
    }    

    function ProfilePhoto() {
        function prevPage(){
            setPage(page=>page-1);
        }
        const fileInputRef=useRef(null);
        const [preview, setPreview]=useState(null);
        const [image, setImage]=useState(null);

        useEffect(()=>{
            if(image){
                const reader =new FileReader();
                reader.onloadend=()=>{
                    setPreview(reader.result);
                }
                reader.readAsDataURL(image);
            }
            else{
                setPreview(null);
            }
        },[image]);
        return (
            <>
            <CssBaseline/>
            <Container maxWidth='md'>

                <Typography align='center' variant='h2' style={{color:'#A405DC',fontWeight:'600',marginTop:100}}>Lakshya</Typography>
                <Typography variant='h2' fontWeight='400' align='center'>Finish your Account Setup</Typography>
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
                                <Grid item xs={12} md={12} xl={12} align='center'>
                                    <Container>
                                        {preview?<img src={preview}></img>:
                                            <Button onClick={(event)=>{
                                                    event.preventDefault();
                                                    fileInputRef.current.click();
                                                    }}>Add Profile Photo
                                                </Button>}
                                            <input
                                                type="file"
                                                style={{display:'none'}}
                                                ref={fileInputRef}
                                                accept="image/*"
                                                onChange={(event)=>{
                                                    const file=event.target.files[0];
                                                    if(file){
                                                        setImage(file);
                                                    }
                                                    else{
                                                        setImage(null);
                                                    }
                                                }}
                                                >
                                            </input>
                                     </Container>
                                </Grid>


                                <Grid item xs={6} md={6} xl={6} align='center'>
                                    <Button variant='contained' size='large' onClick={prevPage} style={{backgroundColor: '#F44336',marginBottom:10 ,color: '#FFFFFF', borderRadius: "0.7em"}}>Back</Button>
                                </Grid>


                                <Grid item xs={6} md={6} xl={6} align='center'>
                                    <Button variant='contained' size='large' style={{backgroundColor: '#A405DC',marginBottom:10 ,color: '#FFFFFF', borderRadius: "0.7em"}}>Submit</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
            </>
        )
    }

    return (
        <>
        {page === 1 && <ProfileData></ProfileData>}
        {page === 2 && <ProfilePhoto></ProfilePhoto>}
        </>
    );
}

export default PersonalInfoPage;