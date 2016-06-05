import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {Card, CardTitle, CardText} from 'material-ui/Card'

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
      <Card
        style={{
          verticalAlign: 'top',
          marginTop: '40px',
          width: '40%',
          minWidth: '320px',
          maxWidth: '520px'
        }}
      >
        <CardTitle title='User List'  />
        <CardText
          style={{
            marginTop: '-20px'
          }}
        >
          <Table
            selectable={false}
            height='250px'
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
        </CardText>
      </Card>
    )
  }

}
