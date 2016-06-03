import React from 'react'
import {Link} from 'react-router'
import HomeworkItem from './HomeworkItem'

export default class AssignmentDetail extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      let assignment = this.props.params.id

      this.props.getHomeworks({assignment, token})

      if (!this.props.content) {
        this.props.getAssignment({title: assignment, token})
      }
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>{`title: ${this.props.title}`}</div>
          <div>{`content: ${this.props.content}`}</div>
        </div>
        <div>
          {(this.props.homeworks.length > 0
              ? (
                <ul>
                  {this.props.homeworks.map(homework =>
                    <HomeworkItem
                      key={`${homework.assignment}&${homework.author}`}
                      {...homework}
                    />
                  )}
                </ul>
              )
              : <div>The homework-list is empty</div>
          )}
        </div>
        <Link to={`/submit/${this.props.title}`}>submit</Link>
      </div>
    )
  }

}

export default AssignmentDetail
