# TypeScript

## 初识TypeScript

> TypeScript是JavaScript的，带有类型的超集，并且能够编译为普通的JavaScript
>
> - 通过编译器对ts语言进行编译处理成js语言

![image-20220806142749631](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220806142749631.png)

- ts规定变量要有确定的类型

```ts
let str:string = 'hello';
str = 10; //error报错
```

```js
let str = 'hello';
str = 10;// 整正常运行
```

- ts中包含js的所有语法并对其进行了扩展

- ts更受大型公司制作大型项目所青睐

> 弊端：同c语言，阅读量变为繁琐

## 安装使用编译器

1. `npm i -g typescript `
2. 创建`index.ts`
3. 编写几行代码`let a:number = 10;console.log(a);`
4. 执行编译命令`tsc index.ts`
5. 会自动生成一个编译后的js文件

## 注意事项

> 编译后的js默认是es3的版本，需要对其进行默认配置

1. 新建一个`tsconfig.json`文件
2. 添加配置项

```json
{
    "compilerOptions": {
        "target": "ES2017" //指定编译版本
    }
}
```

3. 在index.ts文件中添加asyn函数测试编译

```js
let a:number = 10;
console.log(a);

async function fn1() {
    
}
```

4. 执行命令`tsc`   *不需要在跟文件名了*，如下结果

```js
let a = 10;
console.log(a);
async function fn1() {
}
```

## 基本类型

1. 隐式定义类型

```ts
let a = 10;
a='hello'; //此时会报错
```

2. 显示定义类型

```ts
let a:number = 10; //指定a这个变量为number类型
console.log(a);
```

3. 任意类型定义

```ts
let a:any = 10;
a='hello';  //不会报错
```

**定义函数**

> 对于形参要规定他的数据类型，括号后是规定返回值的数据类型

```ts
function add(a:number,b:number):number{
    return a+b
}
```



## 组合类型

对于一个变量可以定义多种数据类型

```ts
let demo:number | string ;
demo='10'
demo=10
```

还可以将这个变量涵盖的数据类型做一个包装

> 使用type进行数据类型包装

```ts
type NS = number | string;
let demo:NS = 10 ;
demo='10'
demo=10
let demo2:NS = 'hello'
```

