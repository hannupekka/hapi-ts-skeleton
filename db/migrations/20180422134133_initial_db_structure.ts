import * as Knex from 'knex';

exports.up = async (knex: Knex) => {
  await knex.schema.createTable('user', table => {
    table
      .bigIncrements('id')
      .primary()
      .index();
    table.string('name').notNullable();
    table.integer('age').notNullable();
  });
};

exports.down = async (knex: Knex) => {
  await knex.schema.dropTable('user');
};
