import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container>
      <Navbar />
      <Outlet />
    </Grid>

  );
}

export default App;
