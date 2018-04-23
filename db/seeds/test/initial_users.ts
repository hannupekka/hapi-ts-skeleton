import * as Knex from 'knex';

exports.seed = async (knex: Knex): Promise<any> => {
  await knex('users').insert({ name: 'bob', age: 30 });
};
