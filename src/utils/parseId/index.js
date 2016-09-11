/* eslint no-param-reassign: ["error", { "props": false }] */

function parseId(req, res, next) {
  req.params.id = parseInt(req.params.id, 10)

  next()
}

module.exports = parseId
