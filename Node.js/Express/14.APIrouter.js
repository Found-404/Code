// 模块化路由模块
const express = require('express');

const routers = express.Router();

// 挂载对应的路由
// get接口
routers.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串 发送到服务器的数据
    const query = req.query;
    // 调用res.send()方法,向客户端相应处理的数据
    res.send({
        status: 0, // 0处理成功,1处理失败
        msg: 'GET 请求成功!', // 状态的描述
        data: query //需要响应给客户端的数据
    });
});

// post接口
routers.post('/post', (req, res) => {
    //通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body;
    // 调用res.send()方法,向客户端响应结果
    res.send({
        status: 0,
        msg: 'POST 请求成功!',
        data: body
    });
});

// 定义delete接口
routers.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'DELETE 请求成功'
    })
})





// 向外暴露路由
module.exports = routers;