const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
// const nombre = Joi.string().min(4);

const password = Joi.string().min(8);
// const typeUser = Joi.number().min(5)

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),

});

const updateUserSchema = Joi.object({
  email: email,
  // typeUser: typeUser
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
