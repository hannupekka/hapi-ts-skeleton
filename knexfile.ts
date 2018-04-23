import config from './config';

const { DB_URL } = config;

interface IKnexConfig {
  [index: string]: {};
}

const knexConfig: IKnexConfig = {
  development: {
    client: 'pg',
    connection: `postgres://postgres:postgres@localhost:4321/development`,
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
    connection: `postgres://postgres:postgres@localhost:4322/test`,
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
