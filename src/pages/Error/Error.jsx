import './error.css'
import { Button, Grid } from '@mui/material';
import {Link} from 'react-router-dom'
import error from '../../images/404error.gif'

const Error = () => {
    return (
    <>
    <Grid container direction="column" justifyContent="center" alignItems="center">

        <Grid item className="errorTitle">
        OOPS!
        </Grid>

        <Grid item className="errorText">
        Page in under maintainance.
        </Grid>

        <Grid item>
            <Link to="/explore" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="secondary" style={{marginTop: 10}}>Back to Homepage</Button>
            </Link>
        </Grid>

        <Grid item>
        <img src={error} alt="error" /> 
        </Grid>

    </Grid>
    </>    
    )
}

export default Error
{/* <Grid>
           <Grid container direction="column" className="error">
            <Grid item className="errorTitle">
                        
            </Grid>

            <Grid container direction="colummn" className="errorwrapper">
            <Grid className="">
                       
            </Grid>
     
            <Grid className="button">
            
            </Grid>
                    
            <Grid className="errorImg">
            
            </Grid>
            </Grid>
            </Grid> 
        </Grid>   */}