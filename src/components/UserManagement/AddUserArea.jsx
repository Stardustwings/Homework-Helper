import React from 'react'

export default class AddUserArea extends React.Component{
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let username = this.usernameInput.value,
        password = this.passwordInput.value,
        type = this.typeInput.value,
        token = localStorage.getItem('token')

    event.preventDefault()

    if (token) {
      this.props.addUser({username, password, type, token})
    }

    this.usernameInput.value = ''
    this.passwordInput.value = ''
    this.typeInput.value = 'student'
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type='text'
            name='username'
            ref={(input) => this.usernameInput = input}
            placeholder='用户名'
            required
          />
        </div>
        <div>
          <input
            type='password'
            name='password'
            ref={(input) => this.passwordInput = input}
            placeholder='密码'
            required
          />
        </div>
        <div>
          <select
            name='type'
            defaultValue='student'
            ref={(input) => this.typeInput = input}
          >
            <option value='student'>学生</option>
            <option value='ta'>助理</option>
            <option value='teacher'>老师</option>
          </select>
        </div>
        <button type='submit'>添加</button>
      </form>
    )
  }
}

