module.exports = rep => ({

  // Tries to find a movie by id
  find: id =>
    rep.oneOrNone('select * from movies where id = $1', id),

  // Returns all movie records
  all: () =>
    rep.any('select * from movies'),

  // Returns the total number of movies
  total: () =>
    rep.one('select count(*) from movies', [], a => +a.count)

})
