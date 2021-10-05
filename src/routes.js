const express = require('express');
const verifyAuthentication = require('./filters/verifyAuthentication');
const billings = require('./controllers/billings');
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

// Client
routes.post('/clients', clients.enroll);
routes.get('/clients', clients.list);
routes.put('/clients/:id', clients.edit);

// Billings
routes.post('/billings', billings.enroll);
routes.get('/billings', billings.list);

module.exports = routes;