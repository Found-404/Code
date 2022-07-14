const puppeteer = require('puppeteer')

// 导入cheerio工具解析模块
const cheerio = require('cheerio');

// 导入路径模块
const fs = require('fs');

//设置网址
var url = 'https://www.jd.com/';

async function start(bool) {
    //启动浏览器,传入headless为false可以打开窗口
    const browers = await puppeteer.launch({
            headless: false,
            executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
        })
        //启动新页面
    const page = await browers.newPage()
        //设置页面打开时的页面宽度高度
    await page.setViewport({
        width: 1520,
        height: 580,
    })

    //链接网址
    await page.goto(url)
    var content, $
    await page.evaluate(function() {
        var top = 0;
        //每200毫秒滚动100px
        var timer = setInterval(() => {
            console.log(window.scrollY);
            window.scrollTo(0, top += 100)
        }, 200);
        //15秒后清除定时器并开始获取内容
        setTimeout(() => {
            clearInterval(timer);

            var box = $('.ui-areamini-content-list .item');
            // console.log(box);
            let List = []
            for (let i = 2; i < box.length; i++) {
                let e = box.eq(i)
                    // console.log(e);
                let obj = {
                    title: $(e).find('.selected').text(),
                    // aside: $(e).find('.channels_item_title_aside').text(),
                    // src: [$(e).find('.lazyimg_img').eq(0).prop('src'), $(e).find('.lazyimg_img').eq(1).prop('src')],
                };
                List.push(obj);
            }
            console.log(List);
            List = JSON.stringify(List, undefined, 4);
            //以下是下载json,创建元素
            var ele = document.createElement('a');
            //设置下载文件名
            ele.download = "jingdongTejia.json";
            //隐藏元素
            ele.style.display = "none";
            //字符内容转变成blob地址
            var blob = new Blob([List], { type: 'text/json' });
            //如果是链接，这里也可以直接设置链接地址
            ele.href = URL.createObjectURL(blob);
            document.body.appendChild(ele);
            //模拟点击
            ele.click();
            //移除元素
            document.body.removeChild(ele);

            // 写入数据在新的json文件 
            // fs.writeFile('./jingDong.js', JSON.stringify(List), function(err) {
            //     if (!err) {
            //         console.log('文件写入成功！');
            //     } else {
            //         console.log('文件写入失败！');
            //     }
            // });
        }, 5000);
    })
}

start(false)