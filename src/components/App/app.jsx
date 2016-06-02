import React from 'react'
import HeaderContainer from './../../containers/HeaderContainer'
import Footer from './../Footer/Footer'
import jwtDecode from 'jwt-decode'

export default class App extends React.Component{
  constructor(props) {
    let token = localStorage.getItem('token')

    super(props)

    if (token) {
      let user = jwtDecode(token)
      this.props.autoLogin(user)
    }


  }
  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
