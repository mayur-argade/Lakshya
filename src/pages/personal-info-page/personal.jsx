import React,{useState,useEffect} from 'react';
import './personal.css';
import { Container, CssBaseline, Typography, Grid, Button, TextField} from '@mui/material';
import svg1 from '../../images/Hi.gif';
import { getAuth} from "firebase/auth";
import placeholder from '../../images/profilePlaceholder.png';
import { Link } from 'react-router-dom';
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"; 
import { getStorage,ref,uploadBytes } from "firebase/storage";


const firebaseApp =initializeApp( {
    apiKey: "AIzaSyB_WUrPgGWZA-DqMHP_k2m95Q8sOGhPQVc",
    authDomain: "lakshya-9576f.firebaseapp.com",
    projectId: "lakshya-9576f",
    storageBucket: "lakshya-9576f.appspot.com",
    messagingSenderId: "202043244759",
    appId: "1:202043244759:web:2c67cd21e9dd7923077092",
    measurementId: "G-NM1YQKJ1VN"
  });

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();
const PersonalInfoPage = () => {
    const [page, setPage]=useState(1);
    
    function ProfileData() {
        const [firstName,setFirstName]=useState(null);
        const [lastName,setLastName]=useState(null);
        const [college,setCollege]=useState(null);
        const [degree,setDegree]=useState(null);
        const [DOB,setDOB]=useState(null);
        
        async function setUserData(){
            const uid=auth.currentUser.uid;
        await setDoc(doc(db, "users",uid.toString()),{
            first_name:firstName.toString(),
            last_name:lastName.toString(),
            college:college.toString(),
            degree:degree.toString(),
            date_of_birth:DOB.toString(),
        });
    }
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
            setUserData();
            setPage(page=>page+1);
            displayData();
        }
        return (
            <>
            <CssBaseline/>
            <Container maxWidth='md'>
                <Typography align='center' variant='h2' style={{color:'#A405DC',fontWeight:'600',marginTop:80}}>Lakshya</Typography>
                <Typography variant='h2' fontWeight='400' align='center'>Complete your Account Setup</Typography>
                <Typography variant='h6' fontWeight='400' align='center'>We will never share your personal information</Typography>
    
            </Container>
            <Container>
                <Grid container>
                    <Grid item align='center' xs={12} md={6} xl={6}>
                        <img src={svg1} style={{marginLeft:30}} alt="SVG" className="higif"></img>
                    </Grid>
                    <Grid item align='center' xs={12} md={6} xl={6}>
                        <Container style={{marginTop:30}}>
                            <Grid container spacing='30'>
                                <Grid item xs={6} md={6}>
                                    <TextField fullWidth label="First Name" onChange={getFirstName} InputLabelProps={{ shrink: true }}placeholder='First Name' variant="outlined" borderColor='#A405DC'/>
                                </Grid>


                                <Grid item xs={6} md={6}>
                                    <TextField fullWidth label="Last Name" onChange={getLastName} InputLabelProps={{ shrink: true}} placeholder='Last Name'variant="outlined" />
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
                                    
                                    <Button variant='contained' size='large' onClick={nextPage} style={{marginBottom:10, borderRadius: '0.7em',color:'#FFFFFF',backgroundColor:'#A405DC'}}>Next</Button>
                                    
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
        const [image, setImage]=useState(null);
        const auth=getAuth();
        const uid=auth.currentUser.uid;
        const storageRef = ref(storage, 'user_profile_photos/'+uid);
        
        const [{alt, src}, setImg] = useState({
            src: placeholder,
            alt: 'Upload an Image'
        });
        var file;
        const handleImg = (e) => {
            if(e.target.files[0]) {
                file=e.target.files[0];
                setImg({
                    src: URL.createObjectURL(e.target.files[0]),
                    alt: e.target.files[0].name
                });
            }   
        }

        function uploadImage(file){
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
              });
        }

        useEffect(()=>{
            if(image){
                const reader =new FileReader();
                reader.onloadend=()=>{
                    setImage(reader.result);
                    uploadImage(reader.readAsDataURL(image));
                }
                reader.readAsDataURL(image);
            }
            else{
                setImage(null);
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
                <Grid container style={{marginTop:30, spacing:30,}}>
                    <Grid item xs={12} md={12} xl={12} style={{marginBottom:30,align:'center'}}>
                        <div className="form__img-input-container">
                            <input 
                                type="file" 
                                accept=".png, .jpg, .jpeg" 
                                id="photo" 
                                className="visually-hidden"
                                onChange={handleImg}
                            />
                            <label htmlFor="photo" className="form-img__file-label"/>
                            <img src={src} alt={alt} className="form-img__img-preview"/>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={6} xl={6} align='right' style={{paddingRight:60}}>
                        <Button variant='outlined' size='large' onClick={prevPage} style={{marginBottom:10 ,color:'#F44336', borderRadius:'0.7em',borderColor:'#F44336'}}>Back</Button>
                    </Grid>


                    <Grid item xs={6} md={6} xl={6} align='left' style={{paddingLeft:60}}>
                    <Link to="/explore">
                        <Button variant='contained' size='large' style={{marginBottom:10, borderRadius: '0.7em',color:'#FFFFFF',backgroundColor:'#A405DC'}}>Submit</Button>
                    </Link>
                    </Grid>
                </Grid>
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