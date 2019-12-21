const express = require('express')//引入express
const router = express.Router()//创建路由
router.get('/', (req, res) => {
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

module.exports = router//暴露 