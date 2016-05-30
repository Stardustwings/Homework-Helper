import React from 'react'
import AssignmentItem from './AssignmentItem'

const AssignmentList = ({assignments}) => (
  <ul>
    {assignments.map(assignment =>
      <AssignmentItem
        key={assignment.title}
        {...assignment}
      />
    )}
  </ul>
)

export default AssignmentList
