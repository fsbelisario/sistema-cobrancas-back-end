CREATE DATABASE "billing_system";

DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS clients;

DROP TABLE IF EXISTS billing;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  tax_id CHAR(11) UNIQUE,
  phone VARCHAR(11)
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  tax_id CHAR(11) UNIQUE NOT NULL,
  phone VARCHAR(11) NOT NULL,
  zip_code CHAR(8),
  street VARCHAR,
  number VARCHAR,
  address_details VARCHAR,
  reference VARCHAR,
  district VARCHAR,
  city VARCHAR,
  state CHAR(2)
);

CREATE TABLE billing (
  id SERIAL PRIMARY KEY,
  client_id INTEGER NOT NULL REFERENCES clients(id),
  value INTEGER NOT NULL,
  status VARCHAR
); 