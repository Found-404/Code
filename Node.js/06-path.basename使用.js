const path = require('path');

// 定义文件存放路径
const fpath = '/a/b/c/index.html';

// const fullName = path.basename(fpath);
// console.log(fullName); // 输出idnex.html

const nameWidthoutExt = path.basename(fpath, '.html');
console.log(nameWidthoutExt); // 输出index

// 相对路径变绝对路径
path.resolve('./01-使用readFile方法读取文件.js')