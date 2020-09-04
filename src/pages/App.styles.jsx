import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
  },
  header: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    paddingBottom: theme.spacing(0.5),
  },
  footer: {
    alignSelf: 'flex-end',
  },
}));

export default useStyles;
