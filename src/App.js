// import './App.css';
import Landingpage from './pages/landing-page/Landingpage';
import {createTheme, ThemeProvider} from '@material-ui/core'

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
    <ThemeProvider theme={theme}>
    
    <Landingpage />

    </ThemeProvider>
  );
}

export default App;
