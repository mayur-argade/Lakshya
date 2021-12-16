import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Link } from "react-router-dom";
import html from "../../images/html.jfif";
import css from "../../images/css.jfif";
import js from "../../images/js.png";
import react from "../../images/react.jpeg";
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
              <Link to="/html" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="150"
                    image={html}
                    alt="HTML"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      HTML
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Learn complete HTML. elements div, span, and many more concepts.
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/css" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={css}
                    alt="css"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      css
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Complete css with in depth concepts and practical
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/javascript" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={js}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Javascript
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Learn javascript with real life example by hitesh.
                    </Typography>
                  </CardContent>
                
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 300 }} style={{ borderRadius: 10}} elevation={3} className="card">
              <Link to="/react" style={{ textDecoration: "none" }}>
                
                  <CardMedia
                    component="img"
                    height="140"
                    image={react}
                    alt="React"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      React JS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      React js with each concept as a separate module
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
