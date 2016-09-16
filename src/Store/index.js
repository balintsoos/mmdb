class Store {
  constructor(initialData) {
    this.db = []

    this.init(initialData)
  }

  init(initialData) {
    initialData.forEach(item => {
      this.createOne(item)
    })
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

  createOne(data, cb = () => {}) {
    const item = Object.assign({}, data, {
      id: this.db.length
    })

    this.db.push(item)

    return cb(null, item)
  }

  static create() {
    return new Store()
  }
}


module.exports = Store
