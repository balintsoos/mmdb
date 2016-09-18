/* eslint no-param-reassign: ["error", { "props": false }] */
const nconf = require('nconf')
const promise = require('bluebird')
const parseDbUrl = require('parse-database-url')

const movies = require('./repos/movies')
const tvshows = require('./repos/tvshows')

const repos = { movies, tvshows }

const options = {
  promiseLib: promise,

  extend: obj => {
    obj.movies = repos.movies(obj)
    obj.tvshows = repos.tvshows(obj)
  }
}

const pgp = require('pg-promise')(options)

const dbUrl = nconf.get('DATABASE_URL')

const config = Object.assign({}, parseDbUrl(dbUrl), {
  ssl: true
})

const db = pgp(config)

module.exports = { pgp, db }
