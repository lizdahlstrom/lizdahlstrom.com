import React from 'react';
import Header from '../components/header/header.component';
import useStyles from './App.styles';
import { Grid } from '@material-ui/core';
import Footer from '../components/footer/footer.component';

function App() {
  const classes = useStyles()

  return (
    <Grid container direction='row' className={classes.root}>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.header}>
        <Header />
      </Grid>
      <Grid item>
        {/* <Header /> */}
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={classes.footer}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;
