import React from 'react'
import { Grid } from '@material-ui/core'
const About = () => {
    return (
        <>
        <Grid container direction="column"
         justifyContent="center"
        alignItems="center"
        className="aboutcontainer" >

            <Grid item className="aboutus" >
                About us
            </Grid>

            <Grid item className="para" >
            Lakshya Is the idea that focuses on Skills, Without falling into the tutorial hell Lakshya focuses on project-based learning. whatever you will learn you have to complete assignments and projects. whatever you will learn and implement you will be getting one achievement batch.
            </Grid>

        </Grid>
        </>
    )
}

export default About
