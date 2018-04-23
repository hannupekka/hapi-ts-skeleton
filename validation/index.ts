import * as Joi from 'joi';

export const name = Joi.string()
  .max(10)
  .required()
  .description('Name to greet')
  .example('Bob');

export const postUser = Joi.object({
  age: Joi.number()
    .integer()
    .required()
    .description('Users age')
    .example(30),
  name: Joi.string()
    .required()
    .description('Users name')
    .example('Bob'),
});
