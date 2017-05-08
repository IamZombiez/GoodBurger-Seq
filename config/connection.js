const mysql = require('mysql')

var	connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger_db"
});


connection.connect(function(err){
    if(err){
        throw new Error(`Connection to {$connection.database} failed\n${err}`)
    }
    console.log(`Connected as id ${connection.threadId}`)
})

module.exports = connection;