const createRouter = require('../../Api/router')
const get = require('../../utils/get')

module.exports = db => {
  const router = createRouter()

  get(router, '/', () => db.movies.all())

  get(router, '/:id', req => db.movies.find(+req.params.id))

  return router
}
