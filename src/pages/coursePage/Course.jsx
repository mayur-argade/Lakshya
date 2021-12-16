import './course.css'
import  {React, useState} from 'react';
import Appbar from '../components/Appbar';
import {Grid, List, ListItem, ListItemButton,ListItemText } from "@mui/material"
import ReactPlayer from 'react-player'
import Sidebar from '../components/Sidebar'

const Course = (props) => {
  const courseName = props.match.params.coursename;

// add course video list 
const Courses = {
  html:[
    {title : "HTML Starter code", vid:"eMEbBwJ-bq4"},
    {title : "Heading, Paragraphs", vid:"_VRRx2OmNM0"},
    {title : "Adding Links", vid:"RuhdaumQOLE"},
    {title : "HTML List", vid:"swGoON40BNU"},
    {title : "HTML Images", vid:"swGoON40BNU"},
    {title : "Text Formating", vid:"1Rs2ND1ryYc"},
    {title : "HTML forms", vid:"fNcJuPIZ2WE"},
    {title : "ID and Classes", vid:"UTDnI0H_G3k"},
    {title : "Div and span tag", vid:"lpNuzE1SH5s"},
    {title : "Sematic elements", vid:"tjm6U9Pbt9I"},
    {title : "HTML entitites", vid:"tjm6U9Pbt9I"}
  ],
  css:[
    {title : "CSS introduction", vid:"EZ5q8sW3Glo"},
    {title : "CSS Syntax", vid:"GXaKDQyDpwc"},
    {title : "Adding CSS to HTML", vid:"nnPqFOsg6EA"},
    {title : "CSS Selectors", vid:"Ju7usnMgFvo"},
    {title : "Comments in CSS", vid:"4kIHxagnmbw"},
    {title : "Colors in CSS", vid:"-w3Q0m0FrVs"},
    {title : "Backgrounds in CSS", vid:"MJWZxaatAqs"},
    {title : "Borders in CSS", vid:"xVDYrxfZcPU"},
    {title : "CSS height and width", vid:"EyJ4O1bTrWM"},
    {title : "CSS Padding", vid:"zo2vtGHh728"},
    {title : "CSS Margin", vid:"bLqE06eyWIY"},
    {title : "CSS Box Model", vid:"RtuxJVByGv4"},
    {title : "CSS Text", vid:"jp7O7jnhGcg"},
    {title : "CSS Link", vid:"mrT1GhfnI2Q"},
    {title : "CSS Fonts", vid:"o7_dQG1CI_w"}
  ],
  javascript:[
    {title : "Variables & Datatypes", vid:"ycLqC41TO1UfhYE0U"},
    {title : "Operators", vid:"WxyFRb0_eUQ"},
    {title : "prsecedence", vid:"nvKktNrJXcY"},
    {title : "conditionals", vid:"uaegx7N3QGrVWEKhfhYE0U"},
    {title : "logical conditionals", vid:"uT9n7iIxEw8"},
    {title : "Ternery Operator", vid:"R0HJtkYtjwk"},
    {title : "Switch", vid:"_wyPpPlFwrI"},
    {title : "Coercion adn falsy value", vid:"0O-9uXmqbFI"},
    {title : "Functions", vid:"TwDHINjr1AQ"},
    {title : "Functions in variable", vid:"hEX8ohGSOyc"},
    {title : "Context in Javascript", vid:"_JMXlGt3OSo"}
  ],
  react:[
    {title : "Introduction", vid:"QFaFIcGhPoM"},
    {title : "Hello world", vid:"9hb_0TZ_MVI"},
    {title : "Folder structure", vid:"9VIiLJL0H4Y"},
    {title : "Components", vid:"Y2hgEGPzTZY"},
    {title : "Functional Components", vid:"Cla1WwguArA"},
    {title : "Class Components", vid:"lnV34uLEzis"},
    {title : "Hooks update", vid:"oecI26cWqzk"},
    {title : "JSX", vid:"7fPXI_MnBOY"},
    {title : "Props", vid:"m7OWXtbiXX8"},
    {title : "State", vid:"4ORZ1GmjaMc"},
    {title : "setState", vid:"uirRaVjRsf4"}
  ]
}

const [vid,uid] = useState(Courses[courseName][0].vid);
const [title,utit] = useState(Courses[courseName][0].title);

// rendering video
const Rendervid = () => {  
    return( 
    <>
    
    <ReactPlayer controls={true} url={"https://www.youtube.com/watch?v="+vid } />
    </>
    )}


function VideoList(){
  return(
    <>
    

    <div className="collection">
      {
        Courses[courseName].map(item=>{
          return(
          <ListItem onClick={()=>{
            uid(item.vid)
            utit(item.title)
          }} >
          <ListItemButton>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
        
            ) 
        })
      }
    </div>
    </>
  )
}

// video window
function Feed(){
  return(
  <>
  <div className="feedcontainer">
    <div className="videoplayer">
      <Rendervid style={{borderRadius: 5}}/>
    </div>
  </div>
  </>
  )}


  return (
      <>
      <div>
      <Grid container direction="column" justifyContent="center" style={{height: "100vh"}} > 
           <Appbar/>        
      
        <Grid container >
      
        <Grid item sm={2} className="sidebarcontainer"> 
        <Sidebar/>
        </Grid>
        

        <Grid container item sm={10} justifyContet="center"  alignItems="center" className="feedcontainer" style={{marginTop:10, height:"100vh",borderTopLeftRadius:20, backgroundColor:"#f0ecfc"}}>
          

        
        <Grid item sx={7} >
        
        <Feed/>  
        </Grid>

        <Grid item sx={3} style={{marginTop: 10}}>
        <List sx={{
              width: '150%',
              maxWidth: 350,
              bgcolor: 'background.paper',
              maxHeight: 360,
              position: 'relative',
              overflow: 'auto',
              borderRadius: 5,
              '& ul': { padding: 0 },
            }}>
        <VideoList style={{color: "#FFFFFF" , marginTop: 20}}/>
        </List>
        </Grid>

        </Grid>
        
        </Grid>
        </Grid> 
      </div>
      </>
  )
}

export default Course
