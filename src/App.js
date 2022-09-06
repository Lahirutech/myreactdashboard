import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid, ThemeProvider } from '@mui/material';
import { dashboardTheme } from './dashboardTheme';
import Header from './components/Header/Header';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Header/>
      <Outlet />
    </Grid>

  );
}

export default App;
