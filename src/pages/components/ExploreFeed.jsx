import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import webd from "../../images/web.jpg";
import git from "../../images/git.png";
import explore1 from "../../images/exploremain2.svg";
import { Divider } from "@material-ui/core";
import Search from "./SearchFeature";
import Appbar from './Appbar'
import SearchFeature from "./SearchFeature";

const ExploreFeed = () => {
  return (
    <>
      <Grid container direction="column" alignItems="center" >
        <Grid item>
          <Appbar />
        </Grid>

        <Grid item>
          <img src={explore1} alt="explore1" className="" />
        </Grid>

        <Divider />

        <Grid item>
          <Typography variant="h5" style={{ padding: 15}}>Explore Courses</Typography>
        </Grid>

        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item  className="card">
            <Card sx={{ maxWidth: 300}} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/webd" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={webd}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Web development
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete web development basics Html CSS and Javascript
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={git}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      git and github
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete git and github with commands and practical
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={git}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      git and github
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete git and github with commands and practical
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={git}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      git and github
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete git and github with commands and practical
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ExploreFeed;
