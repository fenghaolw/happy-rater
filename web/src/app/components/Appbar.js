import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Appbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.state = {drawerOpen: false};
  }

  toggleDrawer() {
    this.setState({drawerOpen: !this.state.drawerOpen});
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          open={this.state.drawerOpen}
          docked={false}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
        >
          <MenuItem>Home</MenuItem>
          <MenuItem>All Tasks</MenuItem>
          <MenuItem>Stats</MenuItem>
          <MenuItem>Contact Us</MenuItem>
        </Drawer>
      </div>
    );
  }
}
