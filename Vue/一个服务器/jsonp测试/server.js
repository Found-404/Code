//服务端
//引入支持接受请求，返回响应的模块http
const http = require("http");
const url = require("url");
//创建服务端程序实例
http.createServer(
    //每当有客户端发来请求时
    //自动调用一下回调函数
    (req, res) => {
        var mycallback = url.parse(req.url, true).query.mycallback;
        var weather = {
            "location": "Beijing",
            "weather": "sun",
            "temprature": "18-20"
        };
        weather = JSON.stringify(weather);
        res.writeHead(200, {
            "Content-Type": "application/json;charset=utf-8"
        });
        res.write(`${mycallback}(${weather})`);
        res.end();
    }
).listen(80);