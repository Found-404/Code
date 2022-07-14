// https://ysch-user.oss-cn-shenzhen.aliyuncs.com/ XML

const axios = require("axios");
const Qs = require("qs"); //qs是一个url参数转化（parse/stringify）的js库
async function testPOST() {
    let response = await axios({
        method: "get",
        url: "https://fts.jd.com/area/",
    });
    console.log(response);
}
testPOST();

// post 请求内容
// const axios = require("axios");
// const Qs = require("qs");　　//qs是一个url参数转化（parse/stringify）的js库

// async function testPOST() {
// let response = await axios({
// method: "POST",
// headers: { "Content-Type": "application/x-www-form-urlencoded" },
// url: url,
// data: Qs.stringify(param)
// })
// console.log(response)
// }


// 请求get
// const axios = require("axios");
// const path = require("path");
// const fs = require("fs");
// const filePath = "E:\\testAPI" //希望把文件下载到哪里

　
// async function testGET(){
// 　　if (!fs.existsSync(filePath)) {
// 　　　　fs.mkdirSync(filepath)
// 　　}
// 　　/* name是生成的文件的文件名，自定义，比如，我希望产生的文件名为test.pdf,那么name='test.pdf' */
// 　 const mypath = path.resolve(filePath, name)
// 　const writer = fs.createWriteStream(mypath)
// 　let response = await axios({
// 　　url: resource, //需要访问的资源链接
// 　　method: "GET",
// 　　responseType: "stream",
// 　　params: param //需要传的参数
// 　 })
// 　response.data.pipe(writer)
// 　return new Promise((resolve, reject) => {
// 　　writer.on("finish", resolve)
// 　　writer.on("error", reject)
// 　})
// }　