//下载引入文件
const express = require('express')//框架
const ejs = require('ejs')//ejs

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


//注册中间件
// app.use((req, res) => {
//     // res.end('ok')
//     // res.send('反间谍覅或多或少的')
// })
app.get('/', (req, res) => {
    res.render('index',{})
})
.get('/add',(req,res)=>{
    res.render('add',{})
})
.get('/edit',(req,res)=>{
    res.render('edit',{})
})
.get('/info',(req,res)=>{
    res.render('info',{})
})