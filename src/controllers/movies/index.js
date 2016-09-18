const createRouter = require('../../Api/router')
const utils = require('../../utils')

module.exports = db => {
  const router = createRouter()

  router.get('/', db.movies.all)

  router.get('/:id', utils.parseId, req =>
    db.movies.find(+req.params.id))

  return router
}
