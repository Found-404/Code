// 1. 导入http模块
const http = require('http');

// 2. 创建web服务器实例
const server = http.createServer();

// 3. 为服务器实例绑定require事件，监听客户端的请求
server.on('request', function(req, res) {
    console.log('Someone visit our web server');
});

// 4. 启动服务器
server.listen(8080, function() {
    console.log('server running at http://127.0.0.1:8080');
});

// const http = require("http");
// const gc = http.Server(function(req,res){
//     console.log('有人访问服务器');
//     res.end('hellow word')
// })
// gc.listen(3000,function(){
//     console.log('node is ok');
// })