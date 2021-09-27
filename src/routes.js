const express = require('express');
const verifyAuthentication = require('./filters/verifyAuthentication');
const clients = require('./controllers/clients');
const login = require('./controllers/login');
const users = require('./controllers/users');

const routes = express();

// Enroll user
routes.post('/users', users.enroll);

// Login
routes.post('/login', login.login);

// Verify authentication
routes.use(verifyAuthentication);

// Retrieve and edit profile data
routes.get('/profile', users.retrieve);
routes.put('/profile', users.edit);

// Enroll client
routes.post('/clients', clients.enroll);

module.exports = routes;