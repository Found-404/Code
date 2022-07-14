const express = require('express');

const app = express();

// 配置中间件
// 通过express.json()解析表单中的json格式数据
app.use(express.json());
// 通过express.urlencoded()解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }));

// 创建路由
app.post('/user', (req, res) => {
    // 在服务器中可以使用req.body这个属性来接受客户端发送过来的请求体
    // 默认情况下，如果不配置 解析表单数据的中间件，默认为undefined
    console.log(req.body);
    res.send('ok');
})


app.post('/book', function(req, res) {
    // 在服务器中可以使用req.body这个属性来获取json格式的表单和url-encoded格式数据
    console.log(req.body);
    res.send('ok');
})


// 启动服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
});