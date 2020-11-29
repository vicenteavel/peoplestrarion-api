const bcrypt = require('bcryptjs');

const hash =  bcrypt.hashSync('admin', 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('adms').del()
    .then(function () {
      // Inserts seed entries
      return knex('adms').insert([
        {id: 1, username: 'admin', password: hash},
      ]);
    });
};
