import React from 'react'

const UserItem = ({username, type}) => (
  <li>
    <span>{username}</span>
    <span>{type}</span>
  </li>
)

export default UserItem
