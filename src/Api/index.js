const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const compression = require('compression')

class Api {
  constructor(port, controllers) {
    this.port = port
    this.controllers = controllers

    this.server = express()
    this.init()
  }

  init() {
    this.server.use(helmet())
    this.server.use(compression())
    this.server.use(morgan('dev'))
    this.server.use(bodyParser.json())
    this.server.use(bodyParser.urlencoded({ extended: true }))

    if (this.controllers) {
      this.addControllers(this.controllers)
    }
  }

  addControllers(controllers) {
    Object.keys(controllers).forEach(route => {
      this.server.use(route, controllers[route])
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
