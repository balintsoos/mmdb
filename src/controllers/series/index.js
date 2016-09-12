const router = require('../../Api/router')()
const Endpoints = require('../../Api/Endpoints')
const utils = require('../../utils')
const Store = require('../../Store')

const initialData = require('../../../data/series')

const store = new Store(initialData)
const series = new Endpoints(store)

router.get('/', series.getAll.bind(series))

router.get('/:id', utils.parseId, series.getOne.bind(series))

router.post('/', series.postOne.bind(series))

module.exports = router
