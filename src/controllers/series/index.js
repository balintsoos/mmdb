const router = require('../../App/router')()
const Middlewares = require('../../Middlewares')
const utils = require('../../utils')
const Store = require('../../Store')

const store = new Store()
const series = new Middlewares(store)

router.get('/', series.getAll.bind(series))

router.get('/:id', utils.parseId, series.getOne.bind(series))

router.post('/', series.postOne.bind(series))

module.exports = router
