-- 通过* 把user表中所有的数据查询出来
-- select * from users

-- 从users表中把username和password对应的数据查询出来
-- select usernams,password from users

-- 向users表中，插入新的数据。username的值为tony stark password的值为123456
-- insert into users (usernams,password) values ('tony stark','123456')

-- 将id为7的用户密码更新成888888
-- update users set password='888888' where id=7

-- 把users表中id为2的用户密码和用户状态，分别更新为admin123和1
-- update users set password='admin123',status = 1 where id=8

-- 删除users中id为4的用户
-- delete from users where id=10

-- 演示where子句的使用
-- select * from users where status=1
-- select * from users where id>2
-- select * from users where usernams !='ls'

-- 使用AND来显示所有状态为0并且id小于3的用户
-- select * from users where status=0 and id<10

-- 使用or显示所有状态为1或者username为zs的用户
-- select * from users where status=1 or usernams = 'zs'

-- 对users表中的数据，按照status字段进行升序排序
-- select * from users order by status

-- 对users表中的数据，按照id字段进行降序排序
-- select * from users order by id desc

-- 对users表中的数据先按照status进行降序排序，再按照usernams字母顺序，进行升序的排序
-- select * from users order by status desc,usernams asc

-- 使用count(*)来统计users表中，状态为0用户的总数量
-- select count(*) from users where status=0

-- 使用as关键字给列起别名
-- select count(*) as total from users where status=0
-- select usernams as uname,password as upwd from users



