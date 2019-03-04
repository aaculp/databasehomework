const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(`
    SELECT * FROM users
    WHERE username = $1
  `, [userName]);
};

User.create = users => {
  return db.one(`
    INSERT INTO users
    (username, email, password_digest, firstname, lastname, password)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
  `, [users.username, users.email, users.password_digest, users.firstname, users.lastname, users.password]);
};

User.findUserFav = id => {
  return db.manyOrNone(`
    SELECT * FROM users
    WHERE id = $1
    `, [id])
};

module.exports = User;
