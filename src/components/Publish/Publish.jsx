import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'

export default class Publish extends React.Component{
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let title = this.titleInput.getValue(),
        content = this.contentInput.getValue(),
        publisher = this.props.user.username,
        date = moment().format('MMMM Do YYYY'),
        token = localStorage.getItem('token')

    event.preventDefault()

    console.log(`${title} ${content}`)

    if (token) {
      this.props.addAssignment({title, content, publisher, date, token})
    }

    this.titleInput.input.value = ''
    this.contentInput.getInputNode().value = ''

    this.props.replace('/assignment-list')
  }
  render() {
    return (
      <Card
        style={{
          maxWidth: '400px',
          margin: 'auto',
          marginTop: '40px',
          marginBottom: '40px',
          textAlign: 'center'
        }}
      >
        <CardTitle title='Publish Assignment'  />
        <CardText>
          <form onSubmit={this.handleSubmit}>
            <TextField
              hintText='Title Field'
              floatingLabelText='Title'
              ref={(input) => this.titleInput = input}
              required
            /><br />
            <TextField
              hintText='Content Field'
              floatingLabelText='Content'
              multiLine={true}
              rows={3}
              ref={(input) => this.contentInput = input}
              required
              style={{
                textAlign: 'left'
              }}
            /><br />
            <RaisedButton
              label='Publish'
              primary={true}
              type='submit'
              style={{
                margin: '18px'
              }}
            />
          </form>
        </CardText>
      </Card>
    )
  }
}

export default Publish
