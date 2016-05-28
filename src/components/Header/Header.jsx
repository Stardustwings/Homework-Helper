import React from 'react'
import styles from './header.css'

export default class Header extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <header className={styles.header} > This is header </header>
    )
  }
}
