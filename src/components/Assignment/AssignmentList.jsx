import React from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {Card, CardTitle, CardText} from 'material-ui/Card'

class AssignmentList extends React.Component {
  constructor(props) {
    super(props)

    this.goTo = this.goTo.bind(this)
  }
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      this.props.getAssignments(token)
    }
  }
  goTo(title) {
    return () => this.props.push(`/assignment-detail/${title}`)
  }
  render() {
    return (
      <Card
        style={{
          margin: 'auto',
          marginTop: '40px',
          marginBottom: '40px',
          width: '80%',
          minWidth: '500px',
          maxWidth: '800px'
        }}
      >
        <CardTitle title='Assignment List'  />
        <CardText
          style={{
            marginTop: '-20px'
          }}
        >
          <Table
            selectable={false}
          >
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Title</TableHeaderColumn>
                <TableHeaderColumn>Publisher</TableHeaderColumn>
                <TableHeaderColumn>Date</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
              showRowHover={true}
            >
              {this.props.assignments.map(assignment =>
                <TableRow key={assignment.title}>
                  <TableRowColumn
                    style={{
                      cursor: 'pointer'
                    }}
                    onTouchTap={this.goTo(assignment.title)}
                  >
                    {assignment.title}
                  </TableRowColumn>
                  <TableRowColumn>{assignment.publisher}</TableRowColumn>
                  <TableRowColumn>{assignment.date}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardText>
      </Card>
    )
  }

}

export default AssignmentList
