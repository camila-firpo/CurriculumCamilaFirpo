import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import PersonInfo from './components/PersonInfo';
import Contents from './components/Contents';

function App() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <PersonInfo />
        </Grid>
        <Grid item xs={12} md={8} sx={{bgcolor: "primary.light"}}>
          <Contents />
        </Grid>
      </Grid>
    );
}

export default App;
