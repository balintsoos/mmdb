module.exports = (router, url, handler) => {
  router.get(url, (req, res) => {
    handler(req)
      .then(data => res.json(data))
      .catch(err => res.json({ err }))
  })
}
