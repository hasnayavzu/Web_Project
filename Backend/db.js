const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "users",
    password: "Pc12345.",
    port: 5432,
})

module.exports = pool;