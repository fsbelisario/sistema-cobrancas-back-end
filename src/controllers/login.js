const knex = require('../connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validations = require('../validations/validations');

const login = async (req, res) => {
  try {
    await validations.schemaLogin.validate(req.body);

    const { email, password } = req.body;

    const processedEmail = email.toLowerCase();

    const userValidation = await knex('users')
      .where({ email: processedEmail })
      .first();

    if (!userValidation) {
      return res.status(404).json('E-mail não cadastrado!');
    };

    const passwordValidation = await bcrypt.compare(password, userValidation.password);

    if (!passwordValidation) {
      return res.status(400).json('E-mail e/ou senha não conferem.');
    };

    const token = jwt.sign({ id: userValidation.id }, process.env.TOKEN_KEY);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  login
};