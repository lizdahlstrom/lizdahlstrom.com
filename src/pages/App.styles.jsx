import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // flexGrow: 1,
    // alignContent: '',
    overflow: 'auto',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    background: 'linear-gradient(135deg,#330867,#31a7bb)',
  },
  header: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    paddingBottom: theme.spacing(0.5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  mainContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flex: '1 0 auto',
    alignContent: 'flex-start',
  },
  footer: {
    alignSelf: 'flex-end',
  },
}));

export default useStyles;
