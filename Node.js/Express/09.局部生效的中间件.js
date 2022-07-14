const express = require('express');

const app = express();

// 定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了第一个全局中间件');
    next();
};
const mw2 = (req, res, next) => {
    console.log('调用了第二个全局中间件');
    next();
};
// 创建路由
app.get('/', mw1, mw2, (req, res) => {
    res.send('Home page!');
});
app.get('/user', (req, res) => {
    res.send('User page!');
});
// 启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
});