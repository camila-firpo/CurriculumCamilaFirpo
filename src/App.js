import './App.css';
import React, { Component } from 'react';
import PersonInfo from './components/PersonInfo';
import Contents from './components/Contents';
import Grid from '@mui/material/Grid';

class App extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <PersonInfo />
        </Grid>
        <Grid item xs={12} md={8}>
          <Contents />
        </Grid>
      </Grid>
    )
  }
}

export default App;
