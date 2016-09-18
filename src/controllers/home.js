const createRouter = require('../Api/router')

module.exports = () => {
  const router = createRouter()

  router.get('/', (req, res) => res.json({ message: 'Hi, welcome to the MMDB API' }))

  return router
}
