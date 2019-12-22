//增删改查
const mysql = require('mysql')//引入MYSQL

//创建一个数据库连接
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baimacxy',//数据库名称
    dateStrings : true,//将时间转换为 正确格式
})
connection.connect()//打开数据库

module.exports = { 
    //获取全部数据
    huoqushuju(callback) {
        let sql = 'select * from wzry'//语句
        connection.query(sql, (err, result) => {
            if(err) callback(err)//失败
            callback(null,result)//成功
        })
    }
}