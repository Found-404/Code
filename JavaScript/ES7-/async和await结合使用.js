// 引入fs模块
const fs = require("fs");

// 读取a.txt文件
function readA() {
    return new Promise((resolve, reject) => {
        fs.readFile('./a.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

// 读取b.txt文件
function readB() {
    return new Promise((resolve, reject) => {
        fs.readFile('./b.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

// 读取c.txt文件
function readC() {
    return new Promise((resolve, reject) => {
        fs.readFile('./c.txt', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

// 声明一个asyc函数
async function main() {
    // 获取a内容
    let A = await readA();
    let B = await readB();
    let C = await readC();

    console.log(A.toString(), B.toString(), C.toString());
};
main()