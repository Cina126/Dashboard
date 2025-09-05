const mysql = require("mysql");
const dashboardDB = mysql.createConnection({
    
    host: "sql12.freesqldatabase.com",
    user: "sql12795557",
    database: "sql12795557",
    password: "gYYeeAEzFc",
    port: 3306

    // host: "localhost",
    // user: "root",
    // database: "Dashboard",
});
module.exports = dashboardDB