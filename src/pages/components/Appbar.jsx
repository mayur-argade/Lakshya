import  {React, useState} from 'react';
import {AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem} from '@mui/material'
import avatar from '../../images/mayur.png';
import { Link } from "react-router-dom"
import logo from '../../images/logo.png'
import { Message, Notifications, Settings } from '@material-ui/icons';
import Search from './SearchFeature'
import { getAuth, signOut } from "firebase/auth";

const Appbar = () => {
    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const auth = getAuth();

    // const handleChange = (event) => {
    //     setAuth(event.target.checked);
    //   };
      function SignOut(){
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        handleClose();
      }
      const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <>
        <AppBar elevation={0} position="fixed" color='transparent'  style={{ height:60}} >
            <Toolbar >
            <img className="logo"  src={logo} alt="logo" style={{ height:50, width:"50" }} />
            <Typography variant="h6" color="#000000" sx={{ flexGrow: 1 }}>Lakshya</Typography>
            
            
            <IconButton aria-label="Notifications" Style={{padding: 5}}>
               <Notifications icon={Notifications} />
            </IconButton>

            <IconButton aria-label="Notifications" Style={{padding: 5}} >
               <Message icon={Message} />
            </IconButton>

            <IconButton aria-label="Notifications" Style={{padding: 5}}>
               <Settings icon={Settings}  />
            </IconButton>
            


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
                <Link to="/error">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Settings</MenuItem>
                <Link to="/">
                <MenuItem onClick={SignOut}>Sign Out</MenuItem>
                </Link>
              </Menu>
            </div>            
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Appbar
