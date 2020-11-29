
exports.up = function(knex) {
   return knex.schema.createTable('adms', function(table) {
      table.increments();
      table.string('username').notNullable().unique();
      table.string('password').notNullable();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('adms');
};
