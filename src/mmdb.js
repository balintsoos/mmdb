/* eslint-disable no-console */
const App = require('./App')
const nconf = require('nconf')
const chalk = require('chalk')

// Controllers
const home = require('./controllers/home')
const movies = require('./controllers/movies')
const series = require('./controllers/series')

const controllers = {
  '/': home,
  '/movies': movies,
  '/series': series
}

nconf.argv().env()
nconf.defaults({
  PORT: 3000
})

const mmdb = new App(nconf.get('PORT'), controllers)

mmdb.start(port => {
  console.log(
    chalk.green('Server listening on'),
    chalk.underline.magenta(`http://localhost:${port}`)
  )
})

module.exports = mmdb
