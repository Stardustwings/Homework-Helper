import React from 'react'
import {Link} from 'react-router'

export default class Publish extends React.Component{
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let title = this.titleInput.value,
        content = this.contentInput.value,
        token = localStorage.getItem('token')

    event.preventDefault()

    if (token) {
      this.props.addAssignment({title, content, token})
    }

    this.titleInput.value = ''
    this.contentInput.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='title'
              ref={(input) => this.titleInput = input}
              placeholder='标题'
              required
            />
          </div>
          <div>
            <textarea
              type='text'
              name='content'
              ref={(input) => this.contentInput = input}
              placeholder='具体要求'
              required
            />
          </div>
          <button type='submit'>发布</button>
        </form>

        <Link to='assignment-list'>assignment-list</Link>
      </div>
    )
  }
}

export default Publish
