import * as _ from 'lodash';
import config from '../config';

interface IEnvs {
  [index: string]: string[];
}

// Make sure NODE_ENV is one of the allowed ones.
if (!_.includes(['development', 'production', 'test'], config.NODE_ENV)) {
  throw new Error(`Invalid NODE_ENV ${config.NODE_ENV}`);
}

const REQUIRED_VARIABLES: IEnvs = {
  development: ['NODE_ENV', 'PORT', 'API_VERSION'],
  production: [],
  test: ['NODE_ENV', 'API_VERSION'],
};

// Forbid certain variables in development or testing, just in case.
const FORBIDDEN_VARIABLES: IEnvs = {
  development: [],
  production: [],
  test: [],
};

export const isProduction = config.NODE_ENV === 'production';
export const isTest = config.NODE_ENV === 'test';

// Makes sure that each required environment variable is set and forbiddens are not.
export const checkEnv = () => {
  REQUIRED_VARIABLES[config.NODE_ENV].forEach(variable => {
    if (!process.env[variable]) {
      throw new Error(`Missing env variable: ${variable}`);
    }
  });

  FORBIDDEN_VARIABLES[config.NODE_ENV].forEach(variable => {
    if (process.env[variable]) {
      throw new Error(`Forbidden env variable for ${config.NODE_ENV}: ${variable}`);
    }
  });
};
