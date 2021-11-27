import  {React, useState} from 'react';
import {AppBar, Toolbar, Typography, Avatar, IconButton, Menu, MenuItem, Grid} from '@mui/material'
import './course.css'
import avatar from '../../images/mayur.png';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player'

// function Navbar(){
//     // const [auth, setAuth] = React.useState(true);
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     // const handleChange = (event) => {
//     //     setAuth(event.target.checked);
//     //   };
    
//       const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//       };
    
//       const handleClose = () => {
//         setAnchorEl(null);
//       };

//     return (
//         <>
//         <AppBar color="transparent" style={{ height:60}} >
//             <Toolbar >
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>Lakshya</Typography>
            
//             <div className="linksgroup">
//                 <div className="link">Home</div>
//                 <div className="link">FAQ</div>
//                 <div className="link">Playground</div>
//                 <div className="link">Community</div>
//                 <div className="link">Join</div>
//             </div>
            
//             <div>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                 <Avatar alt="mayur" src={avatar} />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}>
//                 <Link to="/profile">
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 </Link>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                 <MenuItem onClick={handleClose}>Settings</MenuItem>
//                 <MenuItem onClick={handleClose}>Sign Out</MenuItem>
//               </Menu>
//             </div>            
//             </Toolbar>
//         </AppBar>
//         </>
//     )
// }

// function Sidebar(){
// return(
//     <>
//     this is sidebar
//     </>
// )
// }

function Feed(){
return(
    <>
    
    </>
)
}

const Pathname = () => {
  const location = useLocation();
  return location.pathname
}


const Courses = {
  webd:[
    {title : "webd 1", vid:"BsDoLVMnmZs"},
    {title : "webd 2", vid:"1Rs2ND1ryYc"},
    {title : "webd 3", vid:"hKB-YGF14SY"}
  ],
  github:[
    {title : "git 1", vid:"uaeKhfhYE0U"},
    {title : "git 2", vid:"apGV9Kg7ics"},
    {title : "git 3", vid:"DVRQoVRzMIY"}
  ]
}

// const [vid, uid] = useState(Courses.[])

// const RenderVid = () => {
//       return (
//       <>
//       <ReactPlayer
//         url={"https://www.youtube.com/watch?v="+UVCP4bKy9Iw}
//       />
//       </>
//       )
// }

function Course(props){
  console.log(props)
    return (
      <div>
        welcome to {Pathname()} course
        {/* {RenderVid()} */}
      </div>
      
         
        // <Grid container direction="column" justifyContent="center" alignItems="center"> 
        //    <Navbar/>
           
        // <Grid container justifyContent="center" alignItems="center">
    
        // <Grid item> 
        // sidebar
        // </Grid>
        
        // <Grid item>
        
        // </Grid>
        
        // </Grid>
        // </Grid> 
        // </>
    )
}

export default Course
