import Landingpage from './pages/landingPage/Landingpage'
import PersonalInfo from './pages/personal-info-page/personal'
import Login from './pages/Login Page/login'
import SignUp from './pages/SignUp/SignUp';
import Explore from './pages/Explore/Explore';
import Profile from './pages/profile/Profile'
import Course from './pages/coursePage/Course'
import { createTheme, ThemeProvider } from "@material-ui/core";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { createTheme, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Error from './pages/Error/Error'


const firebaseConfig = {
  apiKey: "AIzaSyB_WUrPgGWZA-DqMHP_k2m95Q8sOGhPQVc",
  authDomain: "lakshya-9576f.firebaseapp.com",
  projectId: "lakshya-9576f",
  storageBucket: "lakshya-9576f.appspot.com",
  messagingSenderId: "202043244759",
  appId: "1:202043244759:web:2c67cd21e9dd7923077092",
  measurementId: "G-NM1YQKJ1VN"
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#9500DB",
    },
    secondary: {
      main: "#FD5177",
    },
  },
});

function App(){
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>

      <Route exact path="/">
      <Landingpage />  
      </Route>

        <Route path="/login">
        <Login />
        </Route>
        
        <Route path="/register">
          <SignUp />
        </Route>

        <Route path="/personalinfo">
          <PersonalInfo />
        </Route>

        <Route path="/explore">
          <Explore />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/error">
          <Error />
        </Route>
        
        <Route path="/:coursename" component={Course}/> 

        
      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
