import { Home, PlayCircleFilled, Assignment, ContactMail, AcUnit } from "@material-ui/icons"
import {Stack, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Typography , Button } from "@mui/material"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import Card from './Card'


const Sidebar = () => {
    return (
        <div >
            <div className="sidebar" style={{position: "fixed", height: "100vh" , marginRight: -43 , display: "flex", direction: "column"}}>
              <Stack>
             
            
            <div className="list" style={{marginTop:60}}>
            <List>
            <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

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

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <ContactMail/>
              </ListItemIcon>
              <ListItemText primary="Join" />
            </ListItemButton>
          </ListItem>
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