import React from "react";
import {Grid, CardActionArea} from "@material-ui/core";
import mayur from "../../images/mayur.png";
import sumedhb from "../../images/sumedg.png";
import sumedhg from "../../images/sumedhG.png";

const Team = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="teammates">
        <Grid item className="ourTeam">
          Our Team
        </Grid>

        <Grid
          container
          xs={10}
          justifyContent="center"
          alignItems="center"
          className="teamcontainer">
              
              
              <div className="team">
                
              <CardActionArea>
                <div className="mayurimg">
                <img src={ mayur } alt="mayur" className="mayur"/>
                </div>
                <div className="name">
                    Mayur Argade
                </div>
                </CardActionArea>
                
              </div>

              <div className="team">
              <CardActionArea>
              <div className="sumedhbimg">
              <img src={ sumedhb } alt="sumedhb" className="sumedhb"/>
                </div>
                <div className="name">
                    Sumedh Bengale
                </div>
              </CardActionArea>
              </div>

              <div className="team">
              <CardActionArea>
              <div className="sumedhgimg">
              <img src={ sumedhg } alt="sumedhg" className="sumedhg"/>
                </div>
                <div className="name">
                    Sumedh Gamare
                </div>
              </CardActionArea>
              </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Team;
