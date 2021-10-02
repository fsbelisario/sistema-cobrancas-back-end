const yup = require('./config');

const numberValidation = RegExp(/^\d+$/);

const schemaEnrollUser = yup.object().shape({
  name: yup.string().max(50).required('O campo Nome é obrigatório.'),
  email: yup.string().max(50).email().required('O campo E-mail é obrigatório.'),
  password: yup.string().min(5).max(20).required('O campo Senha é obrigatório.')
});

const schemaLogin = yup.object().shape({
  email: yup.string().email().required('O campo E-mail é obrigatório.'),
  password: yup.string().required('O campo Senha é obrigatório.')
});

const schemaEditUser = yup.object().shape({
  name: yup.string().max(50).required('O campo Nome é obrigatório.'),
  email: yup.string().max(50).email().required('O campo E-mail é obrigatório.'),
  password: yup.string().min(5).max(20)
});

const schemaEnrollClient = yup.object().shape({
  name: yup.string().max(50).required('O campo Nome é obrigatório.'),
  email: yup.string().max(50).email().required('O campo E-mail é obrigatório.'),
  taxId: yup.string().length(11).matches(numberValidation, 'O campo CPF deve conter apenas números.').required('O campo CPF é obrigatório.'),
  phone: yup.string().min(10).max(11).matches(numberValidation, 'O campo Telefone deve conter apenas números.').required('O campo Telefone é obrigatório.'),
  zipCode: yup.string(),
  street: yup.string(),
  number: yup.string(),
  addressDetails: yup.string(),
  reference: yup.string(),
  district: yup.string(),
  city: yup.string(),
  state: yup.string()
});

module.exports = {
  schemaEnrollUser,
  schemaLogin,
  schemaEditUser,
  schemaEnrollClient
};