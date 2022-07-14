const puppeteer = require('puppeteer');

// 导入cheerio工具解析模块
const cheerio = require('cheerio');

(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
    });


    const page = await browser.newPage();
    await page.goto('https://www.jd.com/');
    // 等待3000ms，等待浏览器的加载
    // await page.waitFor(3000);
    const hrefArr = await page.evaluate(() => {
        let arr = [];
        const aNodes = document.querySelectorAll('.more2_item');

        aNodes.forEach(function(item) {
            arr.push(item)
        })
        return arr
    });
    console.log(hrefArr);
    // let arr = [];
    // for (let i = 0; i < hrefArr.length; i++) {
    //     const url = hrefArr[i];
    //     // console.log(url) //这里可以打印 
    //     // await page.goto(url);
    //     const result = await page.evaluate(() => { //这个方法内部console.log无效 
    //         return $('title').text(); //返回每个界面的title文字内容
    //     });
    //     arr.push(result) //每次循环给数组中添加对应的值
    // }
    // console.log(arr) //得到对应的数据  可以通过Node.js的 fs 模块保存到本地
    await browser.close();
})()