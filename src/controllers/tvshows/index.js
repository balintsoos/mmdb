const createRouter = require('../../Api/router')
const get = require('../../utils/get')

module.exports = db => {
  const router = createRouter()

  get(router, '/', () => db.tvshows.all())

  get(router, '/:id', req => db.tvshows.find(+req.params.id))

  return router
}
