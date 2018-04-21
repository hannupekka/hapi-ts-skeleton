import * as Hapi from 'hapi';
import config from '../config';
import * as helloHttp from '../src/http/hello-http';
import { name } from '../validation';
import * as schemas from '../schemas/response';
import logger from '../utils/logger';
import { isProduction } from '../utils/env';
import { createRoutes, createPath } from '../utils/routes';

// Default config for all routes.
const defaultRouteOptions = {
  log: {
    collect: true,
  },
  tags: ['api'],
  validate: {
    options: {
      abortEarly: false,
    },
    // When not in production, reply with full errors.
    ...(!isProduction && {
      failAction: async (request: Hapi.Request, h: Hapi.ResponseToolkit, err: Error) => {
        logger.error(err.stack);
        throw err;
      },
    }),
  },
};

const routes = [
  {
    handler: helloHttp.helloWorld,
    method: 'GET',
    options: {
      description: 'Hello world!',
      notes: 'Greets world',
      response: { schema: schemas.helloWorld },
      tags: ['hello'],
    },
    path: createPath('/hello', config.API_VERSION),
  },
  {
    handler: helloHttp.helloName,
    method: 'GET',
    options: {
      description: 'Hello you!',
      notes: 'Greets you',
      response: { schema: schemas.helloName },
      tags: ['hello'],
      validate: {
        params: {
          name,
        },
      },
    },
    path: createPath('/hello/{name}', config.API_VERSION),
  },
  {
    handler: helloHttp.error,
    method: 'GET',
    options: {
      description: 'Example error',
      notes: 'Replies with error',
      response: { schema: schemas.error },
      tags: ['error'],
    },
    path: createPath('/error', config.API_VERSION),
  },
];

export default createRoutes(routes, defaultRouteOptions);
