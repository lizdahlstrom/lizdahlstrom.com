import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: '"Kumbh Sans", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: '"Antic Slab","Roboto", "serif"',
      },
      h2: {
        fontFamily: '"Antic Slab","Roboto", "serif"',
      },
      h6: {
        fontFamily: '"Antic Slab","Roboto", "serif"',
      },
    },
  },
});
