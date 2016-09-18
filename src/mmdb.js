/* eslint-disable no-console */
const Api = require('./Api')
const nconf = require('nconf')
const chalk = require('chalk')

nconf.argv().env()
nconf.defaults({
  PORT: 3000,
  DATABASE_URL: 'postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT:/*DATABASE*'
})

// Database
const { db } = require('./db')

// Controllers
const home = require('./controllers/home')
const movies = require('./controllers/movies')
const tvshows = require('./controllers/tvshows')

const controllers = {
  '/': home,
  '/movies': movies,
  '/tvshows': tvshows
}

const mmdb = new Api({
  port: nconf.get('PORT'),
  database: db,
  controllers
})

mmdb.start(port => {
  console.log(
    chalk.green('Server listening on'),
    chalk.underline.magenta(`http://localhost:${port}`)
  )
})

module.exports = mmdb
