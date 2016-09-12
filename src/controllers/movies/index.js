const router = require('../../Api/router')()
const Endpoints = require('../../Api/Endpoints')
const utils = require('../../utils')
const Store = require('../../Store')

const store = new Store()
const movies = new Endpoints(store)

router.get('/', movies.getAll.bind(movies))

router.get('/:id', utils.parseId, movies.getOne.bind(movies))

router.post('/', movies.postOne.bind(movies))

module.exports = router
