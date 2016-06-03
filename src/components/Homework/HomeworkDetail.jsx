import React from 'react'
import {Link} from 'react-router'

export default class HomeworkDetail extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      let assignment = this.props.assignment,
          author = this.props.author

      if (!this.props.content) {
        this.props.getHomework({assignment, author, token})
      }
    }
  }

  render() {
    return (
      <div>
          <div>{`assignment: ${this.props.assignment}`}</div>
          <div>{`author: ${this.props.author}`}</div>
          <div>{`title: ${this.props.title}`}</div>
          <div>{`content: ${this.props.content}`}</div>
      </div>
    )
  }

}

export default HomeworkDetail
