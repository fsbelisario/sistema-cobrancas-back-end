const knex = require('../connection');
const format = require('date-fns/format');

const retrieve = async (req, res) => {
  try {
    let overdueClients = 0;
    let onTimeClients = 0;
    let overdueBillings = 0;
    let dueBillings = 0;
    let paidBillings = 0;

    const clientsList = await knex('clients');

    if (!!clientsList) {
      for (let i = 0; i < clientsList.length; i++) {
        const status = await knex('billings')
          .where({ client_id: clientsList[i].id })
          .andWhere({ status: 'PENDENTE' })
          .andWhere('due_date', '<', format(new Date(), 'yyyy-MM-dd'));

        if (status.length > 0) {
          overdueClients++;
        } else {
          onTimeClients++;
        };
      };
    };

    const billingsList = await knex('billings');

    if (!!billingsList) {
      for (let i = 0; i < billingsList.length; i++) {
        if (billingsList[i].status === 'PENDENTE') {
          if (format(Date.parse(billingsList[i].due_date), 'yyyy-MM-dd') < format(new Date(), 'yyyy-MM-dd')) {
            overdueBillings += billingsList[i].value;
          } else {
            dueBillings += billingsList[i].value;
          };
        } else {
          paidBillings += billingsList[i].value;
        };
      };
    };

    const managementInfo = {
      overdueClients,
      onTimeClients,
      overdueBillings,
      dueBillings,
      paidBillings
    };

    return res.status(200).json(managementInfo);
  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  retrieve
};