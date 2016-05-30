import React from 'react'
import AssignmentItem from './AssignmentItem'

const AssignmentList = ({assignments}) => (
  <div>
    <ul>
      {assignments.map(assignment =>
        <AssignmentItem
          key={assignment.title}
          {...assignment}
        />
      )}
    </ul>
  </div>
)

export default AssignmentList
