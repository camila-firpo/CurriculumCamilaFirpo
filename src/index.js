import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#286c79',
      light: '#b2dfdb',
    },
    secondary: {
      main: '#bdbdbd',
      dark: '#424242',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
