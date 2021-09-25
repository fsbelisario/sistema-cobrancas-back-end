const knex = require('../connection');
const bcrypt = require('bcrypt');
const validations = require('../validations/validations');

const login = async (req, res) => {
  try {
    await validations.schemaEnrollUser.validate(req.body);

    const { email, password } = req.body;

    const processedEmail = email.toLowerCase();
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  login
};