//增删改查
const mysql = require('mysql')//引入MYSQL
const moment = require('moment')//时间
//创建一个数据库连接
let connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baimacxy',//数据库名称
    dateStrings: true,//将时间转换为 正确格式
})
connection.connect()//打开数据库

module.exports = {
    //获取全部数据
    huoqushuju(callback) {
        let sql = 'select * from wzry'//语句
        connection.query(sql, (err, result) => {
            if (err) callback(err)//失败
            callback(null, result)//成功
        })
    },
    //新增英雄
    xinzeng(shuju, callback) {
        let sql = 'insert into wzry set ?'//语句
        shuju.date = moment().format('YYYY-MM-DD HH:mm:ss')//添加时间
        connection.query(sql, shuju, (err, result) => {
            if (err) return callback(false)
            callback(true)
        })
    },
    //单个英雄详情
    yingxiongxiangqing(id, callback) {
        let sql = 'select * from wzry where id=?'
        connection.query(sql, [id], (err, result) => {
             if(err) return callback(err)
             callback(null,result)
        })
    },
    //删除英雄
    shanchu(id,callback){
     let sql = 'delete from wzry where id=?'//语句
     connection.query(sql,[id],(err,result)=>{
         if(err) return callback(false)
         callback(true)
     })
    },
    //修改英雄
    xiougai(shuju,callback){
     let {id} =  shuju
     delete shuju.id
     shuju.date = moment().format('YYYY-MM-DD HH:mm:ss')//添加时间
     let sql = 'update wzry set ? where id=?';
     connection.query(sql,[shuju,id],(err,result)=>{
         if(err) return callback(err)
         callback(false)
     })
    }
}