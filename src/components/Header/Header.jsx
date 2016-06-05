import React from 'react'
import {Link} from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import Person from 'material-ui/svg-icons/social/person'
import PowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new'

export default class Header extends React.Component{
  constructor() {
    super()
    this.state = {open: false}
    this.handleToggle = this.handleToggle.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.goTo = this.goTo.bind(this)
  }
  handleToggle() {
    if (this.props.user.username) {
      this.setState({open: !this.state.open})
    }
  }
  handleLogout() {
    this.handleToggle()
    this.props.logout()
  }
  goTo(url) {
    return () => {
      this.props.push(url)
      this.handleToggle()
    }
  }
  render() {
    return (
      <div>
        <AppBar
          title={<span>Homework Helper</span>}
          iconElementLeft={
            <IconButton
              onTouchTap={this.handleToggle}
            >
              <NavigationMenu />
            </IconButton>
          }
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem leftIcon={<Person />}>
            {this.props.user.username}
          </MenuItem>
          <Divider />
          <MenuItem onTouchTap={this.goTo('/assignment-list')}>assignment-list</MenuItem>

          {this.props.user.type === 'teacher'
          ? (<MenuItem onTouchTap={this.goTo('/publish')}>publish</MenuItem>)
          : null
          }
          {this.props.user.type === 'teacher'
          ? (<MenuItem onTouchTap={this.goTo('/user-management')}>user-management</MenuItem>)
          : null
          }
          <Divider />
          <MenuItem
            onTouchTap={this.handleLogout}
            leftIcon={<PowerSettingsNew/>}
          >
            logout
          </MenuItem>
        </Drawer>
      </div>
    )
  }
}
