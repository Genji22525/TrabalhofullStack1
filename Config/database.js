module.exports = {
    development: {
      username: 'root',   // seu nome de usuário do mysqlQL
      password: '',     // sua  do mysqlQL
      database: 'api',  // nome do seu banco de dados
      host: 'localhost',     // host do banco de dados
      dialect: 'mysql',   // define o dialeto como mysql
    },
    test: {
      username: 'root',
      password: '',
      database: 'api',
      host: 'localhost',
      dialect: 'mysql',
    },
    production: {
      username: 'root',
      password: '',
      database: 'api',
      host: 'localhost',
      dialect: 'mysql',
    }
  };