/* eslint-disable no-console */
const App = require('./App')
const nconf = require('nconf')
const chalk = require('chalk')

// Controllers
const home = require('./controllers/home')

const controllers = {
  '/': home
}

nconf.argv().env()
nconf.defaults({
  PORT: 3000
})

const port = nconf.get('PORT')

const mmdb = new App(port, controllers)

mmdb.start(() => {
  console.log(
    chalk.green('Server listening on'),
    chalk.underline.magenta(`http://localhost:${port}`)
  )
})

module.exports = mmdb
