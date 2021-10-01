const knex = require('../connection');
const validations = require('../validations/validations');

const enroll = async (req, res) => {
  try {
    await validations.schemaEnrollClient.validate(req.body);

    const { name, email, taxId, phone, zipCode, street, number, addressDetails, reference, district, city, state } = req.body;

    const emailValidation = await knex('clients')
      .where({ user_id: req.user.id })
      .andWhere({ email: email.toLowerCase() })
      .first();

    if (!!emailValidation) {
      return res.status(409).json('Cliente já cadastrado!');
    };

    const clientData = {
      user_id: req.user.id,
      name,
      email: email.toLowerCase(),
      tax_id: taxId,
      phone
    };

    if (zipCode) {
      clientData.zip_code = zipCode;
    };

    if (street) {
      clientData.street = street;
    };

    if (number) {
      clientData.number = number;
    };

    if (addressDetails) {
      clientData.address_details = addressDetails;
    };

    if (reference) {
      clientData.reference = reference;
    };

    if (district) {
      clientData.district = district;
    };

    if (city) {
      clientData.city = city;
    };

    if (state) {
      clientData.state = state;
    };

    const enrolledClient = await knex('clients')
      .insert(clientData)
      .returning('*');

    if (!enrolledClient) {
      return res.status(400).json('Não foi possível cadastrar o cliente.');
    };

    return res.status(200).json('Cliente cadastrado com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  enroll
};