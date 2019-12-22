//下载引入文件
const express = require('express')//框架
const ejs = require('ejs')//ejs
const router = require('./router')//路径
const bodyParser = require('body-parser')//获取post请求的数据 模块
//创建服务器
const app = express()

//监听端口
app.listen(3010, () => {
    console.log('http://127.0.0.1:3010')
})
app.use('/node_modules',express.static('node_modules'));//设置静态资源托管 和虚拟目录
//设置模板引擎
app.set('view engine', 'ejs')

app.set('views','views')//默认模板路径

app.use(bodyParser.urlencoded( {extended:false}))//post请求 的内容

// 注册中间件
// app.use((req, res) => {
//     // res.end('ok')
//     // res.send('反间谍覅或多或少的')
// })
app.use(router)