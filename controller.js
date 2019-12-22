//业务逻辑

//引入增删改查
const zsgc = require('./zsgc')
module.exports = {
    sohwIndex(req, res) {
        zsgc.huoqushuju((err, data) => {//获取数据
            if (err) return res.json({
                code: 201,
                msg: '没有数据',
            })
            res.render('index', { data: data })
        })

    },
    sohwAdd(req, res) {
        res.render('add', {})
    },
    sohwEdit(req, res) {
        res.render('edit', {})
    },
    sohwInfo(req, res) {
        res.render('info', {})
    },
    //新增英雄
    xinzeng(req, res) {
        let shuju = req.body//获取请求的数据
        zsgc.xinzeng(shuju, (err) => {
            if (err) return res.json({
                code: 200,
                mag: '新增成功',
            })
            res.json({
                code: 201,
                msg: '新增失败'
            })
        })
    },
}