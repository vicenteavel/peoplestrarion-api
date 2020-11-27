
exports.up = function(knex) {
   return knex.schema.createTable('people', function(table) {
      table.increments();
      table.string('name').notNullable();
      table.string('gender');
      table.string('email').unique();
      table.date('birthday').notNullable();
      table.string('place_of_birthday');
      table.string('nationality');
      table.string('cpf').notNullable().unique();
      table.timestamps();
   });
};

exports.down = function(knex) {
   return knex.schema.dropTable('people');
};

