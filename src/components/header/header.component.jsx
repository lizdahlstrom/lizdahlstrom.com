import React from 'react';
import useStyles from './header.styles';
import { Grid, Typography } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        lg={3} xl={2}
      >
      </Grid>

      <Grid item container xs={12} lg={6} xl={8} direction='row' justify='center'>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <Typography variant='h1'>
            Liz Dahlström
        </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          Software Developer - CS Student
        </Grid>

      </Grid>

      <Grid
        item
        lg={3} xl={2}
      >
      </Grid>
    </Grid>
  );
};

export default Header;
