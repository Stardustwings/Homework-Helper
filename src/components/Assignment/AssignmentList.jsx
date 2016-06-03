import React from 'react'
import AssignmentItem from './AssignmentItem'

export default class AssignmentList extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      this.props.getAssignments(token)
    }
  }

  render() {
    return (
      <div>
        {(this.props.assignments.length > 0
            ? (
              <ul>
                {this.props.assignments.map(assignment =>
                  <AssignmentItem
                    key={assignment.title}
                    {...assignment}
                  />
                )}
              </ul>
            )
            : <div>The assignment-list is empty</div>
        )}
      </div>
    )
  }

}

export default AssignmentList
