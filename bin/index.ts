import * as Hapi from 'hapi';
import createServer from './server';
import logger from '../utils/logger';
import { checkEnv } from '../utils/env';

// Check env variables.
checkEnv();
/**
 * Closes server on specific signals.
 *
 * @param server Hapi.Server Server instance
 * @param signal string Signal
 */
const closeServer = async (server: Hapi.Server, signal: string) => {
  logger.info(`Received signal: ${signal}, exiting`);
  await server.stop();
};

/**
 * Stars server.
 */
const startServer = async () => {
  logger.info('Starting server..');
  try {
    const server = await createServer();
    // Handle signals gracefully. Heroku will send SIGTERM before idle.
    process.on('SIGTERM', () => closeServer(server, 'SIGTERM'));
    process.on('SIGINT', () => closeServer(server, 'SIGINT(Ctrl-C)'));
    await server.start();
    logger.info(`Server listening: ${server.info.uri}`);
  } catch (err) {
    logger.error(`Failed to start server: ${err} `);
    throw err;
  }
};

// Execute if being run directly
if (require.main === module) {
  startServer();
}
