import React from 'react'
import { Link } from 'react-router'

export default class Register extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div>This is Register</div>
        <Link to='login'>login</Link>
      </div>
    )
  }
}