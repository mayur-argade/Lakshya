import { Home, PlayCircleFilled, ContactMail } from "@material-ui/icons"
import {Stack, List, ListItem, ListItemButton, ListItemText, ListItemIcon} from "@mui/material"
import { Link } from "react-router-dom"
import Card from './Card'


const Sidebar = () => {
    return (
        <div >
            <div className="sidebar" style={{position: "fixed", height: "100vh" , marginRight: -43 , display: "flex", direction: "column"}}>
              <Stack>
             
            
            <div className="list" style={{marginTop:60}}>
            <List>
            <Link to='/explore' style={{ textDecoration: "none", color:"black" }}>
            <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to='/error' style={{ textDecoration: "none", color:"black" }}>
          <ListItem >
            <ListItemButton >
              <ListItemIcon>
               <PlayCircleFilled/>
              </ListItemIcon>
              <ListItemText primary="Your Courses" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={{ pathname: "https://github.com/mayur-argade/Lakshya" }} target="_blank" style={{ textDecoration: "none", color:"black" }} >
          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <ContactMail/>
              </ListItemIcon>
              <ListItemText primary="Join" />
            </ListItemButton>
          </ListItem>
          </Link>

          </List> 
            </div>
            
             <div className="bottom" style={{ marginTop: 100 }}>
               <Card/>
             </div>
             </Stack>
            </div>
        </div>
    )
}

export default Sidebar