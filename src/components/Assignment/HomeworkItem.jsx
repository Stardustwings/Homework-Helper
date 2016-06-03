import React from 'react'
import {Link} from 'react-router'

const HomeworkItem = ({assignment, author, title}) => (
  <li>
    <Link to={`homework/${assignment}&${author}`}>{title}</Link>
    <span>{author}</span>
  </li>
)

export default HomeworkItem
