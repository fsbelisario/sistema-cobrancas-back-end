const express = require('express');
const verifyAuthentication = require('./filters/verifyAuthentication');
const users = require('./controllers/users');
const login = require('./controllers/login');

const routes = express();

// Enroll user
routes.post('/users', users.enroll);

// Login
routes.post('/login', login.login);

// Verify authentication
routes.use(verifyAuthentication);

// Retrieve and edit profile data
routes.get('/profile');
routes.put('/profile');

// Enroll client
routes.post('/clients');

module.exports = routes;