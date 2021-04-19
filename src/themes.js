import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { blue } from '@material-ui/core/colors';

const light = createMuiTheme({
  type: 'light',
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: blue[500],
    },
  },
});

const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: purple[300],
    },
    secondary: {
      main: blue[300],
    },
  },
});

export default { light, dark };
