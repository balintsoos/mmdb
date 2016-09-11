const router = require('../../App/router')()
const Middlewares = require('../../Middlewares')
const utils = require('../../utils')
const Store = require('../../Store')

const store = new Store()
const movies = new Middlewares(store)

router.get('/', movies.getAll.bind(movies))

router.get('/:id', utils.parseId, movies.getOne.bind(movies))

router.post('/', movies.postOne.bind(movies))

module.exports = router
