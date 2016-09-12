const router = require('../Api/router')()

router.get('/', (req, res) => res.json({ message: 'Hi, welcome to the MMDB API' }))

module.exports = router
