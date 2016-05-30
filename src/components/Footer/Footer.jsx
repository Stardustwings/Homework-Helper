import React from 'react'
import styles from './foot.css'

export default class Footer extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <footer className={styles.footer} > This is footer </footer>
    )
  }
}
