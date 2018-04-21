import * as Hapi from 'hapi';
import * as requireHTTPS from 'hapi-require-https';
import * as Inert from 'inert';
import * as Vision from 'vision';
import * as HapiSwagger from 'hapi-swagger';
import * as Good from 'good';
import goodWinston from 'hapi-good-winston';
import logger from '../utils/logger';
import config from '../config';
import routes from './routes';

/**
 * Creates server.
 */
export const createServer = async (): Promise<Hapi.Server> => {
  const server = new Hapi.Server({
    host: config.HOST,
    port: config.PORT,
  });

  const plugins = [
    { plugin: Inert },
    { plugin: Vision },
    {
      options: {
        basePath: `/v${config.API_VERSION}`,
        grouping: 'tags',
        info: {
          title: 'API Documentation',
          version: config.API_VERSION,
        },
        pathPrefixSize: 2,
      },
      plugin: HapiSwagger,
    },
    {
      options: {
        ops: false,
        reporters: {
          winston: [goodWinston(logger)],
        },
      },
      plugin: Good,
    },
  ];

  // Require HTTPS
  if (config.REQUIRE_HTTPS === 'true') {
    logger.info('Require HTTPS enabled');
    plugins.push(requireHTTPS);
  }

  // Register plugins
  await server.register(plugins);

  // Add routes
  server.route(routes);

  return server;
};

export default createServer;
