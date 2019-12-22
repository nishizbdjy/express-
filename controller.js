//业务逻辑

//引入增删改查
const zsgc = require('./zsgc')
module.exports = {
    sohwIndex(req,res){
        zsgc.huoqushuju((err,data)=>{//获取数据
            if(err) return res.json({
                code : 201,
                msg : '失败',
            })
            res.render('index',{data : data})
        })
        
    },
    sohwAdd(req,res){
        res.render('add',{})
    },
    sohwEdit(req,res){
        res.render('edit',{})
    },
    sohwInfo(req,res){
        res.render('info',{})
    }
}