const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Tacmp@508'
});

module.exports = pool.promise();
//mongodb+srv://irfan:tacmp508@cluster0.ysuhx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority