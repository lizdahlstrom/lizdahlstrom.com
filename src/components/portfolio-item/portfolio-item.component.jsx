import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    // minWidth: 260,
  },
});

const PortfolioItem = ({ title, description, image, url, technologies }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {image ? (
          <CardMedia
            component='img'
            image={image}
            alt={title}
            height='100'
            title={title}
          />
        ) : (
          ''
        )}
        <CardContent>
          <Typography gutterBottom variant='h5' component='h5'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
            <br />
            {technologies ? (
              <ul>
                {technologies.map(t => <li>{t}</li>)}
              </ul>
            ) : (
              ''
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Code
        </Button>
        {url ? (
          <Button size='small' color='primary' onClick={() => window.open(url)}>
            Live version
          </Button>
        ) : (
          ''
        )}
      </CardActions>
    </Card>
  );
};

export default PortfolioItem;
