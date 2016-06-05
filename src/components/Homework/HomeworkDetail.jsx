import React from 'react'
import {Card, CardTitle, CardText} from 'material-ui/Card'

export default class HomeworkDetail extends React.Component {
  componentDidMount() {
    let token = localStorage.getItem('token')

    if (token) {
      let assignment = this.props.assignment,
          author = this.props.author

      if (!this.props.content) {
        this.props.getHomework({assignment, author, token})
      }
    }
  }

  render() {
    return (
      <Card
        style={{
          maxWidth: '400px',
          margin: 'auto',
          minHeight: '350px',
          marginTop: '40px',
          marginBottom: '40px',
          textAlign: 'center'
        }}
      >
        <CardTitle title={this.props.title} subtitle={this.props.author}/>
        <CardText>
          {this.props.content}
        </CardText>
      </Card>
    )
  }

}

export default HomeworkDetail
