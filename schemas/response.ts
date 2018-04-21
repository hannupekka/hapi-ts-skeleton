import * as Joi from 'joi';

export const helloWorld = Joi.object({
  msg: Joi.string()
    .required()
    .example('Hello World!'),
});

export const helloName = Joi.object({
  msg: Joi.string()
    .required()
    .example('Hello Bob!'),
});

export const error = Joi.object({
  error: Joi.string()
    .required()
    .example('Not Implemented'),
  message: Joi.string()
    .required()
    .example('Not Implemented'),
  statusCode: Joi.number()
    .required()
    .example(501),
});
