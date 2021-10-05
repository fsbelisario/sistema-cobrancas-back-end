const knex = require('../connection');
const validations = require('../validations/validations');

const enroll = async (req, res) => {
  try {
    await validations.schemaEnrollBilling.validate(req.body);

    const { clientId, description, status, value, dueDate } = req.body;

    const clientValidation = await knex('clients')
      .where({ id: clientId })
      .first();

    if (!clientValidation) {
      return res.status(409).json('O cliente informado não foi localizado.');
    };

    if (status.toUpperCase() !== 'PAGO' && status.toUpperCase() !== 'PENDENTE') {
      return res.status(404).json('O status da cobrança deve ser PAGO ou PENDENTE.');
    };

    if (value <= 0) {
      return res.status(404).json('O valor da cobrança deve ser maior que zero.');
    };

    const billingData = {
      client_id: clientId,
      description,
      status: status.toUpperCase(),
      value,
      due_date: dueDate
    };

    const enrolledBilling = await knex('billings')
      .insert(billingData)
      .returning('*');

    if (!enrolledBilling) {
      return res.status(400).json('Não foi possível cadastrar a cobrança.');
    };

    return res.status(200).json('Cobrança cadastrada com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

const list = async (req, res) => {

};

module.exports = {
  enroll,
  list
};