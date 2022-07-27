DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS reset_codes;
DROP TABLE IF EXISTS products;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first VARCHAR NOT NULL CHECK (first != ''),
  last VARCHAR NOT NULL CHECK (last != ''),
  email VARCHAR NOT NULL CHECK (email !='') UNIQUE,
  password VARCHAR NOT NULL CHECK (password !='')
);

  CREATE TABLE reset_codes(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL REFERENCES users(email)  ,
    code VARCHAR NOT NULL,  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  name VARCHAR,
  price VARCHAR NOT NULL,
  imgurl VARCHAR
);
