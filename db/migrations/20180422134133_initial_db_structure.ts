import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  await knex.schema.createTable('users', table => {
    table
      .bigIncrements('id')
      .primary()
      .index();
    table.string('name').notNullable();
    table.integer('age').notNullable();
  });
};

exports.down = async (knex: Knex) => {
  await knex.schema.dropTable('users');
};
