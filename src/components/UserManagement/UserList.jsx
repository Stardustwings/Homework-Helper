import React from 'react'
import UserItem from './UserItem'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

export default class UserList extends React.Component {
  constructor(props) {
    super(props)

    // console.log(this.props)
  }
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      this.props.getUsers(token)
    }
  }

  render() {
    return (
      <div style={{
        verticalAlign: 'top',
        marginTop: '40px',
        width: '38%',
        minWidth: '300px',
        maxWidth: '500px'
      }}>
        {(this.props.users.length > 0
            ? (
              <Table
                selectable={false}
                height='310px'
              >
                <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                >
                  <TableRow>
                    <TableHeaderColumn>Username</TableHeaderColumn>
                    <TableHeaderColumn>Type</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  displayRowCheckbox={false}
                  showRowHover={true}
                >
                  {this.props.users.map(user =>
                    <TableRow key={user.username}>
                      <TableRowColumn>{user.username}</TableRowColumn>
                      <TableRowColumn>{user.type}</TableRowColumn>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )
            : <div>The user-list is empty</div>
        )}
      </div>
    )
  }

}
