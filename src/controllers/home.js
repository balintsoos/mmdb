const router = require('../App/router')()

router.get('/', (req, res) => res.send('Hi, welcome to the MMDB API'))

module.exports = router
