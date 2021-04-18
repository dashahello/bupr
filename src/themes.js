import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const light = createMuiTheme({
  type: 'light',
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[100],
    },
    secondary: {
      main: green[300],
    },
  },
});

export default { light, dark };
