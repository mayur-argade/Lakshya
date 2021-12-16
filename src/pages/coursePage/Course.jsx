import './course.css'
import  {React, useState} from 'react';
import Appbar from '../components/Appbar';
import {Grid, List, ListItem, ListItemButton,ListItemText } from "@mui/material"
import ReactPlayer from 'react-player/youtube'

const Course = (props) => {
  const courseName = props.match.params.coursename;
   
const Courses = {
  webd:[
    {title : "HTML", vid:"BsDoLVMnmZs"},
    {title : "CSS", vid:"1Rs2ND1ryYc"},
    {title : "Javacript", vid:"hKB-YGF14SY"}
  ],
  github:[
    {title : "github", vid:"uaeKhfhYE0U"},
    {title : "github 2", vid:"DVRQoVRzMIY"}
  ]
}

const [vid,uid] = useState(Courses[courseName][0].vid);
const [title,utit] = useState(Courses[courseName][0].title);

const Rendervid = () => {
  
    return( 
    <>
    <div className="title">
    <h2 className="vidtitle">{title}</h2>
    </div>
    <ReactPlayer url={"https://www.youtube.com/watch?v="+vid } />
    </>
    )}

function Sidebar(){
  return(
    <>
    <div className="collection">
      {
        Courses[courseName].map(item=>{
          return(
            <List disablePadding>
          <ListItem>
          <ListItemButton onClick={()=>{
            uid(item.vid)
            utit(item.title)
          }} >
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
        </List>
            ) 
        })
      }
    </div>
    </>
  )
}
function Feed(){
  return(
  <>
  <div className="feedcontainer">
    <div className="videoplayer">
      <Rendervid/>
    </div>
  </div>
  </>
  )}
  return (
      <>
      <div>
      <Grid container direction="column" justifyContent="center" > 
           <Appbar/>
           
        <Grid container justifyContent="center" >
    
        <Grid item sm={3} className="sidebarcontainer" > 
        <Sidebar/>
        </Grid>
        
        <Grid item sm={9} className="feedcontainer">
        <Feed/>
        </Grid>
        
        </Grid>
        </Grid> 
      </div>
      </>
  )
}

export default Course
