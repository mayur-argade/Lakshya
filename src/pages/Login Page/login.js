import {Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Grid, Box, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import svg from '../../images/svjlogin.svg';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB_WUrPgGWZA-DqMHP_k2m95Q8sOGhPQVc",
  authDomain: "lakshya-9576f.firebaseapp.com",
  projectId: "lakshya-9576f",
  storageBucket: "lakshya-9576f.appspot.com",
  messagingSenderId: "202043244759",
  appId: "1:202043244759:web:2c67cd21e9dd7923077092",
  measurementId: "G-NM1YQKJ1VN"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email,setEmail]=useState(null);
const [password,setPassword]=useState(null);

function getEmail(event){
  setEmail(event.target.value);
}

function getPassword(event){
  setPassword(event.target.value);
}

function signIn(auth,email,password){
  signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Signed In");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              })
}


  return (
    <>

    <Grid container direction="column" justifyContent="center" alignItems="center"> 

    <Typography align='center' variant='h3' style={{color:'#A405DC',fontWeight:'600',marginTop:10}}>Lakshya</Typography>
            <Typography variant='h5' fontWeight='400' align='center'>Welcome :)</Typography>
            <Typography variant='h6' fontWeight='400' align='center'>To save Your Progress Please Login </Typography>

    <Grid container justifyContent="center" alignItems="center">

    <Grid item> 
    <img src={svg} className="loginimg" alt="loginimg" />
    </Grid>
    <Grid item>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            onChange={getEmail}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            onChange={getPassword}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link to='/explore' style={{ textDecoration: "none"}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() =>
                signIn(auth,email,password)}
            >
              Sign In
            </Button>
            </Link>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{ textDecoration: "none"}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/register' style={{ textDecoration: "none"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    </Grid>

    </Grid>
    
    </Grid>
  </>
  );
}