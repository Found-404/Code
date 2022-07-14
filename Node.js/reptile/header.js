let request = require('request')
let cheerio = require('cheerio')
const fs = require("fs")

const { promises } = require('dns')
const { resolve } = require('path')
const { rejects } = require('assert')

// https://xiangyang.anjuke.com/sale/xiangchengbc/p2/
let opt = {
    url: 'https://fts.jd.com/area/', //请求路径
    method: "GET", //请求方式，默认为get
    gzip: true,
    headers: { //设置请求头
        'content-type': 'application/json;charset=UTF-8',
        'authority': 'xiangyang.anjuke.com',
        'path': '/area/get?fid=2837&callback=jQuery6967923&_=1657551843847',
        'scheme': 'https',
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': ' max-age=0',
        'cookie': '__jdv=76161171|direct|-|none|-|1657530945320; __jdu=16575309453201640140009; PCSYCityID=CN_410000_410100_0; shshshfpb=n_76DZckPP0yX-gD2lM5TVw; shshshfpa=3c588900-b1e5-cdd6-1a96-c9de55132d05-1653028129; __jda=122270672.16575309453201640140009.1657530945.1657530945.1657549280.2; __jdc=122270672; joyytokem=babel_SyNEMyANkXQuUmzn5dUef8CQGPAMDF1SVhLUzk5MQ==.RH9tfGZBcGpzZ0FxbDVhOw1pJWFEJ2ovLURlbmdiWXgmeS1ENzYUZEMNAig4JRloMgtYLhx5Pzh8DB0kCw==.72069a48; shshshfp=b18c1893489b22aa7f61fdf37603c035; wlfstk_smdl=qjh8zsi0i370pazare5wk074d7oxu20k; joyya=1657549283.1657549289.16.0s0a3v9; ip_cityCode=412; mba_muid=16575309453201640140009; mba_sid=1657550092673972833777147204.1; token=75c33685f11493538c1d4eed357dbe27,2,920862; __tk=9fa1df04d0a8df257227e6bed7406e86,2,920862; shshshsID=1adb3b5d021c001db8980a9bf11f0349_6_1657551780756; __jdb=122270672.11.16575309453201640140009|2.1657549280; 3AB9D23F7A4B3C9B=SV5TDKX7M7PWMBDBSDT7M4ARZCWYVXOI4BQ2WJQOJREBT2LPHE6UFMV4VLOJWT27HLVEAWDXGOHTKEOCREWF2BEEPM; areaId=1; ipLoc-djd=1-72-55656-0',
        'referer': 'https://item.jd.com/',
        'sec-fetch-dest': 'script',
        'sec-fetch-mode': 'no-cors',
        'sec-fetch-site': 'same-same-site',
        // 'sec-fetch-user': '?1',
        // 'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
    }
}
let json = []
let initUrl = 'https://fts.jd.com/area/'
let count = 1

let RequestAnjuke = (opt) => {
    return new Promise((resolve, rejects) => {
        request(opt, function(error, response, body) {
            if (error) {
                rejects(error)
            }
            resolve(body)
        })
    }).then(body => {
        let $ = cheerio.load(body)
            // $('#houselist-mod-new').find('li').each(function(i, j) {
            //     let data = {}
            //     data.url = $(j).children('.item-img').children('img').attr('src')
            //     data.data = {
            //         'house-title': $(j).children('.house-details').children('.house-title').text().replace(/\s+/g, ""),
            //         'house-title-href': $(j).children('.house-details').children('.house-title').children('a').attr('href'),
            //         'details-item': $(j).children('.house-details').children('.details-item').text().replace(/\s+/g, ""),
            //         'house-details': $(j).children('.house-details').children('.details-item1').text().replace(/\s+/g, ""),
            //         'tags-span': $(j).children('.house-details').children('.tags-bottom').text().replace(/\s+/g, ""),
            //     }
            //     data.price = $(j).children('.pro-price').children('.price-det').text().replace(/\s+/g, "万")
            //     data.average_price = $(j).children('.pro-price').children('.unit-price').text()
            //     json.push(data)
            // })
            // if (count == 50) {
            //     let house_data = {
            //         data: json,
            //         len: json.length
            //     }
            //     fs.writeFile("house_details.txt", JSON.stringify(house_data), error => {
            //         if (error) return console.log("写入文件失败,原因是" + error.message);
            //         console.log("写入成功");
            //     });
            //     return
            // }
            // count++
            // let url = opt.url
            // opt.headers.referer = url
            // opt.url = initUrl + '/p' + count + '/'
            // console.log(opt.url + '----------------------' + opt.headers.referer)
            // RequestAnjuke(opt)

    }).catch(err => {
        console.log(err)
    })
}
RequestAnjuke(opt)