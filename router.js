const express = require('express')//引入express
const router = express.Router()//创建路由
const con = require('./controller')//引入逻辑
router.get('/', (req, res) => {
    con.sohwIndex(req,res)
})
.get('/index',(req,res)=>{
    con.sohwIndex(req,res)
})
.get('/add',(req,res)=>{
    con.sohwAdd(req,res)
})
.get('/edit',(req,res)=>{
    con.sohwEdit(req,res)
})
.get('/info',(req,res)=>{
    con.sohwInfo(req,res)
})
//新建英雄
.post('/xinzeng',(req,res)=>{
    con.xinzeng(req,res)
})
module.exports = router//暴露 