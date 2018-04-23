import * as _ from 'lodash';
import knex from '../../db';

export const helloWorld = async () => {
  return Promise.resolve({
    msg: 'Hello World!',
  });
};

export const helloName = async (name: string) => {
  return Promise.resolve({
    msg: `Hello ${name}!`,
  });
};

export const getUsers = async () => {
  return await knex('users').select('*');
};

export const postUser = async ({ name, age }: { name: string; age: number }) => {
  const result = await knex('users')
    .insert({ name, age })
    .returning('*');

  return _.first(result);
};
