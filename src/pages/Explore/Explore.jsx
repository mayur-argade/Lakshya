import {Grid} from '@mui/material'
import {Link} from 'react-router-dom'

const Explore = () => {
    return (
        <div>
<Grid direction="column" container justifyContent="center" alignItems="center">


            <Link to="/webd">
            <h1>web development</h1>
            </Link>
            
            <Link to="/github">
            <h1>github</h1>
            </Link>

</Grid>
        </div>
    )
}

export default Explore
