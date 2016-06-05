import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class Login extends React.Component{
  constructor() {
    super()
    this.state = {username: '', password: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let username = this.usernameInput.getValue(),
        password = this.passwordInput.getValue()

    console.log(`${username} ${password}`)

    event.preventDefault()

    this.setState({username: '', password: ''})
    this.props.login({username, password})
  }
  componentWillMount() {
    this.ensureNotLoggedIn(this.props)
  }
  componentWillReceiveProps(nextProps) {
    this.ensureNotLoggedIn(nextProps)
  }
  ensureNotLoggedIn(props) {
    const { isAuthenticated, replace, redirect } = props

    if (isAuthenticated) {
      replace(redirect)
    }
  }
  render() {
    return (
      <div>
        <Card
          style={{
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          <CardTitle title='Welcome'  />
          <CardText>
            <form onSubmit={this.handleSubmit}>
              <TextField
                hintText='Username Field'
                floatingLabelText='Username'
                ref={(input) => this.usernameInput = input}
                required
              /><br />
              <TextField
                hintText='password Field'
                floatingLabelText='password'
                type='password'
                ref={(input) => this.passwordInput = input}
                required
              /><br />
              <RaisedButton
                label='Login'
                primary={true}
                type='submit'
                style={{
                  margin: '18px'
                }}
              />
            </form>
          </CardText>
        </Card>
      </div>
    )
  }
}
