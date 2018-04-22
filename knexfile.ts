import config from './config';

const { DB_USER, DB_PASS, DB_NAME, DB_URL, NODE_ENV } = config;

interface IKnexConfig {
  [index: string]: {};
}

const knexConfig: IKnexConfig = {
  development: {
    client: 'pg',
    connection: `postgres://${DB_USER}:${DB_PASS}@postgres/${DB_NAME}_${NODE_ENV}`,
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
  },
  test: {
    client: 'pg',
    connection: `postgres://postgres:postgres@localhost:5000/test`,
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds/test',
    },
  },
};

module.exports = knexConfig;
