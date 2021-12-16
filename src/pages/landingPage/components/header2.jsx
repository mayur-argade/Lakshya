import React from 'react'
import {Grid } from '@material-ui/core'
import secimg from '../../images/hero2man.svg'

const header2 = () => {
    return (
        <Grid container 
        className="containerhero2"
         direction="row"
         justifyContent="space-evenly"
         alignItems="center">

            <Grid className="learndo">
                <div className="title">
                Learn while Doing
                <div className="explain" >
                Best courses curated by students who have learned from those and <br/>
                also community support is now in your hands
                </div>
                </div>
            </Grid>

             <Grid item >
             <img src={ secimg } alt="header2" className="header2img" />
             </Grid>

        </Grid>
        
    )
}

export default header2
