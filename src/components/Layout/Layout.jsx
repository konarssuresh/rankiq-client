import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes, HashRouter } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import Login from '../Login';
import SignUp from '../Signup';

const themeOptions = {
  palette: {
    type: 'light',
    primary: {
      main: '#FE4066',
    },
    secondary: {
      main: '#5D5959',
    },
    text: { navFooter: '#FFFFFF' },
    box: { main: '#FAFAFA' },
  },
};

function Layout() {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Box>
          <NavBar />
          <Box>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default Layout;
