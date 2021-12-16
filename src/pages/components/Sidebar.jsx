import { Home, PlayCircleFilled, Assignment, ContactMail, AcUnit } from "@material-ui/icons"
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"



const Sidebar = () => {
    return (
        <div >
            <div className="sidebar" style={{position: "fixed"}}>
            <List>
            <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <AcUnit/>
              </ListItemIcon>
              <ListItemText primary="Playground" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <PlayCircleFilled/>
              </ListItemIcon>
              <ListItemText primary="Your Courses" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <Home/>
              </ListItemIcon>
              <ListItemText primary="Exams" />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
              <ListItemIcon>
               <Assignment/>
              </ListItemIcon>
              <ListItemText primary="Assignments" />
            </ListItemButton>
          </ListItem>


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
        </div>
    )
}

export default Sidebar
