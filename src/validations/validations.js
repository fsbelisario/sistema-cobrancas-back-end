const yup = require('./config');

const schemaEnrollUser = yup.object().shape({
  name: yup.string().max(50).required('O campo Nome é obrigatório.'),
  email: yup.string().max(50).email().required('O campo E-mail é obrigatório.'),
  password: yup.string().min(5).max(20).required('O campo Senha é obrigatório.')
});

const schemaLogin = yup.object().shape({
  email: yup.string().email().required('O campo E-mail é obrigatório.'),
  password: yup.string().required('O campo Senha é obrigatório.')
});

module.exports = {
  schemaEnrollUser,
  schemaLogin
};