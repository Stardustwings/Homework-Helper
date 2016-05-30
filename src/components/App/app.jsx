import React from 'react'
import HeaderContainer from './../../containers/HeaderContainer'
import Footer from './../Footer/Footer'

export default class App extends React.Component{
  constructor() {
    super()
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
