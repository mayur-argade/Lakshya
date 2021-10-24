import {Grid, Button } from '@material-ui/core'
import Navbar from './Navbar'
import mainImg from '../../images/Heroimg.svg'


const header = () => {
    return (
    <>
    <Grid container 
    container
    direction="column"
    className="header">
        
        <Grid item className="main-nav">
        <Navbar />
        </Grid>
        
        <Grid container 
        className="container"
         direction="row"
         justifyContent="space-evenly"
         alignItems="center">

             <div item className="heroimg">
             <img src={ mainImg } alt="Image"  />
             </div>

             <Grid item>
             <div className="content">
            <div className="heading">
            Better education for better future
            <div className="tagline">From the students for the students by the students</div>
        
        </div>
        <div className="getStarted">
            <Button variant="contained" color="secondary">Get started</Button>
        </div>
        </div>
             </Grid>

        </Grid>

    </Grid>

    </>        
    )
}

export default header
