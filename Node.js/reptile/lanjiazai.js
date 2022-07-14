var http = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
//初始url 
var url = "https://www.iqiyi.com/";

function fetchPage(x) { //封装了一层函数
    startRequest(x);
}
//创建保存时的json文件格式title是保存的标题,list是传过来的数据,gettype是用来区分如何分类
function creatObj(title, List, getType) {
    let obj
    if (getType == 'page') {
        obj = []
    } else {
        obj = {
            title: title,
            name: []
        }
    }
    if (getType == 'gethtml') {
        for (let i = 0; i < List.length; i++) {
            const e = List.eq(i);
            obj.name.push(e.text().trim())
        }
    } else if (getType == 'page') {
        for (let i = 0; i < List.length; i++) {
            const e = List[i];
            obj.push({
                title: e.title,
                name: []
            })
            for (let idx = 0; idx < e.rec_items.length; idx++) {
                const ele = e.rec_items[idx];
                obj[i].name.push(ele.name)
            }
        }
    } else {
        for (let i = 0; i < List.length; i++) {
            const e = List[i];
            obj.name.push(e.name)
        }
    }
    return obj
}

function xpsd() {
    var mData = '';
    var val
        //封装了一个promise,好把请求到的数据配合async/await函数返回给调用者
    return new Promise((resolve, reject) => {
        http.get('https://pcw-api.iqiyi.com/strategy/pcw/data/indexXpsdRow', function(res) {
            res.on('data', function(data) {
                mData += data;
                //拿到的数据是二进制流,加上空字符串后可变成可查数据,res.data时请求并没有结束!返回数据的代码要写在res.end里,因为没有看官方文档导致我这里浪费了很长时间试错
            });
            res.on('end', function() {
                var data = JSON.parse(mData);
                val = data.data.formatData.list
                resolve(val)
            });
        }).on('error', function(err) {
            reject(err);
        });
    })
}

function typelist(type) {
    var mData = '';
    var val
    return new Promise((resolve, reject) => {
        http.get(`https://pcw-api.iqiyi.com/video/recommend/homecard?area_list=${type}&is_vip=-1&ret_num_list=7&filter_list=`, function(res) {
            res.on('data', function(data) {
                mData += data;
            });
            res.on('end', function() {
                var data = JSON.parse(mData);
                val = data.data[type].list
                resolve(val)
            });
        }).on('error', function(err) {
            reject(err);
        });
    })

}

function page(id) {
    var mData = '';
    var val
    return new Promise((resolve, reject) => {
        let url = `https://pcw-api.iqiyi.com/strategy/pcw/data/indexThemeCardBlock?page_id=${id}&session=${sessionid()}`
        http.get(url, function(res) {
            res.on('data', function(data) {
                mData += data;
            });
            res.on('end', function() {
                var data = JSON.parse(mData);
                val = data.data.formatData.data
                resolve(val)
            });
        }).on('error', function(err) {
            reject(err);
        });
    })
}
//因为里面有的参数是32位的sessionid,所以写个随机的id
function sessionid() {
    var chars = "abcdefhijkmnprstwxyz1234567890";
    var maxPos = chars.length;
    var pwd = "";
    for (var i = 0; i < 32; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

function startRequest(x) {
    //采用http模块向服务器发起一次get请求      
    http.get(x, function(res) {
        var html = ''; //用来存储请求网页的整个html内容
        res.setEncoding('utf-8'); //防止中文乱码
        //监听data事件，每次取一块数据
        res.on('data', function(chunk) {
            html += chunk;
        });
        //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
        res.on('end', async function() {
            var $ = cheerio.load(html); //采用cheerio模块解析html
            var List = []
            var box = $('.ch-res').children().find('.qy-mod-text') //相同等级的主模块
            var dianshiju = $("#dianshiju").find('.tl-layout__left').find('.main') //电视剧模块等使用cheerio获取内容
            var dianying = $("#dianying").find('.tl-layout__left').find('.main')
            var zongyi = $("#zongyi").find('.tl-layout__left').find('.main')
            var xpsdval = await xpsd() //新片速递找到了接口,所以直接调接口
                //动漫,儿童等请求接口都是一样的,参数不一样所以封装了同一个函数调用
            var cartoon = await typelist('rec_cartoon')
            var child = await typelist('rec_child')
            var series = await typelist('rec_series')
                //加载更多的是调用的接口,传参分页和页面大小就可以,我只需要两页所以就这样写了,如果需要更多可以使用for循环
            var page1 = await page(1)
            var page2 = await page(2)
            List.push(creatObj('电视剧', dianshiju, 'gethtml'))
            List.push(creatObj('电影', dianying, 'gethtml'))
            List.push(creatObj('综艺', zongyi, 'gethtml'))
            List.push(creatObj('新片速递', xpsdval))
            List.push(creatObj('动漫', cartoon))
            List.push(creatObj('儿童', child))
            List.push(creatObj('纪录片', series))
            List = List.concat(creatObj('page1', page1, 'page'))
            List = List.concat(creatObj('page2', page2, 'page'))
                // console.log(List);
                //这里就是获取好数据后保存下来的json文件代码
            fs.writeFile('iqiyi.json', JSON.stringify(List), 'utf8', function(error) {
                if (error) {
                    console.log(error);
                    return false;
                }
                console.log('写入成功');
            })
        });
    }).on('error', function(err) {
        console.log(err);
    });
}

fetchPage(url); //主程序开始运行