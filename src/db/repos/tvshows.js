module.exports = rep => ({

  // Tries to find a tv show by id
  find: id =>
    rep.oneOrNone('select * from tvshows where id = $1', id),

  // Returns all tv show records
  all: () =>
    rep.any('select * from tvshows'),

  // Returns the total number of tv shows
  total: () =>
    rep.one('select count(*) from tvshows', [], a => +a.count)

})
