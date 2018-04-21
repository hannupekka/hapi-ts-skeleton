import * as winston from 'winston';
import { isProduction } from '../utils/env';

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      colorize: true,
      level: isProduction ? 'error' : 'debug',
      timestamp: () => new Date(),
    }),
  ],
});

if (!isProduction) {
  logger.info('Logging initialized at debug level');
}

export default logger;
