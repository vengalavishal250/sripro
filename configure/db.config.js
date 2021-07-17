
const mysql = require("mysql");

//mqsql database connection
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "srifitpro"
});

module.exports = conn.connect((err, data) => {
    if (err) throw err;
    console.log("Successfully connected to mysql database");
});

