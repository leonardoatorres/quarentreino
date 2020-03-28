
exports.up = function(knex) {
  return knex.schema.createTable('treinos', function (table) {
    table.increments().primary();
    table.string('aquecimento').notNullable();
    table.string('wod').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('treinos');
};
