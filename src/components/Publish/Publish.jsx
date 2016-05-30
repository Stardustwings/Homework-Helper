import React from 'react'
import {Link} from 'react-router'

export default class Publish extends React.Component{
  constructor() {
    super()
    this.state = {title: '', content: ''}
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleContentChange = this.handleContentChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTitleChange(event) {
   this.setState({title: event.target.value})
  }
  handleContentChange(event) {
   this.setState({content: event.target.value})
  }
  handleSubmit(event) {
    let { title, content} = this.state

    event.preventDefault()

    this.setState({title: '', content: ''})
    this.props.addAssignment(title, content)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='title'
              value={this.state.title}
              placeholder='标题'
              onChange={this.handleTitleChange}
              required
            />
          </div>
          <div>
            <textarea
              type='text'
              name='content'
              value={this.state.content}
              placeholder='具体要求'
              onChange={this.handleContentChange}
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
