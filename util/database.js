const mysql = require("mysql2");

const pool = mysql.createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    password: "1920",
    database: "node-shop",
});

module.exports = pool.promise();
