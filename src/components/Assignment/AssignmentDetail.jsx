import React from 'react'
import {Link} from 'react-router'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'

export default class AssignmentDetail extends React.Component {
  constructor(props) {
    super(props)

    this.goTo = this.goTo.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
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
  goTo(id) {
    return () => this.props.push(`/homework-detail/${id}`)
  }
  handleSubmit() {
    this.props.push(`/submit/${this.props.params.id}`)
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}
      >
        <Card
          style={{
            width: '45%',
            maxWidth: '450px',
            margin: 'auto',
            height: '430px',
            marginTop: '40px',
            marginBottom: '40px',
            textAlign: 'center'
          }}
        >
          <CardTitle title={this.props.title} subtitle={`admin 2016-4-1`}/>
          <CardText>
            {this.props.content}
          </CardText>
        </Card>

        <Card
          style={{
            margin: 'auto',
            marginTop: '40px',
            marginBottom: '40px',
            width: '40%',
            minWidth: '400px'
          }}
        >
          <CardTitle
            title={
              <div>
                <span>Homework List</span>
                <RaisedButton
                  label='Submit'
                  primary={true}
                  onTouchTap={this.handleSubmit}
                  style={{
                    float: 'right'
                  }}

                />
              </div>
            }
          />
          <CardText
            style={{
              marginTop: '-30px'
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
                  <TableHeaderColumn>Title</TableHeaderColumn>
                  <TableHeaderColumn>Submitter</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                showRowHover={true}
              >
                {this.props.homeworks.map(homework =>
                  <TableRow key={`${homework.assignment}&${homework.author}`}>
                    <TableRowColumn
                      style={{
                        cursor: 'pointer'
                      }}
                      onTouchTap={this.goTo(`${homework.assignment}&${homework.author}`)}
                    >
                      {homework.title}
                    </TableRowColumn>
                    <TableRowColumn>{homework.author}</TableRowColumn>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardText>
        </Card>
      </div>
    )
  }

}

export default AssignmentDetail
