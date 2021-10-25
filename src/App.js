import Landingpage from './pages/landingPage/Landingpage'
import PersonalInfo from './pages/personal-info-page/personal'
import Login from './pages/Login Page/login'
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import './App.css';

import {createTheme, ThemeProvider} from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const theme = createTheme ({
palette: {
  primary: {
    main: '#9500DB'
  },
  secondary: {
    main: '#FD5177'
  }
}

})

function App() {
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
          <PersonalInfo />
        </Route>

      </Switch>
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
