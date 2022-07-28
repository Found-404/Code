### arguments和形参间的关系

```js
        function b(x, y, a) {
            arguments[2] = 10;
            alert(a);
        }
        b(1, 2, 3);

        function b(x, y, a) {
            a = 10;
            alert(arguments[2]);
        }
        b(1, 2, 3);
```

正常输出全是10，10

只有加了`"use strict"`严格模式下第二个才输出 3

- arguments 是一个类数组对象
- 首先 arguments 对象的 **长度由实参** 决定，
- 相对应的arguments 与 形参才会建立映射关系，如：c 的变化不会影响到argument，而 a 会
- **建立映射关系不是访问同一块内存，只是保持同步变化而已**

#### arguments.callee/func.caller

- `arguments.callee`代表其所在函数自身

  - ```js
            function fn1() {
                console.log(arguments.callee);
            }
            fn1();//function fn1() {console.log(arguments.callee);}
    ```

- `func.caller`代表该函数被调用函数，简单地说就是谁使用了这个函数，`func.caller`输出的就是那个使用者

  - ```js
            function test() {
                demo();
            }
          
            function demo() {
                console.log(demo.caller);
            }
            test();//ƒ test() {demo();}
    ```



### 逗号操作符

在一条语句中同时声明多个变量是逗号操作符最常用的场景。不过，也可以使用逗号操作符来辅助

赋值。在赋值时使用逗号操作符分隔值，最终会返回表达式中最后一个值：

```js
        var num = (1, 4);
        console.log(num); //4
```

```js
        var f = (
            function f() {
                return '1';
            },
            function g() {
                return 2;
            }
        )();
        console.log(typeof f); //number
```

因为逗号操作符的原因，f = 第二个函数，又因为结尾有()，相当于立即执行函数，return出去数字型的2，所以`typeof f `的值为number

### if括号和typeof特殊性

if中的()将内部的函数转换为表达式，而且这个`function f() {}`并非那6个可以转换为false的值，所以if可以执行下去，正常情况下f应该是找不到报错的，但是由于typeof的特殊性，不管有没有声明变量f,`typeof f`都可以执行，且为`undefined`

```js
        console.log(typeof f); //undefined
```

> **六个转换为false的值：**
>
> - false
> - null
> - undefined
> - 0
> - 空字符串
> - NaN

```js
        var x = 1;
        if (function f() {}) {
            x += typeof f;
        };
        console.log(x); //1undefined
        console.log(Boolean(function q() {})); //true
```

| 类型 | 结果 |
| :----: | :----: |
|Undefined|	"undefined"|
|Null	|"object"（空对象）|
|Boolean|	"boolean"|
|Number|	"number"|
|String	|"string"|
|Symbol （ECMAScript 6 新增）|	"symbol"|
|宿主对象（由JS环境提供）|	Implementation-dependent|
|函数对象（[[Call]] 在ECMA-262条款中实现了）|	"function"|
|任何其他对象	|"object"|

> Null是历史遗留问题，当初它只是作为一个空对象的占位

### null和undefined

null和undefined很是相似，两者不管大于小于等于0都为false，并且

`null == undefined`为true，但是

`null === undefined`为false

### console.info,log,debug

三者一样，不同叫法而已

### this指向

#### 1.

```js
        var name = '222';
        var a = {
            name: '111',
            say: function() {
                console.log(this.name);
            }
        };
        var fun = a.say;
        fun(); //222
        a.say(); //111
        var b = {
            name: '333',
            say: function(fun) {
                fun()
            }
        };
        b.say(a.say); //222
        b.say = a.say;
        b.say(); //333
```

1. `a.say`实际上是`function(){console.log(this.name);}`这个函数，而这个函数又给到了fun，相当于fun变成了一个匿名函数，此时执行`fun()`其中的this指向肯定是window，则结果为222
2. `a.say()`结果为111，谁调用this就指向谁
3. `b.say()`中的this指向b，`a.say`被当作参数传入，相当于传入`function(){console.log(this.name);}`这个函数，但是执行之前并没有任何人调用它，如果是`this.fun()`则结果肯定为333，但是其并没有人调用它。默认为全局范围内执行，结果为222
4. `b.say = a.say;`其实就是将`b.say`替换成`function(){console.log(this.name);}`这个函数，而`b.say()`执行结果为333，谁调用this指向谁

> 注意：谁调用this指向谁，

### 预编译

> 预编译发生在函数执行的前一刻

四部曲：

1. 创建AO对象

   - 叫活动对象，又叫**函数执行上下文**
   - `AO={}`

2. 找形参和变量声明，就变量和形参名作为AO属性名，值为undefined

   - ```JS
             AO={
                 a:undefined,
                 b:undefined,
             }
     ```

3. 将实参值和形参统一  *(在全局域下没有此步骤且**创建GO-全局执行上下文**)*

   - ```js
             AO={
                 a:1,
                 b:undefined,
             }
     ```

4. 在函数体里找函数声明，值赋予函数体

   - ```js
     		AO={
                 a:function a() {},
                 b:undefined,
                 d:function d() {}
             }
     ```

5. 执行函数内的代码

   - ```js
     console.log(a);//function a() {}
     
     a = 123;// 此时AO对象中的a=123
     
     console.log(a);//123
     console.log(a);//123
     
     b = function() {};//此时AO对象中的b=function() {}
     
     console.log(b);//function() {}
     ```

```js
        function fn(a) {
            console.log(a);

            var a = 123;

            console.log(a);

            function a() {};

            console.log(a);

            var b = function() {};

            console.log(b);

            function d() {}
        }
        fn(1)

```

> - function a() {}
> - 123
> - 123
> - function() {}

*GO可以说就是window*

```js
        var a = 123;

        function a() {

        }
        console.log(a); //123

        //GO = {
        //    a: function a() {},
        //}
```

### if中函数声明特殊性

在新版的js中*条件式函数声明丧失了函数声明提升的特性*

> if语句中的函数声明并不会被传入AO当中，老版本可以

```js
a=100;
function demo(){
    function(){};
    arguments[0]=2;
    console.log(e);
    if(a){
        var b = 123;
        function c(){
            
        }
    }
    var c;
    a=10;
    var a;
    console.log(b);
    f=123;
    console.log(c);
    console.log(a);
}
var a;
demo(1);
console.log(a)
console.log(f)
```

最新版结果：2,undefined,undefined,10,100,123

旧版结果：2,undefined,function(){},10,100,123
