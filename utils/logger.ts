import * as winston from 'winston';
import { isProduction, isTest } from '../utils/env';

const logger = new winston.Logger({
  // Disable logging in test.
  transports: isTest
    ? []
    : [
        new winston.transports.Console({
          colorize: true,
          level: isProduction ? 'error' : 'debug',
          timestamp: () => new Date(),
        }),
      ],
});

export default logger;
