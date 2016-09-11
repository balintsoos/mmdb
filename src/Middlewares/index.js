class Middlewares {
  constructor(store) {
    this.store = store
  }

  getAll(req, res) {
    this.store.read((err, result) => {
      if (err) {
        return res.status(400).json(err)
      }

      return res.json(result)
    })
  }

  getOne(req, res) {
    this.store.readOneById(req.params.id, (err, result) => {
      if (err) {
        return res.status(400).json(err)
      }

      return res.json(result)
    })
  }

  postOne(req, res) {
    this.store.createOne(req.body, (err, result) => {
      if (err) {
        return res.status(400).json(err)
      }

      return res.status(201).json(result)
    })
  }
}

module.exports = Middlewares
