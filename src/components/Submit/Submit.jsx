import React from 'react'
import {Link} from 'react-router'
import {Card, CardTitle, CardText} from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class Submit extends React.Component{
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    let assignment = this.props.params.id,
        author = this.props.user.username,
        title = this.titleInput.getValue(),
        content = this.contentInput.getValue(),
        token = localStorage.getItem('token')

    // console.log(`${assignment} ${author} ${title} ${content} `)

    event.preventDefault()

    if (token) {
      this.props.addHomework({assignment, author, title, content, token})
    }

    this.titleInput.input.value = ''
    this.contentInput.getInputNode().value = ''

    this.props.push(`/assignment-detail/${assignment}`)
  }
  render() {
    return (
      <Card
        style={{
          maxWidth: '400px',
          margin: 'auto',
          marginTop: '40px',
          textAlign: 'center'
        }}
      >
        <CardTitle title='Submit Homework' subtitle={`To ${this.props.params.id}`}/>
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
              label='Submit'
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

export default Submit
