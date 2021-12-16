import ExploreFeed from '../components/ExploreFeed'
import Sidebar from '../components/Sidebar'
import Appbar from '../components/Appbar'
import {Grid} from '@mui/material'
import './explore.css'

const Explore = () => {
    return (
        <>
    <Grid direction="column" container justifyContent="center" >
    <Grid item>
        <Appbar /> 
    </Grid>

    <Grid container direction="row" justifyContent="center"  style={{marginTop: 60}}>
    
        <Grid item xs={2}>
            <Sidebar/>
        </Grid>
    
        <Grid item xs={10}>
            <ExploreFeed/>
        </Grid>
    
    </Grid>
    {/* <Grid item>
      <Team/>
    </Grid> */}
    </Grid>
        </>
    )
}

export default Explore
