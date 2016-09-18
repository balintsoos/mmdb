const createRouter = require('../../Api/router')
const utils = require('../../utils')

module.exports = db => {
  const router = createRouter()

  router.get('/', db.tvshows.all)

  router.get('/:id', utils.parseId, req =>
    db.tvshows.find(+req.params.id))

  return router
}
