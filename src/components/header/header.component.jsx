import React from 'react';
import useStyles from './header.styles';
import { Grid, Typography, IconButton, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={3} xl={2}></Grid>

      <Grid
        item
        container
        xs={12}
        lg={6}
        xl={8}
        direction='row'
        justify='center'>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='h2' component='h1'>
            Liz Dahlström
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='h6' component='h2' className={classes.title}>
            {'/*'} Software Developer - CS Student {'*/'}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <IconButton
            onClick={() => window.open('https://www.github.com/lizdahlstrom/')}>
            <GitHubIcon />
          </IconButton>

          <IconButton
            onClick={() => window.open('https://www.github.com/lizdahlstrom/')}>
            <LinkedInIcon />
          </IconButton>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ul className={classes.navLinks}>
            <li>
              <Link href='#'>Portfolio</Link>
            </li>
            <li>•</li>
            <li>
              <Link href='#'>About</Link>
            </li>
          </ul>
        </Grid>
      </Grid>

      <Grid item lg={3} xl={2}></Grid>
    </Grid>
  );
};

export default Header;
