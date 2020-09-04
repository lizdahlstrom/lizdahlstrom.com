import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(10),
    textAlign: 'center',
  },
  subtitle: {
    color: theme.palette.text.secondary,
  },
  navLinks: {
    listStyle: 'none',
    textAlign: 'center',
    '& li': {
      float: 'center',
      display: 'inline-block',
      marginRight: theme.spacing(2),
    },
  },
  Link: {
    padding: theme.spacing(20),
  },
}));

export default useStyles;
