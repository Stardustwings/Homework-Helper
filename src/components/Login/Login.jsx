import React from 'react'
import { Link } from 'react-router'

export default class Login extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <div>This is Login</div>
        <Link to='register'>register</Link>
      </div>
    )
  }
}