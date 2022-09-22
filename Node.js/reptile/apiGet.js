const express = require('express');
const axios = require('axios');
const app = express();

app.get('',(req,res)=>{
    res.send('·数据');

})

// 启动服务 url输入 http://localhost:8080/api 获取数据
app.get('/api',async (req,res)=>{
    res.append('Access-Control-Allow-Origin', "*")
    res.append('Access-Control-Allow-Content-Type', "*")
    let result = await axios.get('https://m.douyu.com/api/room/list?page=2&type=LOLM')

    res.send(result.data);
})

app.listen(8080,()=>{
    console.log('http://localhost:8080/api');
})


