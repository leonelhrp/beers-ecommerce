import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import JournalismTtf from './assets/fonts/journalism.woff2';

const journalism = {
  fontFamily: 'Journalism',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Journalism'),
    url(${JournalismTtf}) format('woff2')
  `,
};

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: 'Journalism, Arial',
    htmlFontSize: 10,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [journalism],
      },
    },
  },
  palette: {
    primary: {
      main: '#be1e4e',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
