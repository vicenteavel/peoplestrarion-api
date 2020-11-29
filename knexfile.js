module.exports = {
   client: 'mysql',
   connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'peoplestration'
   },
   migrations: {
      directory: './src/database/migrations'
   },

   seeds: {
      directory: './src/database/seeds'
   },
   useNullAsDefault: true,
}