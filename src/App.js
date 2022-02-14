import React from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import PersonInfo from './components/PersonInfo';
import ContentsMobile from './components/ContentsMobile';
import ContentsDesktop from './components/ContentsDesktop';

function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <PersonInfo />
      </Grid>
      <Grid item xs={12} md={8} sx={{ bgcolor: 'primary.light' }}>
        {isMobile ? <ContentsMobile /> : <ContentsDesktop />}
      </Grid>
    </Grid>
  );
}

export default App;
