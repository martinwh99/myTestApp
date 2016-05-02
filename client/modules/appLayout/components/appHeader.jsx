import React from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVerticalIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';


const appHeader = () => (

      <AppBar
            title={"tenant/organisation"}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={
            <IconMenu
                  iconButtonElement={
                        <IconButton><MoreVerticalIcon /></IconButton>
                  }
                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                  <MenuItem primaryText="this will be the user menu" />
                  <MenuItem primaryText="Refresh" />
                  <MenuItem primaryText="Help" />
                  <MenuItem primaryText="Sign out" />
            </IconMenu>
            }
      />
);
export default appHeader;
