const knex = require('../connection');
const validations = require('../validations/validations');

const enroll = async (req, res) => {
  const { name, email, password } = req.body;

  try {


  } catch (error) {
    return res.status(400).json(error.message);
  };
};

module.exports = {
  enroll
};