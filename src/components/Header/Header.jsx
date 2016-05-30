import React from 'react'
import {Link} from 'react-router'
import styles from './header.css'

export default class Header extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <header>
        <span className={styles.header}>This is Header</span>
        {this.props.user.username ? <span>{this.props.user.username}</span> : null}
        <Link to='login'>login</Link>
        <button type='button' onClick={this.props.logout}>logout</button>
      </header>
    )
  }
}
