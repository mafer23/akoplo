const { Client } = require('pg');

async function getConnection(params) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password:'12345',
    database: 'akoplo'
});
 await client.connect();
 return client;
}

module.exports = getConnection;

