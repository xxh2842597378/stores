var mysql   =  require('mysql')
// 连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xuxianghui',
    database: 'users'
})


module.exports = connection;