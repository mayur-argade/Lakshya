import React from 'react'
import { Grid , Card, CardContent, CardMedia} from '@material-ui/core'
import featureImg from '../../images/features.svg'
import feature1 from '../../images/feature1.svg'
import feature2 from '../../images/feature2.svg'
import feature3 from '../../images/feature3.svg'

const Features = () => {

    return (
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center" 
        className="featurecontainer">

        <Grid item>
         <img src={ featureImg } alt="otherfeatures" className="rocket"/>
        </Grid>
        
       <Grid container 
       justifyContent="space-evenly"
        alignItems="center">
           <Grid item xs={3}> 
               <Card>
                   <CardMedia 
                   component="img"
                   height= "200"
                   image={ feature1 }
                   />
                   <CardContent>
                       <div className="featuredis">
                       Structured Video Courses,<br/> Documentation,<br/> guidance and many more
                       </div>
                   </CardContent>
               </Card>
           </Grid>

           <Grid item xs={3}>
               <Card>
                   <CardMedia 
                   component="img"
                   height= "215"
                   image={ feature2 }
                   />
                   <CardContent>
                       <div className="featuredis">
                       project-based learning. <br/>Learn while doing
                       </div>
                   </CardContent>
               </Card>
           </Grid>

           <Grid item xs={3}>
               <Card>
                   <CardMedia 
                   component="img"
                   height= "200"
                   image={ feature3 }
                   />
                   <CardContent>
                       <div className="featuredis">
                       online playground, <br/>certificates <br/>Community support
                       </div>
                   </CardContent>
               </Card>
           </Grid>
       </Grid>
        
        </Grid>
        
    )
}

export default Features
