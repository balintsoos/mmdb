const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')

class Api {
  constructor({ port, controllers, database }) {
    this.port = port
    this.controllers = controllers
    this.database = database

    this.server = express()
    this.init()
  }

  init() {
    this.server.use(compression())
    this.server.use(helmet())
    this.server.use(cors())
    this.server.use(morgan('dev'))
    this.server.use(bodyParser.json())
    this.server.use(bodyParser.urlencoded({ extended: true }))

    if (this.controllers) {
      this.addControllers(this.controllers)
    }
  }

  addControllers(controllers) {
    Object.keys(controllers).forEach(route => {
      this.server.use(route, controllers[route](this.database))
    })
  }

  start(callback = () => {}) {
    this.server.listen(this.port, callback.bind(null, this.port))
  }

  static create(port, controllers) {
    return new Api(port, controllers)
  }
}

module.exports = Api
