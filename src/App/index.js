const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const compression = require('compression')

class App {
  constructor(port, controllers) {
    this.port = port
    this.controllers = controllers

    this.app = express()
    this.init()
  }

  init() {
    this.app.use(helmet())
    this.app.use(compression())
    this.app.use(morgan('dev'))
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))

    if (this.controllers) {
      this.addControllers(this.controllers)
    }
  }

  addControllers(controllers) {
    Object.keys(controllers).forEach(route => {
      this.app.use(route, controllers[route])
    })
  }

  start(callback = () => {}) {
    this.app.listen(this.port, callback.bind(null, this.port))
  }

  static create(port, controllers) {
    return new App(port, controllers)
  }
}

module.exports = App
