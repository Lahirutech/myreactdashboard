import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid, ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>

  );
}

export default App;
