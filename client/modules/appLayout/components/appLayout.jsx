import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'

import AppHeader from './appHeader.jsx';

class appLayout extends React.Component {


      render() {




            return(
                  <MuiThemeProvider muiTheme={getMuiTheme()}>
                  <Paper  zDepth={3}>
                        
                              <AppHeader />

                  </Paper>
                  </MuiThemeProvider>
            )
      }

};
 export default appLayout