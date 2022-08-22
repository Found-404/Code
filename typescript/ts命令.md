## 下载tsconfig.json
+ tsc --init
+ 用于转化ts结尾的文件  因为ts不被浏览器识别
## 使用转化对应的ts文件
+ tsc 文件目录
## 使用实时监听 不再一个个单独转化节约时间
- 因为js和ts分开管理更轻松，所以要写两个目录
+ 找到tsconfig.json里 /* Modules */下   "rootDir": "./转化的ts父目录",  
+ 找到tsconfig.json里 /* Emit */下      "outDir": "./你的js父目录", 
+ 使用tsc --watch  实时监听，不用手动解析js文件
## ts可能会出现一些提示错误，几乎没有影响，想要舒服
+ 在ts顶部写  export default {}
## 严格模式 /* Type Checking */
+ 一修改tsconfig.json中 中把严格模式注释掉 // "strict": true,
+ 二 // "strictNullChecks": true, // "noImplicitAny": true, 等于一
## 降级编译
+  /* Language and Environment */ 下  "target": "es2016", 改成 es5 
