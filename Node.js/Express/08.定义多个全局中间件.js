const express = require('express');

const app = express();

// 定义第一个全局中间件
app.use((req, res, next) => {
    console.log('调用了第一个全局中间件');
    next();
});
// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第二个全局中间件');
    next();
});

app.get('/', (req, res) => {
    res.send('Home page!');
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
})