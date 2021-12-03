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
import exploremain from "../../images/exploreheader.svg";

const ExploreFeed = () => {
  return (
    <>
      <Grid container direction="column" alignItems="center">
        
        <Grid item>
          <Typography variant="h5" style={{ padding: 5}}>Explore Courses</Typography>
        </Grid>

        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item  className="card">
            <Card sx={{ maxWidth: 345}}  elevation={3} className="card">
              <Link to="/webd" style={{ textDecoration: "none" }}>
                <CardActionArea>
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
                </CardActionArea>
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 345 }} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                <CardActionArea>
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
                </CardActionArea>
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 345 }} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                <CardActionArea>
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
                </CardActionArea>
              </Link>
            </Card>
          </Grid>

          <Grid item className="card">
            <Card sx={{ maxWidth: 345 }} elevation={3} className="card">
              <Link to="/github" style={{ textDecoration: "none" }}>
                <CardActionArea>
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
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ExploreFeed;
