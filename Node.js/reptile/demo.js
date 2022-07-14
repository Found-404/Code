// 导入http模块
const https = require('https');

// 导入路径模块
const fs = require('fs');

// 导入cheerio工具解析模块
const cheerio = require('cheerio');

// 导入download库批量下载图片
const download = require('download');


let req = https.request('https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_741cc034bc744a7eadc7e2f887eafa45', res => {

    let html = '';
    res.on('data', chunk => {
        html += chunk;
    });
    console.log(html);
    res.on('end', () => {

        let $ = cheerio.load(html);

        let text = [];
        // 将筛选的内容存放到text数组
        $('.indent table').each(function(i, ele) {
            const imgs = $('.nbg img', this).attr('src');

            text.push({ imgs });

        });
        console.log(text);
        // 下载文件函数
        // downloadImg(text);

    });
});

// 编写下载方法
// 将获取过来的数据进行下载

function downloadImg(allFilms) {
    for (let i = 0; i < allFilms.length; i++) {
        // 获取每个对象的url地址给picUrl
        const picUrl = allFilms[i].imgs;

        https.get(picUrl, function(res) {
            // 读取picUrl写入到本地
            // 二进制存放
            res.setEncoding('binary');
            let str = '';
            res.on('data', function(chunk) {
                str += chunk;
            });
            res.on('end', function() {
                // 写入模块、
                fs.writeFile(`./images2/${i}.png`, str, 'binary', function(err) {
                    if (!err) {
                        console.log(`第${i}张图片下载成功`);
                    }
                })
            })
        })
    }
}






// 发送请求
req.end();