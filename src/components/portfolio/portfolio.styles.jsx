import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(2),
    textAlign: 'left',
  },
  title: {
    color: theme.palette.primary.light,
  },
  projectsContainer: {
    '& > *': {
      margin: theme.spacing(2)
    },
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default useStyles;
