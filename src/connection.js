const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
    port: process.env.BD_PORT,
    ssl: {
      rejectUnauthorized: false
    }
  }
});

module.exports = knex;