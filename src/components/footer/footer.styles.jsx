import { makeStyles } from '@material-ui/core/styles';

const useFooterStyles = makeStyles((theme) => ({
  root: {
    flexShrink: '0',
    paddingTop: '2em',
    display: 'flex',
    paddingBottom: '1em',
  },
  content: {},
  createdBy: {
    color: theme.palette.text.secondary,
  },
  creator: {
    textDecoration: 'none',
    color: theme.palette.secondary.dark,
  },
}));

export default useFooterStyles;