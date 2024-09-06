module.exports = {
    development: {
      username: 'arthur',   // seu nome de usuário do PostgreSQL
      password: 'senha',     // sua senha do PostgreSQL
      database: 'api',  // nome do seu banco de dados
      host: 'localhost',     // host do banco de dados
      dialect: 'postgres',   // define o dialeto como postgres
    },
    test: {
      username: 'arthur',
      password: 'senha',
      database: 'api',
      host: 'localhost',
      dialect: 'postgres',
    },
    production: {
      username: 'arthur',
      password: 'senha',
      database: 'api',
      host: 'localhost',
      dialect: 'postgres',
    }
  };