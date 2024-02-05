// db.js

const mysql = require('mysql');
const sql = require('./db/userSql.js');

console.dir(process.env);
const connectionPool = mysql.createPool({
    // host : '127.0.0.1', // DB ip
    // port : '3306',  // MySQL 포트
    // user : 'dev01',
    // password : '1234',
    // database : 'dev',
    // connectionLimit : 10,
    host : process.env.MYSQL_HOST,
    port : process.env.MYSQL_PROT,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DB,
    connectionLimit : process.env.MYSQL_CONNECT_LIMIT,
    // debug : true
});

const executeQuery = async (alias, values) => {
    return new Promise((resolve, reject) => {
        let executeSql = sql[alias];
        connectionPool.query(executeSql, values, (err, results) => {
            if(err) {
                console.log(err);
                reject({err});
            } else {
                console.log(results);
                resolve(results);
            }
        })
    })
}

module.exports = {
    executeQuery
}