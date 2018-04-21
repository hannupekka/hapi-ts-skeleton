import * as Joi from 'joi';

export const name = Joi.string()
  .max(10)
  .required()
  .description('Name to greet')
  .example('Bob');
