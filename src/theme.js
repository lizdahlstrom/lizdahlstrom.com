import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: '"Lato","Roboto", "serif"',
      },
      h2: {
        fontFamily: '"Lato","Roboto", "serif"',
      },
      h6: {
        fontFamily: '"Lato","Roboto", "serif"',
      },
    },
  },
});
