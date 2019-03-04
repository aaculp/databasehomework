const db = require('../db/config');

const Remedi = {};

Remedi.findAll = () => {
  return db.query(`SELECT * FROM users`);
};

Remedi.findAllResults = () => {
  return db.query(`SELECT * FROM foods`);
};


Remedi.create = (users) => {
  return db.one(
    `
    INSERT INTO users
    (name, username, password)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [users.name, users.username, users.password]
  );
};

Remedi.update = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      gluten = $1,
      vegan = $2,
      pescatarian = $3,
      halal = $4,
      keto = $5,
      dairy = $6,
      vegetarian = $7,
      kosher = $8,
      med = $9,
      paleo = $10
    WHERE id = $11
    RETURNING *
  `,
    [users.gluten, users.vegan, users.pescatarian, users.halal, users.keto, users.dairy, users.vegetarian, users.kosher, users.med, users.paleo, id]
  );
};

Remedi.updateFeelings = (users, id) => {
  return db.one(
    `
    UPDATE users SET
      breakfast = $1,
      lunch = $2,
      dinner = $3,
      headache = $4,
      fatigue = $5,
      alert = $6,
      anxious = $7,
      bloated = $8,
      stomacheache = $9,
      low_energy = $10,
      lethargic = $11
    WHERE id = $12
    RETURNING *
  `,
    [users.breakfast, users.lunch, users.dinner, users.headache, users.fatigue, users.alert, users.anxious, users.bloated, users.stomacheache, users.low_energy, users.lethargic, id]
  );
};

module.exports = Remedi;
