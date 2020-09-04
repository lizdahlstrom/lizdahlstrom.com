import React, { useState, useEffect } from 'react';
import useStyles from './portfolio.styles';
import { Grid, Typography } from '@material-ui/core';
import projectsData from '../../data/projects.json';
import PortfolioItem from '../portfolio-item/portfolio-item.component';

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item lg={3} xl={3}></Grid>

      <Grid
        item
        container
        xs={12}
        lg={6}
        xl={6}
        direction='row'
        justify='center'>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography
            variant='h4'
            component='h3'
            className={classes.title}
            style={{ fontWeight: '500' }}>
            web dev projects
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='h6' component='h2' className={classes.subtitle}>
            {'<'} A few of my projects...{' / >'}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={classes.projectsContainer}>
          {projectsData
            ? projectsData.map((project) => (
                <PortfolioItem
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  url={project.url}
                  technologies={project.technologies}
                />
              ))
            : ''}
        </Grid>
      </Grid>

      <Grid item lg={3} xl={3}></Grid>
    </Grid>
  );
};

export default Portfolio;
