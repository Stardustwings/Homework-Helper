'use strict'

const koa = require('koa')
const Router = require('koa-router')
const views = require('co-views')
const logger = require('koa-logger')
const serve = require('koa-static')
const bodyParser = require('koa-bodyparser')
const jwt = require('koa-jwt')

let data = {
  assignments: [
    {title: 'firstAssignment', content: 'firstAssignment'},
    {title: 'secondAssignment', content: 'secondAssignment'},
    {title: 'thirdAssignment', content: 'thirdAssignment'},
  ],
  homeworks: [
    {title: 'firstHomework', content: 'firstHomework', author: 'ta1', assignment: 'firstAssignment'},
    {title: 'secondHomework', content: 'secondHomework', author: 'stu1', assignment: 'firstAssignment'}
  ],
  users: [
    {username: 'admin', password: 'admin', type: 'teacher'},
    {username: 'ta1', password: 'ta1', type: 'ta'},
    {username: 'stu1', password: 'stu1', type: 'student'}
  ]
}

const port = '8000'
const secret = 'hs-secret'

const app = koa()
const router = new Router({
        prefix: '/api'
      })
const render = views('./dist', {
  map: {html: 'swig'}
})

function * fallback(next) {
  this.body = yield render('index')
  // this.status = 404
}

function * getAllAssignments(next) {
  this.type = 'application/json'
  this.body = {assignments: data.assignments}
}

function * getAssignment(next) {
  let title = this.params.id

  this.body = {assignment: data.assignments.filter(item => item.title === title)[0]}
}

function * addAssignment(next) {
  let title = this.request.body.title
  let content = this.request.body.content

  for (let i = 0; i < data.assignments.length; i++) {
    if (title === data.assignments[i].title) {
      data.assignments.splice(i, 1)
      break
    }
  }

  data.assignments.push({title, content})

  // this.body = {assignments: data.assignments}

  this.status = 201
}

function * getAllHomeworks(next) {
  let assignment = this.params.id

  this.body = {homeworks: data.homeworks.filter(item => item.assignment === assignment)}
}

function * getHomework(next) {
  let params = this.params.id.split('&')
  let assignment = params[0]
  let author = params[1]

  this.body = {homework: data.homeworks.filter(item => (item.assignment === assignment && item.author === author))[0]}
}

function * addHomework(next) {
  let title = this.request.body.title
  let content = this.request.body.content
  let author = this.request.body.author
  let assignment = this.request.body.assignment

  for (let i = 0; i < data.homeworks.length; i++) {
    if (assignment === data.homeworks[i].assignment && author === data.homeworks[i].author) {
      data.homeworks.splice(i, 1)
      break
    }
  }

  data.homeworks.push({title, content, author, assignment})

  // this.body = {homeworks: data.homeworks}

  this.status = 201
}

function * getAllUsers(next) {
  if (this.state.user.type !== 'teacher') {
    this.status = 401
    // this.body = this.state.user
    return
  }

  this.body = {users: data.users.map(user => ({username: user.username, type: user.type}))}
}

function * addUser(next) {
  let username = this.request.body.username
  let password = this.request.body.password
  let type = this.request.body.type

  if (this.state.user.type !== 'teacher') {
    this.status = 401
    // this.body = this.state.user
    return
  }

  for (let i = 0; i < data.users.length; i++) {
    if (username === data.users[i].username) {
      data.users.splice(i, 1)
      break
    }
  }

  data.users.push({username, password, type})

  this.body = {users: data.users}

  this.status = 201
}

function * login(next) {
  let username = this.request.body.username
  let password = this.request.body.password

  // console.log(`${username} ${password}`)

  for (let i = 0; i < data.users.length; i++) {
    if (username === data.users[i].username) {
      if (password === data.users[i].password) {
        let type = data.users[i].type
        let token = jwt.sign({username, type}, this.state.secret)

        this.body = {token}
        return
      } else {
        this.status = 401
        this.body = 'Wrong password'
        return
      }
    }
  }

  this.status = 401
  this.body = 'Username doesn\'t exist'
}

router
  .get('/assignments', getAllAssignments)
  .get('/assignment/:id', getAssignment)
  .post('/assignment', addAssignment)
  .get('/homeworks/:id', getAllHomeworks)
  .get('/homework/:id', getHomework)
  .post('/homework', addHomework)
  .get('/users', getAllUsers)
  .post('/user', addUser)
  .post('/login', login)

app.use(logger())

app.use(serve('./dist'))
app.use(bodyParser())

app.use(jwt({ secret: secret }).unless({ path: [/^\/api\/login/] }))
app.use(function * (next){
  this.state.secret = secret
  yield next
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(fallback)

app.listen(port)
console.log(`listening on port ${port}`)
