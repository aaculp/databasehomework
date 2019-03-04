DROP DATABASE places;
CREATE DATABASE places;
\c places

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS fav (
  id BIGSERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  venue_name VARCHAR(255),
  venue_address VARCHAR(255),
  reviews VARCHAR(1000),
  rating INT
);

-- CREATE TABLE IF NOT EXISTS venues (
--   id BIGSERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   address VARCHAR(255),
--   fav_id INT REFERENCES fav(id)
-- );
