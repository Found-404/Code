// 导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库连接的关系
const db = mysql.createPool({

    host: '127.0.0.1', //数据库的IP地址

    user: 'root', //登录数据库的账号

    password: 'admin123', //登录数据库的密码

    database: 'my_db_01', //指定要操作哪个数据库

})

// 'select 1' 测试mysql这个模块能否正常工作
// db.query('select 1', (err, results) => {
//     // mysql模块工作期间报错了
//     if (err) {
//         return console.log(err.message);
//     };
//     // 能成功执行sql语句
//     console.log(results);
// })

// 查询users表中所有的数据
// const sqlStr = 'select * from users';
// db.query(sqlStr, (err, results) => {
//     // 查询数据失败
//     if (err) return console.log(err.message);
//     // 查询数据成功
//     console.log(results);
// });

// 向users表中新增一条数据，其中username的值为Spider-Man，password的值为pcc123
// const user = {
//     username: 'Spider-Man',
//     password: 'pcc123'
// };
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users (usernams,password) values (?,?)';

// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     // 执行sql语句失败
//     if (err) {
//         return console.log(err.message);
//     };
//     // 执行成功
//     // 注意：如果执行的是insert into插入语句，则results是一个对象
//     // 可以通过affectedRows属性，来判断是否插入数据成功
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！');
//     };
// })


// 演示插入数据的便捷方式
// const user = {
//     usernams: 'Spider-man2',
//     password: 'pcc456',
// };
// // 定义待执行的SQL语句
// const sqlStr = 'insert into users set ?';
// // 执行SQL语句
// db.query(sqlStr, user, (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     };
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// });


// 1.要更新的数据对象
// const user = {
//     id: 6,
//     usernams: '张三',
//     password: '000'
// };
// // 2.定义SQL语句
// const sqlStr = 'update users set usernams=?,password=? where id=?';
// // 3.执行sql语句
// db.query(sqlStr, [user.usernams, user.password, user.id], (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     };
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功！');
//     };
// });


// 演示更新数据的便捷方式
// const user = {
//     id: 6,
//     usernams: '李四',
//     password: '000'
// };
// // 定义SQL语句
// const sqlStr = 'update users set ? where id=?';
// // 执行sql语句
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     };
//     if (results.affectedRows === 1) {
//         console.log('更新数据成功！');
//     };
// });

// 删除id为5的用户
// const sqlStr = 'delete from users where id=?';

// db.query(sqlStr, 5, (err, results) => {
//     if (err) {
//         return console.log(err.message);
//     };
//     if (results.affectedRows === 1) {
//         console.log('删除数据成功！');
//     };
// })

// 标记删除
// const sqlStr = 'update users set status=? where id=?';
// db.query(sqlStr, [1, 6], (err, results) => {
//     if (err) {
//         console.log(err.message);
//     };
//     if (results.affectedRows === 1) {
//         console.log('标记数据成功！');
//     };
// });