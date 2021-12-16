import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import meet from '../../images/meet.png'
import { Link } from 'react-router-dom'

export default function MultiActionAreaCard() {

    return (
    <Card sx={{ maxWidth: 200 }} style={{marginLeft: 5,padding: 5, backgroundColor: ""}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={meet}
          alt="meet"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Video meeting
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Take a meet and discuss !
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      <Link to={{ pathname: "https://meet.new" }} target="_blank" >
        <Button size="small" variant="contained" color="secondary">
          Meet
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}