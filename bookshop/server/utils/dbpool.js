
const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "W1_89329_Gaurav",
    password: "Password",
    database: "bookdp"
})

module.exports = pool
