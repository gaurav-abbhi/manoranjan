/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createGenerateClassName, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  // props: {
  //   MuiButtonBase: {
  //     disableRipple: true // No more ripple, on the whole application
  //   }
  // },
  palette: {
    primary: {
      main: red[100]
    },
    secondary: {
      main: '#11cb5f'
    },
    transparentDark: {
      backgroundColor: 'transparent',
      color: grey[50]
    },
    transparentLight: {
      backgroundColor: 'transparent',
      color: grey[900]
    }
  },
  typography: {
    useNextVariants: true
  }
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
