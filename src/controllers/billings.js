const knex = require('../connection');
const format = require('date-fns/format');
const validations = require('../validations/validations');

const edit = async (req, res) => {

};

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
  try {
    const billingsList = await knex('billings')
      .leftJoin('clients', 'clients.id', 'billings.client_id')
      .select('billings.id', 'clients.name', 'billings.description',
        'billings.due_date', 'billings.value', 'billings.status')
      .orderBy('billings.due_date');

    if (!billingsList) {
      return res.status(404).json('Sem cobranças cadastradas.');
    };

    for (let i = 0; i < billingsList.length; i++) {
      if (billingsList[i].status === 'PENDENTE' && format(Date.parse(billingsList[i].due_date), 'yyyy-MM-dd') < format(new Date(), 'yyyy-MM-dd')) {
        billingsList[i].status = 'VENCIDO';
      };
    };

    return res.status(200).json(billingsList);
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  edit,
  enroll,
  list
};