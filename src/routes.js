const express = require('express');
const users = require('./controllers/users');

const routes = express();

// Enroll user
routes.post('/users', users.enroll);

// Login
routes.post('/login', users.login);

// Verify authentication
// routes.use(verifyAuthentication);

// Retrieve and edit profile data
routes.get('/profile');
routes.put('/profile');

// Enroll client
routes.post('/clients');

module.exports = routes;