import * as knex from 'knex';
import knexfile from '../knexfile';
import config from '../config';

export default knex(knexfile[config.NODE_ENV]);
