const express = require('express');

const routes = express();

// Enroll user
routes.post('/users');

// Login
routes.post('/login');

// Verify authentication
// routes.use(verifyAuthentication);

// Retrieve and edit profile data
routes.get('/profile');
routes.put('/profile');

// Enroll client
routes.post('/clients');

module.exports = routes;