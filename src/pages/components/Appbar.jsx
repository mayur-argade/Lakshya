import  {React, useState} from 'react';
import {AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem} from '@mui/material'
import avatar from '../../images/mayur.png';
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import { Message, Notifications, Settings } from '@material-ui/icons';

const Appbar = () => {
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    //   };
    
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
        <AppBar elevation={1} position="fixed"   style={{ height:60,  background: '#FFFFFF'}} >
            <Toolbar >
            <img className="logo"  src={logo} alt="logo" style={{ height:50, width:"50" }} />
            <Typography variant="h6" color="#000000" sx={{ flexGrow: 1 }}>Lakshya</Typography>
            
            <div className="Searchfield" >
            <input type="text" placeholder="Search" style={{ borderRadius: 5, border: "#0000"}} />
            
            <IconButton aria-label="Notifications" Style={{padding: 5}}>
               <Notifications icon={Notifications} />
            </IconButton>

            <IconButton aria-label="Notifications" Style={{padding: 5}} >
               <Message icon={Message} />
            </IconButton>

            <IconButton aria-label="Notifications" Style={{padding: 5}}>
               <Settings icon={Settings}  />
            </IconButton>

            </div>
            


            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="mayur" src={avatar} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <Link to="/profile">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <MenuItem onClick={handleClose}>Sign Out</MenuItem>
              </Menu>
            </div>            
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Appbar
