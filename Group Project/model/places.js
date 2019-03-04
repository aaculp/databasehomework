const db = require('../db/config');

const Places = {};

Places.findAll = () => {
  return db.query(`SELECT * FROM fav`);
};

Places.findById = id => {
  return db.query(
    `
    SELECT fav.*
    FROM fav
    JOIN users ON users.id = fav.users_id
    WHERE users.id = $1
  `,
    [id]
  );
};

Places.create = (fav, userid) => {
  return db.one(
    `
    INSERT INTO fav
    (users_id, venue_name, venue_address, reviews, rating)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `,
    [fav.users_id, fav.venue_name, fav.venue_address, fav.reviews, fav.rating]
  );
};

Places.update = (fav, id) => {
  return db.one(
    `
    UPDATE fav SET
      reviews = $1,
      rating = $2
    WHERE id = $3
    RETURNING *
  `,
    [fav.reviews, fav.rating, id]
  );
};

Places.destroy = id => {
  return db.none(
    `
    DELETE FROM fav
    WHERE id = $1
  `,
    [id]
  );
};

// Places.findAllUsers = () => {
//   return db.query(`SELECT * FROM users`);
// };

// Places.loginCreate = users => {
//   return db.one(
//     `
//     INSERT INTO users
//     (username, password)
//     VALUES ($1, $2)
//     RETURNING *
//   `,
//     [users.username, users.password]
//   );
// };

module.exports = Places;
