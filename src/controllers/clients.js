const knex = require('../connection');
const validations = require('../validations/validations');

const enroll = async (req, res) => {
  try {
    await validations.schemaEnrollClient.validate(req.body);

    const { name, email, taxId, phone, zipCode, street, number, addressDetails, district, city, state } = req.body;

    return res.status(200).json('Cliente cadastrado com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  enroll
};