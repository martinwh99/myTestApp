/**
 * Created by martin on 14.04.2016.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'
import FlatButton  from 'material-ui/FlatButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';


const lightMuiTheme = getMuiTheme(lightBaseTheme);

class login extends React.Component {


      render() {

            const {error} = this.props;

            return (
                  <MuiThemeProvider muiTheme={lightMuiTheme}>
                        <Paper className="FormInput" zDepth={3}>
                              
                                                <TextField ref="user" hintText="User / Email" floatingLabelText="User"  autofocus/>
                                         
                                                <TextField ref="password" hintText="password" floatingLabelText="Password" type="password" />
                                         
                                                <div >

                                                      <FlatButton onMouseUp={this.login.bind(this)} primary={true} type="submit" label="Login"/>
                                                      <FlatButton onMouseUp={this.logout.bind(this)}  primary={true} type="submit" label="Logout"/>
                                                </div>

                                         
                                               
                                                      {error ? <p style = {{color: 'red'}}>{error}</p> :null}
                                                

                        </Paper>
                  </MuiThemeProvider>
            )
      }

      login(event) {
            event.preventDefault();
            const {loginUser}=this.props;
            const {user, password} = this.refs;
            console.log("user: "+user.getValue() + '  '+"password: "+password.getValue())
            loginUser(user.getValue(),password.getValue())
      }

      logout(event) {
            event.preventDefault();
            const{logoutUser}=this.props;
            logoutUser();
      }

};
export default login