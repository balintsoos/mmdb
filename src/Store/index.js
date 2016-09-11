class Store {
  constructor() {
    this.db = []
  }

  read(cb) {
    return cb(null, this.db)
  }

  readOneById(id, cb) {
    if (!Number.isInteger(id) || id < 0 || id >= this.db.length) {
      return cb({ err: 'invalid id' })
    }

    return cb(null, this.db[id])
  }

  createOne(data, cb) {
    this.db.push(data)

    return cb(null, { id: this.db.length - 1 })
  }

  static create() {
    return new Store()
  }
}


module.exports = Store
