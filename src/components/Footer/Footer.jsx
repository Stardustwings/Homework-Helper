import React from 'react'
import styles from './foot.css'

console.log('test: ' + JSON.stringify(styles))


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
