import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
const Navbar = () => {
    return (
        <>
<Grid container xs={12} md={12} lg={12} alignItems="center" justifyContent="center" classname="main-nav">
                
                <Grid item xs={1} md={1} lg={1}></Grid>


                <Grid item xs={1} md={1} lg={1}>
                <h2 className="logo">Lakshya</h2>
                </Grid>


                <Grid item xs={8} md={8} lg={8}></Grid>


                <Grid item xs={1} md={1} lg={1}>
                    <Button variant="contained" color="primary" className="signin">Sign in</Button>
                </Grid>


                <Grid item xs={1} md={1} lg={1}></Grid>

                </Grid>
        </>
    )
}

export default Navbar
