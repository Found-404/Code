export default {
  pages: [
    'pages/demo/index',
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#000000",
    "selectedColor": "#3cc51f",
    "backgroundColor": "#E1FFFF",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "",
      "selectedIconPath": "",
      "text": "首页"
    }, {
      "pagePath": "pages/demo/index",
      "iconPath": "",
      "selectedIconPath": "",
      "text": "测试"
    }]
  },
  "animation":true
}
