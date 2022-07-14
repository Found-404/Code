const express = require('express');

const app = express();

// 1.导入解析表单数据的中间件
const parser = require('body-parser');
// 2.使用app.use()注册中间件
app.use(parser.urlencoded({ extended: false }))


// 创建路由
app.post('/user', (req, res) => {
    // 没有配置任何解析表单数据的中间件。则req.body默认等于undefined
    console.log(req.body);
    res.send('ok');
});

// 启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
});