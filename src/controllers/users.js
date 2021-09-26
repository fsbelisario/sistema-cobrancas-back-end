const knex = require('../connection');
const bcrypt = require('bcrypt');
const validations = require('../validations/validations');

const enroll = async (req, res) => {
  try {
    await validations.schemaEnrollUser.validate(req.body);

    const { name, email, password } = req.body;

    const processedEmail = email.toLowerCase();

    const userValidation = await knex('users')
      .where({ email: processedEmail })
      .first();

    if (!!userValidation) {
      return res.status(409).json('E-mail já cadastrado!');
    };

    const hash = await bcrypt.hash(password, 10);

    const enrolledUser = await knex('users')
      .insert({ name, email: processedEmail, password: hash })
      .returning('*');

    if (!enrolledUser) {
      return res.status(400).json('Não foi possível cadastrar o usuário.');
    };

    return res.status(200).json('Usuário cadastrado com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

const retrieve = async (req, res) => {
  return res.status(200).json(req.user);
};

module.exports = {
  enroll,
  retrieve
};