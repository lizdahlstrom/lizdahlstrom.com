import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>Under construction...</p>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
