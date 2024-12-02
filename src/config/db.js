const  Pool  = require('pg').Pool;

const pool = new Pool({ // Создаем пул соединений с базой данных PostgreSQL
    user: "postgres",
    password: "TvoiSempa1",
    host: "localhost",
    port: 5433,
    database: "plumbing2"
  });
  
  module.exports = pool;