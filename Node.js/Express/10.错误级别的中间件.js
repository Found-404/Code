const express = require('express');

const app = express();

// 创建路由
app.get('/', (req, res) => {
    // 人为的制造错误
    throw new Error('服务器内部发生错误');
    // 并未执行
    res.send('Home page');
});

// 定义一个错误级别中间件
app.use((err, req, res, next) => {
    console.log('发生了错误' + err.message);
    res.send('Error:' + err.message);
})


// 启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
});