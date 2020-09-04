import React from 'react';
import useFooterStyles from './footer.styles'
import { Typography, Grid } from '@material-ui/core';

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <Grid container item className={classes.root} direction='row'>
      <Grid item xs={false} sm={false} md={false} lg={3} xl={3} />
      <Grid
        container
        item
        xs={12}
        lg={6}
        xl={6}
        direction='row'
        justify='center'
        className={classes.content}>
        <Typography
          variant='caption'
          display='inline'
          className={classes.createdBy}>
          {'<'} &copy; {new Date().getFullYear()}{' '}
          <a className={classes.creator} href='https://github.com/lizdahlstrom'>
            Liz Dahlström
          </a>{' '}
          {'>'}
        </Typography>
      </Grid>
      <Grid item xs={false} sm={false} md={false} lg={3} xl={3} />
    </Grid>
  )
}

export default Footer;