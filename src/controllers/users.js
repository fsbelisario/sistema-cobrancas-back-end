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

const edit = async (req, res) => {
  try {
    await validations.schemaEditUser.validate(req.body);

    const { name, email, password, taxId, phone } = req.body;

    const profileData = {
      name
    };

    const processedEmail = email.toLowerCase();

    if (processedEmail !== req.user.email) {
      const emailValidation = await knex('users')
        .where({ email: processedEmail })
        .first();

      if (!!emailValidation) {
        return res.status(409).json('E-mail informado já cadastrado para outro usuário!');
      };
    };

    profileData.email = processedEmail;

    if (password) {
      profileData.password = await bcrypt.hash(password, 10);
    };

    if (taxId) {
      profileData.tax_id = taxId;
    } else {
      profileData.tax_id = null;
    };

    if (phone) {
      profileData.phone = phone;
    } else {
      profileData.phone = null;
    };

    const id = req.user.id;

    const updatedUser = await knex('users')
      .update(profileData)
      .where({ id })
      .returning('*');

    if (!updatedUser) {
      return res.status(400).json('Não foi possível atualizar o perfil do usuário.');
    };

    return res.status(200).json('Perfil do usuário atualizado com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  enroll,
  retrieve,
  edit
};