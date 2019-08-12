const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

<<<<<<< HEAD
mongoose.connect('mongodb+srv://devops:<password>@cluster0-leivp.mongodb.net/omnistack8?retryWrites=true&w=majority', {
=======
mongoose.connect('mongodb+srv://devops:<password>@cluster0-leivp.mongodb.net/test?retryWrites=true&w=majority', {
>>>>>>> e3ad4bdcd60a659cec5598a11b1fd2fc125ea1a0
  useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)
