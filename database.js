const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'learning_node',
    paasword: 'Hannah903@ophio'
});

module.exports = pool.promise();