import React from 'react'
import SelectField from 'material-ui/SelectField'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'

export default class AddUserArea extends React.Component{
  constructor() {
    super()
    this.state= {
      username: '',
      password: '',
      type: 'student'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }
  handleSubmit(event) {
    let username = this.usernameInput.getValue(),
        password = this.passwordInput.getValue(),
        type = this.state.type,
        token = localStorage.getItem('token')

    console.log(`${username} ${password} ${type}`)

    event.preventDefault()

    if (token) {
      this.props.addUser({username, password, type, token})
    }

    this.setState({type: 'student'})
    this.usernameInput.input.value = ''
    this.passwordInput.input.value = ''
  }
  handleTypeChange(event, index, value) {
    this.setState({type: value})
  };
  render() {
    return (
      <Card
        style={{
          width: '38%',
          maxWidth: '500px',
          minWidth: '300px',
          marginTop: '40px',
          textAlign: 'center'
        }}
      >
        <CardTitle title='Add User'  />
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
            <SelectField
              value={this.state.type}
              onChange={this.handleTypeChange}
              ref={(input) => this.typeInput = input}
            >
              <MenuItem value='student' primaryText="Student" />
              <MenuItem value='ta' primaryText="Ta" />
              <MenuItem value='teacher' primaryText="Teacher" />
            </SelectField>
            <br />
            <RaisedButton
              label='Add'
              primary={true}
              type='submit'
              style={{
                margin: '18px'
              }}
            />
          </form>
        </CardText>
      </Card>
    )
  }
}

