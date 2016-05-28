import React from 'react'
import Header from 'Header/Header'
import Footer from 'Footer/Footer'
import Auth from 'Auth/Auth'

export default class App extends React.Component{
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <Header />
        <Auth />
        <Footer />
      </div>
    )
  }
}
