import React from 'react'
import {Link} from 'react-router'

const AssignmentItem = ({title}) => (
  <li>
    <Link to={`assignment-detail/${title}`}>{title}</Link>
  </li>
)

export default AssignmentItem

