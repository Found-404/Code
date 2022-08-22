---
title: Vue
date: 2022-07-15 20:45:53
tags: 
- Vue
- 框架
categories: 
- 框架
---

# Vue核心
## Vue简介
### 什么是VUE

> Vue是一套用于构建用户界面的渐进式JavaScript框架
>
> [Vue中文文档](https://vuejs.bootcss.com/style-guide/)
>
> [Vue官方文档](https://staging-cn.vuejs.org/)

什么是渐进式：

- Vue可以自底向上逐层的应用
  - 简单的应用：只需要一个轻量小巧的核心库
  - 复杂的应用：可以引入各式各样的Vue插件

<!-- more -->

### 谁开发的

![image-20220715205307722](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715205307722.png)

### Vue的特点

1. 采用组件化模式，提高代码复用率，且让代码更好维护。

![image-20220715210528567](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715210528567.png)

2. 声明式编码。让编码人员无需直接操作DOM。提高开发效率。
    ![image-20220715205742913](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715205742913.png)

![image-20220715205803585](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715205803585.png)

3. 使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点。

![image-20220715210607706](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715210607706.png)

### Vue Devtools

在chrome下载Vue扩展程序

[密码:6666](https://pan.baidu.com/s/1MtYvMPew4lb14piIrs9x6w )

### 导入Vue

再导入Vue后会出现启动Vue生成的生产提示，可以通过

```js
        // 阻止Vue在启动时生成生产提示
        Vue.config.productionTip = false;
```

关闭提示。

## Hello Vue

### 准备一个容器

```js
    <!-- 准备好一个容器 -->
    <div id="root">
        <!-- 插值语法 -->
        <h1>Hello, {{ name }}</h1>
    </div>
```

动态的数据要使用插值语法{% raw %}{{}}{% endraw %}

> root容器中的代码被称为**Vue模板**

### 创建Vue实例

```js
// 阻止Vue在启动时生成生产提示
Vue.config.productionTip = false;
// 创建Vue实例
const vm = new Vue({
      el: '#root',
      data: {
       name: 'Vue',
   }
});
```

- **element**	元素 指定当前Vue实例为哪个容器服务，值通常为css选择器字符串
- **data**           中用于存储数据，数据共el所指定的容器去使用，值*暂时*写成一个对象

> vue实例也可以不用变量接收
>
> 容器和实例一一对应，一个容器对应一个实例，一个实例对应一个容器。
>
> 注：当一个容器中有很多动态数据时候，一个实例也可以应付。一个实例下可以存在多个“手下”，这个所谓的手下就是之后的**组件**

### 区分js表达式和js代码(语句)

#### 1.js表达式

一个表达式会产生一个值。可以放在任何一个需要值的地方：

1. a				    一个a变量
2. a+b               a变量+b变量
3. demo(1)       调用demo()函数
4. etc...

#### 2.js代码(语句)

1. if(){}
2. for(){}
3. etc...

### 容器中的{% raw %}{{}}{% endraw %}"又称vue模板"

在容器中的{% raw %}{{}}{% endraw %}插值语法块中。可以存放表达式，并且也可以生效

```html
    <!-- 准备好一个容器 -->
    <div class="root">
        <!-- 插值语法 -->
        <h1>Hello,{{ name }},{ { age+1 }},{{ 2+2 }}</h1>
    </div>

    <script>
        // 阻止Vue在启动时生成生产提示
        Vue.config.productionTip = false;
        // 创建Vue实例
        const vm = new Vue({
            el: '.root',
            data: {
                name: 'World',
                age: 18
            }
        });
    </script>
```

结果：`Hello, World,19,4`

#### 巧妙使用Vue扩展框架

![image-20220715223904598](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220715223904598.png)

## Vue模板语法

### 1.插值语法

#### 功能：

用于解析标签体内容

> 标签体就是起始标签和结束标签包裹的东西，例如`<h3>你好，{{name}}</h1>`

#### 写法：

{% raw %}{{}}{% endraw %}，xxx就是js表达式，且可以直接读取到data中的所有属性

### 2.指令语法

#### 功能：

用于解析标签（包括：标签属性，标签体内容，绑定事件。。。。。。）

#### 举例：

`v-bind:href="xxx"` 或者 简写为 `:href="xxx" `，xxx同样要写js表达式，且可以直接读取到data中的所有属性。

> 简单来说就是加了v-bind:的属性后“  ”内的部分会变成表达式

``` html
    <!-- 准备好一个容器 -->
    <div class="root">
        <!-- 插值语法 -->
        <h1>插值语法</h1>
        <h3>你好，{{name}}</h1>
            <hr/>
            <h1>指令语法</h1>
            <a v-bind:href="school.url" :index="name">点击跳转{{ school.name }}官网</a>
    </div>
    <script>
        // 阻止Vue在启动时生成生产提示
        Vue.config.productionTip = false;
        // 创建Vue实例
        new Vue({
            el: '.root',
            data: {
                name: 'Jack',
                school: {
                    name: 'Vue',
                    url: 'https://staging-cn.vuejs.org/guide/introduction.html'
                }
            }
        });
    </script>
```

#### 备注：

Vue中有很多指令，且形式都是v-？？？，此处我们只是拿v-bind举例子

## 数据绑定

> 数据绑定类型分为：
>
> - 单向数据绑定
>   - 改变值，并不会改变data对象中的对应值
> - 双向数据绑定
>   - 改变值，会同时改变data对象中的值

### 双向数据绑定之v-model:

之前所学的v-bind:属于单向数据绑定。

> v-model:就属于双向数据绑定
>
> 注意：v-model:一般应用在表单类元素（输入类元素）上
>
> - 例如：input，select等

**简写：**

`v-model='name'`

```html
<!-- 简写 -->
双向数据绑定：<input type='text' :value='name'><br/>
单向数据绑定：<input type='text' v-model='name'><br/>
```

### data与el的两种写法

#### el有两种写法

 **new Vue时候配置el属性**

```js
         const v = new Vue({
             // 1.第一种绑定写法
             el: '.root',    
             data: {
                 name: 'Found',
             }
         });
```

 **先创建Vue实例，随后再通过vm.$mount('#root')指定el的值**

```js
         const v = new Vue({  
             data: {
                 name: 'Found',
             }
         });
         console.log(v);
         // 2.第二种绑定写法
         v.$mount('.root');
```

#### data有两种写法

**对象式**

```js
        new Vue({
            el: '.root',
             // 1.data的第一种写法：对象式
             data: {
                 name: 'FOund'
             }
        })
```

**函数式**

```js
        new Vue({
            el: '.root',
            // 2.data的第二种写法：函数式
            data() {
                return {
                    name: 'FOund'
                }
            }
        })
```

---

**一个重要的原则:**

> 由Vue管理的函数，一i的那个不要写箭头函数，一旦写了箭头函数，this就不再指向Vue实例

## MVVM模型

1. M：模型（Model）：对应data中的数据
2. V：视图（View）：模板
3. VM：视图模型（ViewModel）：Vue实例对象

![image-20220718194456563](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220718194456563.png)

- data中所有的属性，最后都出现在vm身上。
- vm身上所有属性以及Vue原型上所有属性，在Vue模板中都可以直接使用

## 数据代理

### 回忆*Object*.defineProperty

使用*Object*.defineProperty添加的数据不可被遍历(枚举)-修改-删除

- enumerable: true 		控制属性是否可以被枚举，默认false
- Writable: true                控制属性是否可以被修改，默认false
- configurable: true         控制属性可以被删除，默认false

> get()    当有人读取person的age属性时，get函数(gutter)就会被调用，且返回值就是age的值
>
> set(value)   当有人修改person的age属性时，get函数(gutter)就会被调用，且返回值就是age的值

```js
        let person = {
            name: '张三',
            sex: '男',
        };
        let number = 10;
        Object.defineProperty(person, 'age', {
            enumerable: true, //控制属性是否可以被枚举，默认false
            Writable: true, //控制属性是否可以被修改，默认false
            configurable: true, //控制属性可以被删除
            //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
            get() {
                return number;
            },
            //当有人修改person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
            set(value) {
                number = value;
            }
        });
        console.log(person);
```

### 数据代理

何为数据代理：

> 数据代理：通过一个对象代理对另一个对象中属性的操作(读/写)
>
> 通过obj2就可以修改obj1中的属性

```js
        let obj1 = {
            x: 100,
        };
        let obj2 = {
            y: 200
        };

        Object.defineProperties(obj2, 'x', {
            get() {
                return obj1.x;
            },
            set(value) {
                obj2.x = value;
            }
        })
```

### Vue中的数据代理

1. Vue中的数据代理：

​			通过vm对象来代理data对象中属性的操作（读与写）

2. Vue中数据代理的好处：

   ​     更加方面的操作data中的数据

3. 基本原理：

   ​      通过`Object.defineProperty()`把data对象中所有的属性添加到vm上。

   ​      为每个添加到vm上的属性，都指定一个getter/setter。

   ​      在getter/setter内部去操作(读/写)data中对应的属性。

data中的所有属性被传给_data，虽然vm上也有对应的属性，但实际上这些属性都是代理上的。
当我更改了`vm.name='123'`  ,   _data中的属性name也同样被修改(即最初传进去的data数据)，此时被更改的name也会被更新到页面中，因为Vue的数据实时更新特性

![image-20220718210505028](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220718210505028.png)

## 事件处理

### 事件的基本使用：

1. 使用v-on:xxx或@xxx绑定事件，其中xxx是事件名；
2. 事件的回调需要配置在methods对象中，最终会在vm上；
3. methods中配置的函数，不要再用箭头函数！否则this就不是vm了；
4. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm或组件实例对象；
5. **@click=“demo”**  和  **@click="demo($event)"**  效果一致，但后者可以传参；

```html
   <!-- 准备一个容器 -->
    <div id="root">
        <h2>hello {{name}}!</h2>
        <button v-on:click="showInfo1">(不传参)点我提示信息1</button>
        <button @click="showInfo2(66,$event)">(传参)点我提示信息2</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                }
            },
            methods: {
                showInfo1(event) {
                    // console.log(this);  //此处的this是vm
                    // console.log(event); 
                    alert('hi!');
                },
                showInfo2(number, a) {
                    console.log(number, a);
                    alert('hi!!');
                },
            },
        });
    </script>
```

### 事件修饰符：

> `@click.prevent="showInfo1"`

1. prevent：阻止默认事件(常用)
2. stop：阻止事件冒泡(常用)
3. xxxxxxxxxx // TODO_06：使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误app.use((err, req, res, next) => {    if (err.name === 'UnauthorizedError') {        return res.send({            status: 401,            message: '无效的token'        })    }    res.send({        status: 500,        message: '未知错误'    })});js
4. capture：使用事件的捕获模式
5. self：只有event.target是当前操作的元素，才触发事件
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕

> 修饰符可以连续写，当想要阻止冒泡，又想阻止默认行为可以`.stop.prevent`

```html
    <!-- 准备一个容器 -->
    <div id="root">
        <h2>hello {{name}}!</h2>
        <a href="https://www.baidu.com/" @click.prevent="showInfo1">点我提示信息1</a>
        <div class="demo1" @click="showInfo1">
            <button @click.stop="showInfo1">点击</button>
        </div>
        <button @click.once="showInfo1">点击</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                }
            },
            methods: {
                showInfo1(event) {
                    // console.log(this);  //此处的this是vm
                    // console.log(event); 
                    alert('hi!');
                },
            },
        });
    </script>
```

### 键盘事件:

#### Vue中常用的按键别名：

1. 回车：enter
2. 删除：delete （捕获“删除”和“退格”键）
3. 推出：esc
4. 空格：space
5. 换行：tab        (特殊，配合keydown使用)
6. 上：up
7. 下：down
8. 左：left
9. 右：right

```html
    <!-- 准备一个容器 -->
    <div id="root">
        <input type="text" placeholder="按下回车提示输入" @keyup.enter="shouInfo">
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                }
            },
            methods: {
                shouInfo(e) {
                    console.log(e.target.value);
                },
            },
        });
```

#### Vue未提供别名的按键

可以使用按键原始key值去绑定，但注意要转为kebab-case(短横线命名)

可以使用`e.key`获取按键别名

```js
shouInfo(e) {
	console.log(e.key);
	// console.log(e.target.value);
},
```

> 注意：CapsLock（大小写切换）这种形式要写成caps-lock

#### 系统修饰符

用法特殊：ctrl，alt，shift，meta

1. 配合keyup使用：按下修饰按键的同时，再按下其他按键，随后释放其他键，事件才触发

   ​       `@keyup.ctrl.y`指定ctrl配合y使用

   ```html
   <input type="text" placeholder="按下回车提示输入" @keyup.ctrl.y="shouInfo">
   ```

2. 配合keydown使用：正常触发事件。

```html
   <input type="text" placeholder="按下回车提示输入" @keydown.ctrl="shouInfo">
```

### 使用keyCode去指定按键

> `@keyup.13`指定’回车键‘

```html
    <div id="root">
        <input type="text" placeholder="按下回车提示输入" @keyup.13="shouInfo">
    </div>
```


### 自定义按键别名

`Vue.config.keyCodes.自定义键名=键码`

```js
    Vue.config.keyCodes.huiche = 13;
```

## 计算属性与监视

### 插值语法方式

> 要求：拼接姓名两个表单中的值到span中
>
> - 这种方法虽然也可以实现，但是不推荐

```html
    <div id="root">
        姓：<input type="text" v-model="firstName"><br> 名: <input type="text" v-model="lastName"><br>姓名：<span>{{firstName.slice(0,3)}}-{{lastName}}</span>
    </div>
    <script>
        Vue.config.productionTip = false;

        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    firstName: '张',
                    lastName: '三',
                }
            },
            methods: {
                shouInfo(e) {
                    console.log(e.target.value + " " + e.key);
                    // console.log(e.target.value);
                },
            },
        });
    </script>
```

### methods方法

将两个表单数据相加写成一个函数方法，在插值语法中调用。

> 注意：在插值语法中，函数方法**必须加(  )**代表调用，这是才会返回正确的值

```html
    <div id="root">
        姓：<input type="text" v-model="firstName"><br> 名: <input type="text" v-model="lastName"><br>姓名：<span>{{fullName()}}</span>
    </div>
    <script>
        Vue.config.productionTip = false;

        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    firstName: '张',
                    lastName: '三',
                };
            },
            methods: {
                fullName() {
                    return this.firstName + '-' + this.lastName;
                }
            },
        });
    </script>
```

### 计算属性方法-computed

#### 定义：

要用的属性不存在，要通过已有属性计算得来

#### 原理：

底层借助了`Object.defineProperty()`方法提供的getter和setter方法

#### get何时执行

1. 初次读取时会执行一次
2. 当依赖的数据发生改变时会再次调用

#### 优势：

computed与methods实现相比，内部会有缓存机制（复用），效率高，调试更方便。

#### 备注：

1. 计算属性最终会出现在vm上，直接读取数据即可
2. 如果计算属性要被修改，那必须写set函数去响应修改，且set中要引起计算时依赖的数据发生改变

```html
    <div id="root">
        姓：<input type="text" v-model="firstName"><br>
        名: <input type="text" v-model="lastName"><br>
        姓名：<span>{{fullName}}</span><br>
    </div>
    <script>
        Vue.config.productionTip = false;

        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    firstName: '张',
                    lastName: '三',
                };
            },
            // 全新的配置项
            computed: {
                fullName: {
                    // get有什么作用:
                    // 当有人读取fullName时，get就会被调用，且返回值就作为fullName的值
                    // get什么时候调用？
                    //    1.初次读取fullName时
                    //    2.所依赖的数据(data中)发生变化时
                    get() {
                        console.log('get被调用');
                        return this.firstName + '-' + this.lastName;
                    },
                    // set什么时候调用？
                    // 当fullName被修改时
                    set(value) {
                        console.log('set', value);
                        const arr = value.split('-');
                        this.firstName = arr[0];
                        this.lastName = arr[1];
                    }
                }
            }
        });
    </script>
```

#### 简写：

> 在不考虑修改只需要读取时候可以采用简写形式

```js
    <div id="root">
        姓：<input type="text" v-model="firstName"><br>
        名: <input type="text" v-model="lastName"><br> 
        姓名：<span>{{fullName}}</span><br>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    firstName: '张',
                    lastName: '三',
                };
            },
            // 全新的配置项
            computed: {
                // 简写
                fullName() {
                    return this.firstName + '-' + this.lastName;
                },
            }
        });
    </script>
```

### 监视属性-watch

#### 先写一个切换天气案例

- 数据 存放进data中
- 方法存放在methods中
- 计算属性的方法单独放在computed中

```html
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <!-- 事件@xxx=“yyy” yyy可以写一些简单的语句 -->
        <!-- 调用的属性和方法都是Vue实例对象上有的 -->
        <!-- <button @click="isHot = !isHot;">切换天气</button> -->
        <button @click="change">切换天气</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    isHot: true
                }
            },
            methods: {
                change() {
                    this.isHot = !this.isHot;
                }
            },
            computed: {
                info() {
                    return this.isHot ? '炎热' : '凉爽';
                }
            }
        })
    </script>
```

#### 监听属性

**将watch放在new Vue内部：**

- **immediate: true，**   
-  初始化时让handler调用一下，默认值false
- **handler(newValue, oldValue) {  }，**
- 当isHot发生改变时调用，同时还可以获取修改前的值(oldValue)和修改后的值(newValue)


```html
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="change">切换天气</button>
    </div>
</body>
<script>
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data() {
            return {
                isHot: true
            }
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        watch: {
            isHot: {
                // 初始化时让handler调用一下
                immediate: true,
                
                // handler什么时候调用？
                // 当isHot发生改变时
                // 同时还可以获取修改前的值和修改后的值
                handler(newValue, oldValue) {
                    console.log('isHot被修改', newValue, oldValue);
                }
            }
        }
    });
</script>
```

**将watch放在外部调用：**

```html
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="change">切换天气</button>
    </div>
</body>
<script>
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data() {
            return {
                isHot: true
            }
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
    });

    vm.$watch('isHot', {
        // 初始化时让handler调用一下
        immediate: true,

        // handler什么时候调用？
        // 当isHot发生改变时
        // 同时还可以获取修改前的值和修改后的值
        handler(newValue, oldValue) {
            console.log('isHot被修改', newValue, oldValue);
        }
    })
```

#### 深度监视deep

当监听的数据是一个复杂数据的时候watch监视的只是一个在栈空间的地址，不管外界怎样改变numbers对象中的值，都不会触发监视。

1. Vue中的watch默认不监测对象内部值的变化（一层）
2. 配置`deep:true`可以监测对象内部值得变化（多层）

使用`deep: true`开启深度监听,此时的vue就可以监听到数据内部的变化

```html
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="change">切换天气</button>
        <hr>
        <h3>a的值是:{{numbers.a}}</h3>
        <button @click="numbers.a++">点我让a加1</button>
        <h3>b的值是:{{numbers.b}}</h3>
        <button @click="numbers.b++">点我让b加1</button>
    </div>
</body>
<script>
    Vue.config.productionTip = false;
    const vm = new Vue({
        el: '#root',
        data() {
            return {
                isHot: true,
                numbers: {
                    a: 1,
                    b: 2
                }
            }
        },
        methods: {
            change() {
                this.isHot = !this.isHot;
            }
        },
        computed: {
            info() {
                return this.isHot ? '炎热' : '凉爽';
            }
        },
        watch: {
            isHot: {
                // 初始化时让handler调用一下
                // immediate: true,

                // handler什么时候调用？
                // 当isHot发生改变时
                // 同时还可以获取修改前的值和修改后的值
                handler(newValue, oldValue) {
                    console.log('isHot被修改', newValue, oldValue);
                }
            },

			// 如果要监视的是对象中的单个值，要用引号写法
            // 'numbers.a': {
            //     handler() {
            //         console.log('改变了');
            //     }
            // };
            
            // 监视多级结构中所有属性的变化
            numbers: {
                // 开启深度监听
                deep: true,
                handler() {
                    console.log('number改变了');
                }
            }
        }
    });
```

**备注：**

1. Vue自身可以监测对象内部值的变化，但Vue提供的watch默认不可以
2. 使用watch时根据数据的具体结构，决定是否采用深度监视

#### 监听简写

> 所有调用简写的前提就是只监听一个数据并且不触发深入监听，就是没有
>
> - importScripts: true
> - deep: true

##### 内部调用简写：

```html
    <div id="root">
        <h2>今天天气很{{info}}</h2>
        <button @click="change">切换天气</button>
        <hr>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    isHot: true,
                    numbers: {
                        a: 1,
                        b: 2
                    }
                }
            },
            methods: {
                change() {
                    this.isHot = !this.isHot;
                }
            },
            computed: {
                info() {
                    return this.isHot ? '炎热' : '凉爽';
                }
            },
            watch: {
                // 正常写法：
                // isHot: {
                //     importScripts: true,
                //     deep: true,
                //     handler(newValue, oldValue) {
                //         console.log('isHot被修改', newValue, oldValue);
                //     }
                // },

                // 简写：
                isHot(newValue, oldValue) {
                    console.log('isHot被修改', newValue, oldValue);
                }
            }
        });
    </script>
```

##### 外部调用简写：

```js
        // 正常写法：
        // vm.$watch('isHot', {
        //     importScripts: true,
        //     deep: true,
        //     handler(newValue, oldValue) {
        //         console.log('isHot被修改', newValue, oldValue);
        //     }
        // });

        // 简写：
         vm.$watch('isHot', function(newValue, oldValue) {
             console.log('isHot被修改', newValue, oldValue);
         });
```

### 使用watch实现computed

> 思路：
>
> - 姓氏，名字改变，span中的姓名也改变，这时就可以使用watch监视姓和名的改变
> - 要提前在data中准备好一个最终加好数据`fullName`
> - 监视姓/名的改变，当改变的时候将`fullName`更改为新的数据

```html
    <div id="root">
        姓：<input type="text" v-model="firstName"><br> 名: <input type="text" v-model="lastName"><br> 姓名：
        <span>{{fullName}}</span><br>
    </div>
    <script>
        Vue.config.productionTip = false;

        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    firstName: '张',
                    lastName: '三',
                    fullName: '张-三'
                };
            },
            watch: {
                firstName(newV) {
                    this.fullName = newV + '-' + this.lastName;
                },
                lastName(newV) {
                    this.fullName = this.firstName + '-' + newV;
                }
            },
        });
    </script>
```

#### 区别：

1. computed能完成的功能，watch都可以完成。
2. watch能完成的功能，computed不一 定能完成，例如: watch可以进行异步操作。

#### 原则：

计算属性`computed`中不可以使用异步任务

`computed`中是return一个数据，异步任务不可行

> 需求：数据改变后延迟1s执行span中的改变
>
> 在watch中实现：

```js
            watch: {
                firstName(newV) {
                    setTimeout(() => {
                        this.fullName = newV + '-' + this.lastName;
                    }, 1000);
                },
                lastName(newV) {
                    this.fullName = this.firstName + '-' + newV;
                }
            },
```

注意：使用箭头函数，如果使用普通函数，此时的this指向的是window，而箭头函数的特殊性使得this指向`Vue`

## 绑定样式

### 1.class样式

> 写法：class=“xxx”   xxx可以是字符串，对象，数组

- 字符串写法适用于：类名不确定，要动态获取
- 对象写法适用于：要绑定多个样式，个数不确定，名字也不确定
- 数组写法 适用于：要绑定多个样式，个数确定，名字确定，但不确定用不用

```html
     <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
     <div class="basic" :class="mood" @click="changeMood">{{name}}</div>
     <br>
     <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定，名字也不确定 -->
     <div class="basic" :class="classArr">{{name}}</div>
     <br>
     <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定，名字也确定，要动态决定用不用 -->
     <div class="basic" :class="classObj">{{name}}</div>
```

```js
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                    mood: 'normal',
                    classArr: ['atguihu1', 'atguihu2', 'atguihu3'],
                    classObj: {
                        atguihu1: false,
                        atguihu2: false
                    },
                }
            },
            methods: {
                // 随即改变样式
                changeMood() {
                    const arr = ['happy', 'sad', 'normal'];
                    const index = Math.floor(Math.random() * 3);
                    this.mood = arr[index];
                },
            },
        });
```

### 2.style样式

- **:style="{fontSize:xxx}" **   其中xxx是动态值
- **:style="[a,b]"**                      其中a，b是样式对象

```html
        <!-- 绑定style样式--对象写法 -->
        <div class="basic" :style="styleObj1">{{name}}</div>
        <br>
        <!-- 绑定style样式--数组写法 -->
        <div class="basic" :style="[styleArr]">{{name}}</div>
```

```js
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                    styleObj1: {
                        fontSize: '40px',
                    },
                    styleObj2: {
                        color: 'red',
                    },
                    styleArr: [{
                        fontSize: '40px',
                        color: 'red'
                    }, {
                        backgroundColor: 'gray'
                    }]
                }
            },
        });
```

## 条件渲染

### 1.v-if

**写法：**

> 1. **v-if**="表达式"
> 1. **v-else-if**="表达式"
> 1. **v-else**="表达式"

**适用于：**

> 切换频率较低的场景

**特点：**

> 不展示的DOM元素直接被移除

**注意：**

> **v-if**可以和：**v-else-if**，**v-else**一起使用，但要求结构不能被“打断”

```html
        <!-- 使用v-if做条件渲染 -->
        <h2 v-if="false">Hello {{name}}</h2>
        <h2 v-if="1===1">Hello {{name}}</h2>
```

```html
        <!-- v-else和v-else-if -->
        <div v-if="n === 1">Angular</div>
        <div v-else-if="n === 2">React</div>
        <div v-else-if="n === 3">Vue</div>
        <div v-else="">HH</div>
```

**v-if与template配合使用:**

> template标签在渲染页面中时会自动消失

```html
        <template v-if="n === 1">
            <h2>你好</h2>
            <h2>世界</h2>
            <h2>北京</h2>
        </template>
```

### 2.v-show

**写法：**

> **v-show**="表达式"

**适用于：**

> 切换频率较高的场景

**特点：**

> 不展示的DOM元素未被移除，仅仅是使用样式隐藏掉

```html
        <!-- 使用v-show做条件渲染 -->
        <h2 v-show="false">Hello {{name}}</h2> 
        <h2 v-show="1===1">Hello {{name}}</h2> 
```

### 3.备注

使用**v-if**的时候，元素可能无法获取到，而使用**v-show**一定可以获取到

## 列表渲染

### v-for指令

1. 用于展示列表数据
2. 语法：v-for=“(item，index) in xxx”  :key="yyy"
3. 可遍历：数组，对象，字符串(很少用)，指定次数(更少用)

> **v-for = "(值,[索引]) in [被遍历的]"**

#### 容器

```html
<!-- 准备一个容器 -->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表（遍历数组）</h2>
        <ul>
            <li v-for="(p,index) in persons" :key="index">
                {{p.name}}-{{p.age}}--{{index}}
            </li>
        </ul>

        <!-- 遍历对象 -->
        <h2>汽车信息（遍历对象）</h2>
        <ul>
            <li v-for="(a,b) in car" :key="k">
                {{a}}--{{b}}
            </li>
        </ul>

        <!-- 遍历字符串 -->
        <h2>测试遍历字符串</h2>
        <ul>
            <li v-for="(a,b) in str" :key="b">
                {{a}}--{{b}}
            </li>
        </ul>

        <!-- 遍历指定次数 -->
        <h2>遍历指定次数</h2>
        <ul>
            <li v-for="(number,index) in 5" :key="index">
                {{number}}--{{index}}
            </li>
        </ul>
    </div>
```

#### 数据

```js
        Vue.config.productionTip = false;

        new Vue({
            el: '#root',
            data() {
                return {
                    // 数组
                    persons: [{
                        id: '001',
                        name: '张三',
                        age: '18'
                    }, {
                        id: '002',
                        name: '李四',
                        age: 18
                    }, {
                        id: '003',
                        name: '王五',
                        age: 20
                    }],
                    // 对象
                    car: {
                        name: '奥迪A6',
                        price: '20w',
                    },
                    // 字符串
                    str: 'hello'
                }
            },
        })
```

### :key=“”深入理解

#### 1.虚拟DOM中key的作用

key是虚拟DOM对象的标识，当中的数据发生改变时，Vue会根据【新数据】生成【新的虚拟DOM】，随后Vue进行【虚拟DOM】与【旧虚拟DOM】的差异进行比较。

#### 2.比较规则

##### a.

旧DMO中找到了与新虚拟DOM相同的key：

1. 若虚拟DOM中内容没有改变，直接使用之前的真实DOM!
2. 若虚拟DOM中内容变了，则生成新的真实DOM，随后替换掉页面中之前的真实DOM

##### b.

旧虚拟DOM中未找到与新虚拟DOM相同的key

1. 创建新的真实DOM，随后渲染到页面中

#### 3.用index作为key可能会引发的问题

1. 若对数据进行：逆序添加，逆序删除等破坏顺序操作：

   > 会产生没有必要的真实DOM更新===>界面效果没问题，但是效率低

2. 如果结构中还包含输入类的DOM：

   > 会产生错误的DOM更新===>界面有问题

#### 4.开发中如何选择key

1. 最好使用每条数据的唯一标识作为key，比如id，手机号，身份证号，学号等唯一值。
2. 如果不存在对数据的逆序添加，逆序删除等破坏顺序操作，仅用于渲染列表用于展示，使用index作为key是没有问题的。

![image-20220721213352552](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220721213352552.png)

![image-20220721213513745](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220721213513745.png)

### 列表过滤

> 实现模糊搜索功能

#### watch监听实现

**编写思路：**

- 通过watch可以监视到input输入框的变化
  - 提前准备一个接收inputValue值的数据(使用v-model双向绑定这一数据)
- 渲染进页面中的数据要用另一个数组承载
  - 准备另一个filPersons数组
- 当input中的值(也就是keyWord)发生改变，就是用filter方法过滤初始数组
- 过滤条件使用indexOf，将不为-1的数据(符合条件的数据)return进承载的新数组中
- 注意页面中渲染的DOM为承载的数组

> 注：
>
> 1. indexOf("")返回为0，当检索的为空字符串时返回的值也为0
> 2. 使用`immediate: true,`先执行一次监听方法，不然页面空白

```html
   <!-- 准备一个容器 -->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <li v-for="(p,index) in filPerson" :key="p.id">
                {{p.name}}-{{p.age}}--{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false;
        // 用watch监听实现
        new Vue({
           	el: '#root',
            data() {
                return {
                    keyWord: '',
                    persons: [{
                        id: '001',
                        name: '马冬梅',
                        age: 18,
                        sex: '女'
                    }, {
                        id: '002',
                        name: '周冬雨',
                         age: 18,
                        sex: '女'
                    }, {
                        id: '003',
                        name: '周杰伦',
                        age: 20,
                        sex: '男'
                    }, {
                        id: '004',
                        name: '温兆伦',
                       age: 22,
                        sex: '男'
                    }],
                    filPersons: []
                }
             },
             watch: {
                 keyWord: {
                     // immediate先制定一次
                     immediate: true,
                     handler(newVal) {
                        this.filPersons = this.persons.filter((p) => {
                             return p.name.indexOf(newVal) !== -1
                         })
                     }
                 }
             }
         })
    </script>
```

#### computed属性计算实现

**编写思路：**

- 同样借助input中值的变化来改变下方数据
  - v-model绑定`keyWord`数据
- 同上不同，页面中的DOM是`filPerson`返回的数组
  - 当表单值为空，原数组中的所有数据都被渲染进页面
- 因双向绑定，当input的值改变，`filPerson`也同样改变

> 注意：
>
> 1. 页面的渲染遍历的数据是`filPerson`

```html
   <!-- 准备一个容器 -->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <ul>
            <li v-for="(p,index) in filPerson" :key="p.id">
                {{p.name}}-{{p.age}}--{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false;
        // 用computed属性计算实现
        new Vue({
            el: '#root',
            data() {
                return {
                    keyWord: '',
                    persons: [{
                        id: '001',
                        name: '马冬梅',
                        age: 18,
                        sex: '女'
                    }, {
                        id: '002',
                        name: '周冬雨',
                        age: 18,
                        sex: '女'
                    }, {
                        id: '003',
                        name: '周杰伦',
                        age: 20,
                        sex: '男'
                    }, {
                        id: '004',
                        name: '温兆伦',
                        age: 22,
                        sex: '男'
                    }],
                }
            },
            computed: {
                filPerson() {
                    return this.persons.filter((p) => {
                        return p.name.indexOf(this.keyWord) !== -1
                    })
                }
            }
        })
    </script>
```

### 列表排序

实现对数据的检索，同时可以升序，降序，还原

- 页面中的数据是`filPerson`返回的，只要对其进行操作就可以达到效果
- 为每个button添加点击，点击不同的按钮让`sortType`发生改变
- 对不同`sortType`的值写出相应的改变

> 注意：
>
> 1. 数组的排序方法`sort(a,b)`改变原数组
> 2. b-a降序，a-b升序

```html
   <!-- 准备一个容器 -->
    <div id="root">
        <!-- 遍历数组 -->
        <h2>人员列表</h2>
        <input type="text" placeholder="请输入名字" v-model="keyWord">
        <button @click="sortType = 2">年龄升序</button>
        <button @click="sortType = 1">年龄降序</button>
        <button @click="sortType = 0">还原</button>
        <ul>
            <li v-for="(p,index) in filPerson" :key="p.id">
                {{p.name}}-{{p.age}}--{{p.sex}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false;
        // 用computed属性计算实现
        new Vue({
            el: '#root',
            data() {
                return {
                    keyWord: '',
                    sortType: 0,
                    // 0:原数据
                    // 1:降序
                    // 2:升序
                    persons: [{
                        id: '001',
                        name: '马冬梅',
                        age: 30,
                        sex: '女'
                    }, {
                        id: '002',
                        name: '周冬雨',
                        age: 18,
                        sex: '女'
                    }, {
                        id: '003',
                        name: '周杰伦',
                        age: 20,
                        sex: '男'
                    }, {
                        id: '004',
                        name: '温兆伦',
                        age: 22,
                        sex: '男'
                    }],
                }
            },
            computed: {
                filPerson() {
                    const arr = this.persons.filter((p) => {
                        return p.name.indexOf(this.keyWord) !== -1
                    });
                    // 判断是否需要排序
                    if (this.sortType) {
                        arr.sort((a, b) => {
                            return this.sortType === 1 ? b.age - a.age : a.age - b.age
                        })
                    };
                    return arr;
                },
            }
        })
    </script>
```

## Vue监测数据的原理

1. vue会监视data中所有层次的数据
2. 如何监测对象中的数据？

> 通过setter实现监视，且要在new Vue时就传入要监测的数据
>
> - 对象中后追加的数据，Vue默认不做响应式处理
> - 如需给后添加的属性做响应式，请使用如下API
>   - `Vue.set(target,propertyName/index,value)`
>   - `Vue.$set(target,propertyName/index,value)`

3. 如何监测数组中的数据？

> 通过包裹数组更新元素的方法实现，本质就是做了两件事
>
> - 调用原生对应的方法对数组进行更新
> - 重新解析模板，进而更新页面

4. 在Vue修改数组中的某个元素一定要使用如下方法：

> - 使用这些API：push(),  pop(),  shift(),  unshift(),  splice(),  sort(),  reverse()
> - Vue.set()或vm.$set()

**特别注意：**Vue.set()和vm.$set()不能给vm或vm的根数据对象添加属性！！！

```html
    <!-- 准备一个容器 -->
    <div id="root">
        <h1>学生信息</h1>

        <button @click="student.age++">年龄+1</button>
        <button @click="addSex">点击添加性别</button>
        <button @click="student.sex='未知'">修改性别</button>

        <button @click.once="addFriend">在列表首位添加一个朋友</button>

        <button @click="changeZs">修改第一个朋友的名字为张三</button>

        <button @click="addHobby">添加一个爱好</button>
        <button @click="changeHobby">修改第一个爱好</button>

        <h3>姓名:{{student.name}}</h3>
        <h3>年龄:{{student.age}}</h3>
        <h3 v-if="student.sex">性别:{{student.sex}}</h3>
        <h3>爱好:{{student.hobby}}</h3>

        <ul>
            <li v-for="(h, index) in student.hobby" :key="index">
                {{h}}
            </li>
        </ul>
        <h3>朋友们</h3>
        <ul>
            <li v-for="(f, index) in student.friends" :key="index">
                {{f.name}}---{{f.age}}
            </li>
        </ul>
    </div>
    <script>
        Vue.config.productionTip = false;
        // 用computed属性计算实现
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    student: {
                        name: 'tom',
                        age: 18,
                        hobby: ['抽烟', '喝酒', '烫头'],
                        friends: [{
                            name: 'jerry',
                            age: 35
                        }, {
                            name: 'tony',
                            age: 36
                        }]
                    }
                }
            },
            methods: {
                addSex() {
                    // 为student添加一个属性
                    // Vue.set(this.student, 'sex', '男'); //第一种
                    this.$set(this.student, 'sex', '男'); // 第二种
                    // vm.$set(this.student, 'sex', '男');// 第三种
                },
                addFriend() {
                    // 使用能引起原数组变化并且vue进行过包装的7个api
                    this.student.friends.unshift({
                        name: 'jack',
                        age: 70
                    })
                },
                changeZs() {
                    // 修改第一个朋友的名字
                    this.student.friends[0].name = '张三';
                },
                addHobby() {
                    // 添加一个爱好
                    this.student.hobby.push('学习');
                },
                changeHobby() {
                    // 修改第一个爱好
                    // this.student.hobby.splice(0, 1, '开车') // 第一种写法
                    // Vue.set(this.student.hobby, 0, '男') // 第二种写法
                    this.$set(this.student.hobby, 0, '开车') // 第二种写法
                }
            },
        })
    </script>
```

**附：何为数据劫持？**

> 数据劫持就是当用户修改data中的数据的时候，被后台中途拦截，而调用了Vue包装的set/get方法，从而使得数据发生改变。

## 收集表单数据

Vue中的收集表单更加方便快捷，其主要应用在v-model身上。而且v-model也提供了些修饰符供使用

### text表单

若`<input type="text" v-model.trim="account">`则v-model收集的是value值，用户输入的是value值。

### radio单选

若`<input type="radio" name="sex" v-model="sex" value="male">`则用户收集的就是checked(勾选or未勾选，是布尔值)

### checkbox多选

1. 没有配置input的value属性，那么收集的就是checked（勾选or未勾选，是布尔值）
2. 配置input的value属性：
   - v-model的初始值是非数组，那么收集的就是checkbox（勾选or未勾选，是布尔值）
   - v-model的初始值是数组，那么收集的是value组成的数组

### 备注：

> v-model的三个修饰符：

- v-model.lazy：失去焦点再收集数据
- v-model.number：输入字符串转换为有效数组
- v-model.trim：输入首尾空格过滤

> 为from添加事件

- 可以不用为button添加提交事件
- 将submit事件添加到from身上
- 使用修饰符`@submit.prevent`阻止默认提交

### 代码：

```html
    <div id="root">
        <form action="" @submit.prevent="demo">
            账号:<input type="text" v-model.trim="account"><br><br>
            <!-- --- -->
            密码:<input type="password" v-model="password"><br><br>
            <!-- --- -->
            年龄:<input type="text" v-model.number="age"><br><br>
            <!-- 年龄:<input type="number" v-model.number="age"><br><br> -->
            <!-- --- -->
            性别:<br><br> 男:
            <input type="radio" name="sex" v-model="sex" value="male"> 女:
            <input type="radio" name="sex" v-model="sex" value="female"><br><br>
            <!-- --- -->
            爱好: <br><br> 学习:
            <input type="checkbox" value="study" v-model="hobby"> 打游戏:
            <input type="checkbox" value="game" v-model="hobby"> 吃饭:
            <input type="checkbox" value="eat" v-model="hobby"><br><br>
            <!-- --- -->
            所属校区:
            <select v-model="city">
                <option value="">请选择校区</option>
                <option value="beijing">北京</option>
                <option value="shanghai">上海</option>
                <option value="shenzhen">深圳</option>
                <option value="wuhan">武汉</option>
            </select><br><br>
            <!-- --- -->
            其他信息:
            <textarea v-model.lazy="other"></textarea><br><br>
            <!-- -- -->
            <input type="checkbox" v-model="agree">阅读并接收协议:
            <a href="">用户协议</a><br><br>

            <button>提交</button>

        </form>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    account: "",
                    password: "",
                    age: '',
                    sex: 'male',
                    hobby: [],
                    city: '',
                    other: '',
                    agree: ''
                }
            },
            methods: {
                demo() {
                    console.log(JSON.stringify(this._data));
                }
            },
        })
    </script>
```

## 过滤器

定义：

> 对要显示的数据进行特定格式化后再显示（适用于一些简单逻辑的处理）

语法：

1. 注册过滤器:
   - `  Vue.filter(name,callback)`     *全局过滤器*
   - `new Vue{filters:{}}`       *局部过滤器*

备注：

1. 过滤器也可以接收额外参数，多个过滤器也可以串联
2. 并没有改变原本的数据，是产生新的对应数据
3. 过滤器可以应用在插值语法中，也可以在v-bind中使用

> 使用到第三方插件`dayjs`
>
> `<script src="https://cdn.bootcdn.net/ajax/libs/dayjs/1.11.3/dayjs.min.js"></script>`

```html
   <div id="root">
        <h2>显示格式化后的时间</h2>
        <!-- 计算属性实现 -->
        <h3>现在是:{{fmtTime}}</h3>
        <!-- methods实现 -->
        <h3>现在是:{{getFmtTime()}}</h3>
        <!-- 过滤器实现 -->
        <h3>现在是:{{time | timeForMater}}</h3>
        <!-- 过滤器（传参）实现 -->
        <h3>现在是:{{time | timeForMater('YYYY_MM_DD')}}</h3>
        <!-- 过滤器（传参+嵌套）实现 -->
        <h3>现在是:{{time | timeForMater('YYYY_MM_DD') | mySlice}}</h3>
        <h3 :x="msg | mySlice">FOund</h3>
    </div>
    <script>
        Vue.config.productionTip = false;
        // 全局过滤器定义
        Vue.filter('mySlice', function(value) {
            return value.slice(0, 4);
        });
        new Vue({
            el: "#root",
            data() {
                return {
                    time: 16215645213,
                    msg: '你好世界123'
                }
            },
            // 计算属性实现
            computed: {
                fmtTime() {
                    return dayjs(this.time).format('YYYY年MM月DD日HH:mm:ss');
                }
            },
            // methods方法实现
            methods: {
                getFmtTime() {
                    return dayjs(this.time).format('YYYY年MM月DD日HH:mm:ss');
                }
            },
            // 过滤器配置项实现
            // 局部过滤器
            filters: {
                // 第一个过滤器
                timeForMater(value, str = 'YYYY年MM月DD日HH:mm:ss') {
                    // 页面展示的是这个函数return的值
                    return dayjs(value).format(str);
                },
                // 第二个过滤器
                mySlice(value) {
                    return value.slice(0, 4)
                }
            }
        })
    </script>
```

## 内置指令/自定义指令

### 回顾

- `v-bind:`单向绑定解析表达式，可简写为`:xxx`
- `v-model:`双向数据绑定
- `v-for:`遍历数组、对象、字符串
- `v-on:`绑定事件监听，可简写为`@`
- `v-if:`条件渲染（动态控制节点是否存在）
- `v-else:`条件渲染（动态控制节点是否存在）
- `v-show:`条件渲染（动态控制节点是否展示）

### v-text

1. 作用：向其所在的节点中渲染文本内容
2. 与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会

```html
    <div id="root">
        <h2>{{name}}</h2>
        <h2 v-text="name"></h2>
        <!-- FOund -->
        <h2 v-text="str"></h2>
        <!-- <h3>404</h3> -->
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                    str: '<h3>404</h3>'
                }
            },
        })
    </script>
```

### v-html

1. 作用：向指定节点中渲染包含html结构的内容
2. 与插值语法的区别：
   - v-html会替换掉节点中所有内容，{{xx}}则不会
   - v-html可以识别html结构
3. 严重注意：v-html有安全性问题！！！
   - 在网站上动态渲染任意HTML是非常危险的，容易导致XSS攻击
   - 一定要在可信的内容上使用v-html，永远不要在用户提交的内容上！

```html
    <div id="root">
        <h2>{{name}}</h2>
        <h2 v-text="name"></h2>
        <!-- FOund -->
        <h2 v-html="str"></h2>
        <!-- <h3>404</h3> -->
        <h2 v-html="str2"></h2>
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                    str: '<h3>404</h3>',
                    str2: '<a href=javaScript:location.href="http://www.baidu.com?"+document.cookie>点我跳转</a>',
                }
            },
        })
    </script>
```

### v-cloak

1. 本质是一个特殊属性，Vue实例创建完毕并接管容器后，会删掉v-cloak属性
2. 使用css配合v-cloak可以解决网速慢时页面展示{{xxx}}的问题

```css
        /* 属性选择器，选择所有带[]内属性的标签 */
        [v-cloak] {
            display: none;
        }
```

```html
    <div id="root">
        <h2 v-cloak>{{name}}</h2>
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    name: 'FOund',
                }
            },
        })
    </script>
```

### v-once

1. `v-once`所在节点在初次动态选然后，就视为动态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新，可以用于优化性能。

```html
    <div id="root">
        <h2 v-once>初始化的n值:{{n}}</h2>
        <h2>当前的n值:{{n}}</h2>
        <button @click="n++">点我n+1</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    n: 0
                }
            },
        })
    </script>
```

### v-pre

1. 跳过其所在节点的编译过程
2. 可利用它跳过：没有使用指令语法，没有使用插值语法的节点，会加快编译

```html
    <div id="root">
        <h2 v-pre>Vue其实很简单</h2>
        <h2>当前的n值:{{n}}</h2>
        <button @click="n++">点我n+1</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        new Vue({
            el: '#root',
            data() {
                return {
                    n: 0
                }
            },
        })
    </script>
```

### 自定义指令

> `directives`配置项中存放自定义指令

```html
    <!-- 需求1：定义一个v-big指令，和v-text功能类似，但会把绑定的数值放大10倍 -->
    <!-- 需求2：定义一个v-fbind指令，和v-bind指令功能类似，但可以让其所绑定的input元素默认获取焦点 -->
    <div id="root">
        <h2>当前n值是:<span v-text="n"></span></h2>
        <h2>放大10倍后:<span v-big="n"></span></h2>
        <button @click="n++">点我n++</button>
        <br>
        <br>
        <input type="text" v-fbind:value="n">
    </div>
```

#### 1.定义语法

##### (1)局部指令

**函数写法：**

> big函数何时被调用？
>
> 1. 指令与元素成功绑定时
> 2. 指令所在的模板被重新解析时

> 更加注重细节

```js
            directive: {
                // big函数何时被调用？
                // 1.指令与元素成功绑定时
                // 2.指令所在的模板被重新解析时
                // 'big-number' (element, binfing) {
                // 驼峰命名用-分割并且用引号引入
                //     element.innerText = binfing.value * 10;
                //     console.log(element, binfing.value);
                // },
                // 定义一个局部指令fbind(函数写法)
                big(element, binfing) {
                    element.innerText = binfing.value * 10;
                    // 第一个参数：dom元素
                    // 第二个参数：该被绑定元素的部分属性
                    console.log(element, binfing);
                },
            }
```

**对象写法：**

> 其实就是函数写法中bind和updata的结合

```js
                // 定义一个局部指令fbind(对象写法)
                fbind: {
                    // Vue规定了指定函数名bind,inserted,updata
                    // 指令与元素成功绑定时（开始）
                    bind(element, binding) {
                        element.value = binding.value;
                    },
                    // 指令所在元素被插入页面时
                    inserted(element, binding) {
                        element.focus();
                    },
                    // 指令所在模块被重新赋值时
                    updata(element, binding) {
                        element.value = binding.value;
                    }
                }
```

##### (2)全局指令

**函数写法：**

```js
        // 定义一个全局指令fbind
        Vue.directives('fbind', {
            // Vue规定了指定函数名bind,inserted,updata
            // 指令与元素成功绑定时（开始）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            // 指令所在模块被重新赋值时
            updata(element, binding) {
                element.value = binding.value;
            }
        });
```

**对象写法：**

```js
        // 全局指令第二种函数写法
        Vue.directives('fbind', function(element, binfing) {
            element.innerText = binfing.value * 10;
            // 第一个参数：dom元素
            // 第二个参数：该被绑定元素的部分属性
            console.log(element, binfing);
        });
```

#### 2.配置对象中常用的3个回调

> ("参数1[被绑定的元素]","参数2[冒号后面被绑定的属性]")

1. .bind:  指令与元素成功绑定时调用
2. .inserted:  指令所在元素被插入页面时调用
3. .update:  指令所在模板结构被重新解析时调用

![image-20220723162317415](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220723162317415.png)

#### 3.备注

1. 指令定义时不加v-，但使用时要加v-
2. 指令名如果是多个单词，要使用kebab-case命名方式，不要用camelCase命名

```js
                'big-number' (element, binfing) {
                // 驼峰命名用-分割并且用引号引入
                    element.innerText = binfing.value * 10;
                    console.log(element, binfing.value);
                },
```

## 生命周期

**mounted配置项**

> 1. 又名：生命周期回调函数，生命周期函数，生命周期钩子
> 2. 是什么：Vue在关键时刻帮我们调用一些特殊名称的函数
> 3. 生命周期函数的名字不可以更改，但函数的具体内容是程序员根据需求编写的
> 4. 生命周期函数中的this指向是vm  或  组件实例对象

下面的例子是让h2执行一个动画，从透明度1到0。有两种写法，第一种是将定时器写在vue外面，第二种就是使用到了mounted。当Vue完成模板解析并把初始的真实DOM元素放入页面后（挂载完毕）再调用mounted内的代码。

> 注意：
>
> - mounted方法之前是存在其他方法的，之后也有。Vue在特定的情况下调用这些方法的行为被称为**生命周期钩子**
> - 把初始的真实DOM元素放入页面叫做**挂载**，另外注意是第一次把真实DOM放进页面，并不是更新DOM。

```html
    <div id="root">
        <h2 v-if="a">001</h2>
        <h2 :style="{opacity}">Hello world</h2>
    </div>
    <script>
        Vue.config.productionTip = false;

        const vm = new Vue({
            el: '#root',
            data() {
                return {
                    opacity: 1,
                    a: false
                }
            },
            methods: {

            },
            // 挂载
            // Vue完成模板解析并把初始的真实DOM元素放入页面后（挂载完毕）调用mounted
            // （将真实DOM放入页面叫做挂载）
            // （mounted是在挂载完毕之后调用）
            mounted() {
                console.log('mounted');
                setInterval(() => {
                    vm.opacity -= 0.01;
                    if (vm.opacity <= 0) {
                        vm.opacity = 1;
                    }
                }, 16);
            },
        });
        // 通过外部定时器实现
        // setInterval(() => {
        //     vm.opacity -= 0.01;
        //     if (vm.opacity <= 0) {
        //         vm.opacity = 1;
        //     }
        // }, 16);
    </script>
```

### 分析生命周期

[生命周期图解](https://www.yuque.com/docs/share/65187e9f-fbd4-450c-a4f0-0a2bb69b84a7?# 《Vue生命周期》)

**常用生命周期钩子：**

1. mounted：发送ajax请求，启动定时器，绑定自定义事件，订阅消息等【初始化操作】
2. beforeDestroy：清除定时器，解绑自定义事件，取消订阅消息等【收尾工作】

**关于销毁Vue实例：**

1. 销毁后借助Vue开发者工具看不见任何信息
2. 销毁后自定义事件会失效，但原生DOM事件依然有效
3. 一般不会再beforeDestroy操作数据，因为即便操作数据，也不会再触发更新流程了

```html
    <div id="root">
        <h2>当前的n值是：{{n}}</h2>
        <button @click="add">点我n++</button>
        <button @click="bye">点我销毁vm</button>
    </div>
    <script>
        Vue.config.productionTip = false;
        const vm = new Vue({
            el: '#root',
            // template存放模板
            // template: `
            // <div>
            //     <h2>当前的n值是：{{n}}</h2>
            //     <button @click="add">点我n++</button>
            // </div>
            // `,
            data() {
                return {
                    n: 1
                }
            },
            methods: {
                add() {
                    this.n++;
                },
                bye() {
                    console.log('bye');
                    this.$destroy();
                }
            },
            beforeCreate() {
                // 此时：无法通过vm访问到data中的数据，methods的方法
                console.log('beforeCreate');
                console.log(this);
                // debugger卡一个断点
            },
            created() {
                // 此时：可以通过vm访问到data中的数据，methods中配置的方法
                console.log('created');
                console.log(this);
                // debugger;
            },
            beforeMount() {
                // 此时：
                // 1.页面呈现的是未经Vue编译的DOM结构
                // 2.所有对DOM的操作，最终都不奏效
                console.log('beforeMount');
                // debugger;
            },
            mounted() {
                // 此时：
                // 1. 页面中呈现的是经过Vue编译的DOM。
                // 2. 对DOM的操作均有效(尽可能避免)。
                // 至此初始化过程结束， 一般在此进行: 开启
                // 定时器、 发送网络请求、 订阅消息、 绑定自
                // 定义事件、 等初始化操作。 
                console.log('beforeMount');
                // debugger;
            },
            beforeUpdate() {
                // 此时：
                // 数据是新的，但是页面是旧的，即：页面尚未和数据保持同步
                console.log('beforeUpdate');
                console.log(this.n); //更改后的n，但是页面并没更改
            },
            updated() {
                // 此时：
                // 数据是新的
                console.log('updated');
                console.log(this.n); //更改后的n，页面上的数据也更新
            },
            beforeDestroy() {
                // 此时：
                // vm中的所有：data，methods，指令等等，都处于可用状态，马上要执行销毁过程，
                // 一般在此阶段；关闭定时器，取消订阅消息，解绑自定义事件等收尾操作
                console.log('beforeDestroy');
                console.log(this.n);
            },
            destroyed() {
                // 此时：
                // 销毁完毕
                console.log('destroyed');
            },
        });
    </script>
```

# Vue组件化编程

## 传统方式编写应用：

存在问题：

1. 依赖关系混乱，不好维护
2. 代码复用率不高

![image-20220723204348600](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220723204348600.png)

## 使用组件编写应用：

![image-20220723204809438](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220723204809438.png)

## 非单文件组件

> 一个文件中包含n个组件

### 组件基本使用
#### 1.定义组件

使用Vue.extend(options)创建，其中options和new Vue(options)时传入的那个options几乎一样，但是区别如下：

1. el不写，为什么？
   - 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器
2. data必须写成函数，为什么？
   - 避免组件被复用时，数据存在引用关系

> 备注：使用template可以配置组件结构

```js
        // 1.创建组件
        // 创建school组件
        const school = Vue.extend({
            // el: '#root',
            // 组件无需定义他的位置，它的存在地点听从大哥(vm)
            template: `
            <div>
                <h2>学校名称:{{schoolName}}</h2>
                <h2>学校地址:{{address}}</h2>
            </div>
            `,
            data() {
                return {
                    schoolName: 'zhiyou',
                    address: '郑州',
                }
            },
        });
        // 创建student组件
        const student = Vue.extend({
            // el: '#root',
            // 组件无需定义他的位置，它的存在地点听从大哥(vm)
            template: `
            <div>
                <h2>学生名称:{{studentName}}</h2>
                <h2>学生年龄:{{age}}</h2>
                <button>点击</button>
            </div>
            `,
            data() {
                return {
                    studentName: 'FOund',
                    age: 20
                }
            },
        });
        // 创建hello组件
        const hello = Vue.extend({
            // el: '#root',
            // 组件无需定义他的位置，它的存在地点听从大哥(vm)
            template: `
                <h2>Hello {{name}}</h2>
            `,
            data() {
                return {
                    name: 'FOund',
                }
            },
        });
```

#### 2.注册组件

1. 局部注册：
   - 靠new Vue的时候传入components选项
2. 全局注册：
   - 靠Vue.component(’组件名‘,组件)

```js
        // 2.注册组件（全局注册）
        Vue.component('hello', hello);
        // 创建vm
        new Vue({
            el: '#root',
            data() {
                return {
                    msg: '你好啊'
                }
            },
            // 组件门
            // 2.注册组件（局部注册）
            components: {
                // 组件命名
                // 驼峰命名法
                // 在使用组件步骤中标签名字应为
                // <school-assembly></school-assembly>或者
                // <school-Assembly></school-Assembly>
                schoolAssembly: school,
                // 简写形式
                student
            }
        })
```

#### 3.编写组件标签

```html
    <div id="root">
        <hello></hello>
        <!-- 3.使用组件，编写组件标签 -->
        <school-assembly></school-assembly>
        <hr>
        <student></student>
    </div>
```
### 组件几个注意点
#### 组件命名规范

##### 一个单词组成

- 第一种写法 (首字母小写)：my-school
- 第二种写法(首字母大写)：School

##### 多个单词组成

- 第一种写法(kebab-case命名)：my-school
- 第二种写法(CamelCase命名)：MySchool（需要使用Vue脚手架支持）

##### 备注

1. 组件名尽可能回避HTML中已有的元素名称，例如：h2,H2都不行。
2. 可以使用name配置项指定组件在开发者工具中呈现的名字。

> 在创建组件中添加配置项`name：''`可以更改组件在开发者工具中呈现的名字
>
> 一般在第三方组件库或者大型项目会这样使用

```js
        const school = Vue.extend({
            name: 'xvexiao',
            // el: '#root',
            // 组件无需定义他的位置，它的存在地点听从大哥(vm)
            template: `
            <div>
                <h2>学校名称:{{schoolName}}</h2>
                <h2>学校地址:{{address}}</h2>
            </div>
            `,
            data() {
                return {
                    schoolName: 'zhiyou',
                    address: '郑州',
                }
            },
        });
```

#### 关于组件标签

- 第一种写法：`<school></school>`

- 第二中写法：`<school/>`

- > 备注：不使用脚手架时，`<school/>`会导致后续组件不能渲染

#### 一个简写方式

`const school = Vue.extend(options)`可以简写为：`const school = options`

> 看似创建的组件是一个对象形式，但是Vue在后台有一个判断，实际上还是调用了`Vue.extend(options)`

```js
        // 创建student组件
        const student = {
            // el: '#root',
            // 组件无需定义他的位置，它的存在地点听从大哥(vm)
            template: `
            <div>
                <h2>学生名称:{{studentName}}</h2>
                <h2>学生年龄:{{age}}</h2>
                <button>点击</button>
            </div>
            `,
            data() {
                return {
                    studentName: 'FOund',
                    age: 20
                }
            },
        };
```

### 组件的嵌套

```html
    <div id="root">

    </div>
    <script>
        Vue.config.productionTip = false;

        // 定义school组件
        const student = Vue.extend({
            template: `
            <div>
                <h2>学生：{{name}}</h2>
               <h2>年龄：{{age}}</h2>
            </div>
            `,
            data() {
                return {
                    name: 'FOund',
                    age: 18
                }
            }
        });

        // 定义school组件
        const school = Vue.extend({
            template: `
            <div>
                <h2>名：{{name}}</h2>
               <h2>{{address}}</h2>
               <student></student>
            </div>
            `,
            data() {
                return {
                    name: 'FOund',
                    address: 'zz'
                }
            },
            // 注册组件（局部）
            components: {
                student
            }
        });

        // 定义hello组件
        const hello = Vue.extend({
            template: `
            <div>
            <h2>Hello {{name}}</h2>    
            </div>
            `,
            data() {
                return {
                    name: 'FOund',
                }
            },
        });

        // 定义app组件
        const app = Vue.extend({
            template: `    
            <div>
                <hello></hello>
                <school></school>
            </div>
            `,
            components: {
                school,
                hello
            }
        });

        new Vue({
            template: `<app></app>`,
            el: '#root',
            // 注册组件（局部）
            components: {
                app
            }
        })
    </script>
```

### 关于VueComponent

1. school组件本质上是一个名为VueComponent的构造函数，且不是程序员定义的，是Vue.extend生成的。
2. 我们只需要写`<school>`或`<school></school>`,Vue解析时会帮我们创建school组件的实例对象即Vue帮我们执行的：new VueComponent(options)
3. 特别注意：每次调用Vue.extend。返回的都是一个全新的VueComponent！！！
4. 关于this指向：
   - 组件配置中：
     - data函数，methods中的函数，watch中的函数，computed中的函数，他们的this均是【VueComponent实例对象】
   - new Vue(options)配置中：
     - data函数，methods中的函数，watch中的函数，computed中的函数，他们的this均是【Vue实例对象】
5. VueComponent的实例对象，以后简称**vc**（也可称为：**组件实例对象**）
   - Vue的实例对象，以后简称**vm**

### 一个重要的内置关系

1. 一个重要的内置关系：`VueComponent.prototype.__proto__===Vue.prototype`
2. 为什么要有这个关系：让组件实例对象(vc)可以访问到Vue原型上的属性，方法

![image-20220724165031366](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220724165031366.png)

## 单文件组件

> 一个文件中只有一个组件（一个.vue就代表一个组件）

### 1.编写最基本的School组件

创建`School.vue`文件

```vue
<!-- 组件的结构 -->
<template>
    <div class="demo">
        <h2>学校名称:{{schoolName}}</h2>
         <h2>学校地址:{{address}}</h2>
         <h2>{{n}}</h2>
         <button @click="add">点我n++</button>
    </div>
</template>

<!-- 组件交互相关的代码（数据，方法，等等） -->
<script>
    // 暴露第二种写法
    export default {
        name:'School',
        data() {
            return {
                 schoolName: 'zhiyou',
                 address: '郑州',
                 n:0
            }
        },
        methods: {
            add(){
                n++;
            }
        },
    };
    // 暴露第一种写法
    // export default {school};
</script>

<!-- 组件的样式 -->
<style>
    .demo{
        background-color: orange;
    }
</style>
```

### 2.编写APP操控组件

新建`App.vue`文件

```vue
<template>
    <div>
        <School></School>
    </div>
</template>

<script>
    import School from './School.vue';
    export default {
        name:'App',
        components:{
            School,
        }
    }

</script>

<style>

</style>
```

### 3.编写入口文件

新建`main.js`入口文件

```js
// 入口文件
import App from './App.vue';
new Vue({
    el: '#root',
    components: {
        App
    },
})
```

### 4.新建html文件

新建`index.html`文件

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root">
        <App></App>
    </div>
    <script src="../js/vue.js"></script>
    <script src="./main.js"></script>
</body>
</html>
```

# Vue CLI

## 脚手架配置

### 说明

1. Vue脚手架是Vue官方提供的标准化开发工具（开发平台）
2. 最新的版本是4.x
3. [官方文档](https://cli.vuejs.org/zh/)
4. 全局安装`npm install -g @vue/cli`
5. 执行命令`npm run serve`启动vue

![image-20220724201954642](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220724201954642.png)

### 介绍

- babel.config文件跟webpack有关，检查语法和语法转换
- package-lock跟npm包管理有关，主要放一些npm的相关信息
- package记录第三方npm包的版本信息，`"scripts"`属性下存放着指令的详细配置
- src文件
  - assets中存放一些静态资源文件
  - components文件存放组件
  - App.vue 是管理组件的老大
  - main.js 入口文件
- public文件
  - favicon.ico 页面页签logo
  - index.html 主要页面

### 关于main中的render

> render的使用实际上就是Vue引入的问题，脚手架中引入的是精简化过的Vue`vue.runtime.js`

**vue.js与vue.runtime.xxx.js的区别**

1. vue.js是完整版的Vue，包含：核心功能+模板解析器
2. vue.runtime.xxx.js是运行版的Vue，只包含：核心功能：没有模板解析器

> 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容

```js
new Vue({
    // 完成了将App组件放入容器中
    render: h => h(App),
    // render(createElement) {
    //     return createElement('hi', '你好啊')
    // },
    // template: `<h1>你好啊</h1>`,
}).$mount('#app')
```

## 修改默认配置

vue脚手架默认隐藏了所有webpack相关的配置，若想要查看具体的webpack配置，

请执行：`vue inspect > output.js`会生成一个`vue.config.js`文件

通过[查看文档](https://cli.vuejs.org/zh/config/)来定制你的vue相关配置

**示例：**

```js
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        },
    },
    // 语法检查关闭
    lintOnSave: false,
};
```

> 平时练习建议关闭语法检查避免不必要的报错

### 关于不同版本的Vue

- Vue.js与vue.runtime.xxx.js的区别
  - vue.js是完整的Vue,包含：核心功能+模板解析器
  - vue.runtime.xxx.js试运行版的Vue，只包含：核心功能：没有模板解析器
- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到createElement函数去指定具体内容

## ref属性

> 简单来说就是获取元素

1. 被用来给元索或子组件注册引用信息 (id的替代者)
2. 应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
3. 使用方式:
   - 打标识: `<h1 ref="xx">.....</h1>`或`<School ref="xxx" ></School>`
     获取: this. $refs. xxx

```vue
<template>
    <div>
       <h1 v-text="msg" ref="title"></h1>
       <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
       <School ref="sch"/>
       <School id="sch"/>
    </div>
</template>

<script>
// 引入school组件
import School from "./components/School.vue"

export default {
    name:'App',
    components:{School},
    data() {
        return {
            msg:'欢迎'
        }
    },
    methods:{
        showDom(){
            // 获取具有ref标签标注的标签
            console.log(this.$refs);
            console.log(this.$refs.title);//真实dom元素
            console.log(this.$refs.btn);//真实dom元素
            console.log(this.$refs.sch);//School组件的实例对象（vc）

        }
    }
}
</script>
```

## 配置项props

> 功能：让组件接收外部传过来的数据

### 1.传递数据

`<Demo name="xxx" />`

通过在标签上添加属性来传递数据

```html
<template>
    <div>
       <Student name="李四" sex="女" :age="18" />
       <Student name="王老五" sex="男" :age="100" />
    </div>
</template>
```

### 2.接收数据

#### 第一种方式(只接收)

> 简单声明接受（开发中写得多）

```js
    props:['name','sex','age']
```

#### 第二种方式(限制类型)

> 接收的同时对数据进行类型限制

```js
   	props:{
        name:String,
        age:Number,
        sex:String
    }
```

#### 第三种方式(限制类型，限制必要性，指定默认值)

> 接收的同时对数据进行类型限制+默认值的指定+必要性的限制（正规的开发）

```js
    props:{
        name:{
            type:String,//name类型字符串
            required:true,//name是必要的，与required一般不一起写
        },
        age:{
            type:Number,
            default:99//默认值
        },
        sex:{
            type:String,
            required:true
        }
    }
```

### 备注：

> props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据

**在data数据中添加新的数据：**

> 其实是创建了一个新的数据放到_data中变成可修改的

```js
    data() {
        return {
            msg:'你好',
            myAge:this.age //this指向vc上的age
        }
    },
```

## mixin混入(混合)

> 可以把多个组件共用的配置提取成一个混入对象

**使用方法：**

 新建文件`minin.js`,定义公用配置并暴露出去

```js
export const mixin = {
    methods: {
        showName() {
            alert(this.name);
        }
    },
    // 生命周期也可以
    mounted() {
        console.log('你好啊');
    },
}

export const mixin2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}
```

**在你需要的组件中引入这个公用配置**

```js
// 引入一个混合mixin
import { mixin,mixin2 } from './mixin'
```

**添加配置项mixins**

```vue
    mixins:[mixin,mixin2] 
```

此时引入公用配置项的组件都有了公共配置项`mixin.js`

*全局混入：*

```js
import {mixin1,mixin2} from './mixin.js'

Vue.mixin(mixin1);
Vue.mixin(mixin2);
```

> - 时所有的组件都有了公共配置项，不管是App还是App里面的子组件
> - 但是当单个组件中存在已有的重复的配置，优先使用
>
> 

## Vue插件

> 功能：用于增强Vue
>
> 本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据

**定义插件**

> 新建一个文件夹`plugins.js`脚本文件，注意将数据暴露出去
>
> 1. 添加全局过滤器
> 2. 添加全局指令
> 3. 配置全局混入
> 4. 添加实例方法（在Vue原型上添加公共方法、属性）

```js
export default {
    install(Vue) {
        // 1.全局过滤器定义
        Vue.filter('mySlice', function(value) {
            // 获取4位数据
            return value.slice(0, 4);
        });
        // 2.定义一个全局指令fbind
        Vue.directive('fbind', {
            // Vue规定了指定函数名bind,inserted,updata
            // 指令与元素成功绑定时（开始）
            bind(element, binding) {
                element.value = binding.value;
            },
            // 指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus();
            },
            // 指令所在模块被重新赋值时
            updata(element, binding) {
                element.value = binding.value;
            }
        });
        // 3.定义混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })
        // 4.给Vue原型上添加一个方法(vm和vc都可以用)
        Vue.prototype.hello = () => { alert('你好啊！') }
    }
}
```

**使用插件**

```js
// 引入插件
import plugins from "./plugins";

// 使用use应用插件,有点像中间件
Vue.use(plugins);
```

## scoped样式

> 不同组件之间添加样式可能会造成类名等冲突，scoped出现就避免了这类问题

- scoped属性
  - 使内部css仅限于该组件，使其局部生效
- lang属性
  - 规定内部css书写规范

```html
<!-- scoped将该style内的样式变成局部 -->
<style scoped lang="css">
    .demo{
        background-color: skyblue;
    }
</style>
```

## uuid

## nanid

## 实现子组件向父组件传递数据

> 通常情况下组件之间的传递数据通过props可实现，但是仅限于父组件向子组件传递数据，而兄弟组件之间也无法进行传递

**解决思路**

- 在父组件例如App上添加一个可以传参方法
- 将这个方法传递给子组件
- 子组件接收到这个方法，并使用这个方法将数据当作实参传入进去
- 这时，父组件就会接收到子组件传递过来的数据

**app.vue**

```js
    methods: {
      // 这个x就是子组件传递的数据
      addTodo(x){
          this.todos.unshift(x);//忽略
      }  
    },
```

```html
// 将这个方法传递给myHeader子组件
<myHeader :addTodo="addTodo" />
```

**myHeader.vue**

```js
    //接收 addTodo 方法
	props:['addTodo'],
    methods:{
        add(e){
            //----------↓↓↓忽略↓↓↓-------------
            if (!e.target.value.trim()) {
                return alert('输入不能为空');
            }
            // 将用户的输入包装成一个todo对象
            const todoObj={
                // 使用nanoid生成不重复id
                id:nanoid(),
                title:e.target.value,
                done:false
            };
            e.target.value='';
            //----------↑↑↑忽略↑↑↑-------------
            
            this.addTodo(todoObj);
            // 将子组件header产生的数据传递给app父组件  ←重要
        }
    }
```

## 组件自定义事件

### 事件绑定

> 需求：点击子组件中的btn将子组件的数据传递给App
>
> - 思路1：通过父组件给子组件传递函数类型的props实现：子给父传递数据*(与上文一样)*
> - 思路2：通过父组件给子组件绑定自定义事件实现：子给父传递数据*(第一种写法：使用@或者v-on)*
> - 思路3：通过ref获取到这个组件*(第二种写法：使用ref)*

**App.vue添加事件：**

```js
    methods: {
        getSchoolNane(name){
            console.log('app收到学校名',name);
        },
        getStudentNane(name){
            console.log('app收到学生名',name);
        }
    },
```

> 事件触发的方法要写在被绑定者身上

**Student.vue添加方法:**

> $emit("事件",[传递的参数])  触发组件实例对象身上的事件
>
> - 传递的参数可以是多个不唯一，但是接收也要有形参接收

```js
    methods: {
        // 这个方法可以写在一个按钮上
        sendStudentName(){
            // 触发Student组件实例对象身上的found事件
            this.$emit('found',this.name)
        }
    },
```

**思路2：**

> 跟内置事件一样，也可以写事件修饰符，例如触发一次的`.once`

```html
<!-- 通过父组件给子组件绑定自定义事件实现：子给父传递数据(第一种写法：使用@或者v-on) -->
       <Student v-on:found="getStudentNane"/>
<!-- 两种其中一个 -->
       <Student @found="getStudentNane"/>
```

**思路3:**（更灵活）

> 通过ref可以获取到这个组件，然后在`mounted`挂载完毕生命周期执行这个自定义事件

```html
<!-- 通过ref获取到这个组件(第二种写法：使用ref) -->
       <Student ref="student"/>
```

```js
    mounted() {
        //this.$refs.student获取到这个组件
        this.$refs.student.$on('found',this.getStudentNane) //绑定自定义事件
        //this.$refs.student.$once('found',this.getStudentNane)//绑定自定义事件(仅触发一次)
    },
```

### 事件解绑

两种解绑事件的方法，一种是通过`$off()`,一种是通过`$destroy()`

- `$off()`仅仅解绑事件
- `$destroy()`销毁当前组件实例,就连vm也可以销毁

```js
    methods: {
        Unbind(){
            // 1.仅适用于解绑一个事件
            this.$off('found');

            // 2.解绑多个自定义事件
            // this.$off(['found','demo']);

            // 3.解绑所有自定义事件
            // this.$off();
        },
        death(){
            this.$destroy();//销毁了当前的student组件实例
            // 销毁后所有student实例的自定义事件全都不奏效
        }
    },
```

### 总结

1. 自定义事件是一种组件间通信的方式，适用于：**子组件===>父组件**

2. 使用场景：A是父组件，B是子组件，B想给A传数据，那就要在A中给B绑定自定义事件(事件的回调在A中)

3. 绑定自定义事件：

   1. 第一种，在父组件中：`<Demo @found="found"/>`或`<Demo v-on:"found"/>`

   2. 第二种，在父组件中：

      ```js
      <Demo ref="demo">
      ......
      mounted(){
          this.$refs.xxx.$on('found',this.test)
      }
      ```

   3. 若想让自定义事件之触发一次，可以使用`once`修饰符，或者`$once`方法

4. 触发自定义事件：`this.$emit('found',数据)`

5. 解绑自定义事件：`this.$off('found')`

6. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符

   - `<Student ref="student" @click.native="show"/>`

7. 注意：通过`this.$refs.xxx.$on('found',回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题

## 全局实现总线(GlobalEventBus)

> 一种组件间通信的方式，适用于任意组件间通信
>
> 本质上还是绑定自定义事件和触发

**安装全局事件总线：**

- 在main入口文件中

```js
new Vue({
    el: "#app",
    render: h => h(App),
    beforeCreate() {
        // 在Vue原型上添加
        Vue.prototype.$bus = this; //安装全局事件总线
    }
})
```

**使用事件总线：**

- 发送数据，在发送数据组件上添加触发自定义事件的方法

```js
    // 发送数据组件
	methods: {
        sentStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    },
```

- 接收数据，接收数据的组件则在公共$bus组件身上绑定自定义事件，同时，在销毁组件之前要解绑事件

```js
    // 挂载完毕钩子
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，收到了名字',data);
        })
    },
    // 销毁之前钩子
    beforeDestroy(){
        this.$bus.$off('hello')
    }
```

## 消息订阅与发布

使用到第三方包**pubsub-js**

> 一种组件间通信的方式，适用于任意组件间通信

**使用步骤：**

1. 安装pubsub:`npm i pubsub-js`
2. 引入:`import pubsub from 'pubsub-js'`
3. 接收数据：A组件想接收数据，则在A组件中订阅消息，订阅的回调留在A组件自身

```js
    // 挂载完毕钩子
    mounted(){
        this.pubid = pubsub.subscribe('hello',(msgName,data)=>{
            console.log('有人发布了hello消息，hello消息的回调执行了');
            console.log(msgName,data);
            // msgName是发布订阅名
            // data是传递的数据
        })
    },
    // 销毁之前钩子
    beforeDestroy(){
        // 在组件销毁之前取消订阅
        pubsub.unsubscribe(this.pubid)

    }
```

4. 提供数据：`pubsub.publish('xxx',数据)`
   - xxx代表消息名

```js
    methods: {
        sentStudentName(){
            // this.$bus.$emit('hello',this.name)
            pubsub.publish('hello',666)
        }
    },
```

5. 最好在beforeDestroy钩子中，用`pubsub.unsubscribe(this.pubid)`去<span style="color:red">取消订阅</span>

> 注意：
>
> 1. pubsub.subscribe中的普通函数this指向undefined，需要使用到箭头函数指向到组件本身
> 2. pubsub.subscribe会返回一个类似“id”一样的识别，要想取消订阅，需要将此“id”添加到组件上，再通过`pubsub.unsubscribe(this.pubid)`取消订阅，类似于定时器取消

## nextTick生命周期钩子

1. 语法：`this.$nextTick(回调函数)`
2. 作用：在下一次DOM更新结束后执行其指定的回调
3. 什么时候用：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调函数中执行

## Vue动画(含animate.css)

> 所用：在插入，更新或移除DOM元素时，在合适的时候给元素添加样式类名

图示：

![image-20220731192516678](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220731192516678.png)

### vue内置

#### 写法1：

> 使用@keyframes动画写
>
> 定义进入动画和离开动画使用
>
> - .hello-enter-active     *进入*
> - .hello-leave-active     *离开*
> - 注意：‘hello’ 为自定义name，默认为 v

```css
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: shoW 1s;

    }
    .hello-leave-active{
        animation: shoW 1s reverse;
    }

    @keyframes shoW {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
```

> - 使用`<transition></transition>`标签包裹
> - 添加name加以识别默认为v
> - 添加appear表示加载页面前执行一次进入动画
>   - 也可写作：`:appear:true`

```html
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name="hello" appear>
        <h1 v-show="isShow">你好啊</h1>   
      </transition>
  </div>
```

> data内添加数据isShow来控制动画的显示与隐藏

#### 写法2

> 使用过渡来写
>
> - 分别写出进入、离开的起点和终点
> - 将过渡属性`transition`添加给执行动画者身上
>   - 此处有个bug，添加到执行动画者身上，位置会错乱
>   - 添加给`.hello-enter-active,.hello-leave-active`类名即可

```css
    h1{
        background-color: orange;
    }

    /* 进入的起点 */
    .hello-enter{
        transform: translateX(-100%);
    }
    /* 进入的终点 */
    .hello-enter-to{   
        transform: translateX(0);
    }

    .hello-enter-active,.hello-leave-active{
        transition: all 0.5s ease;
    }

    /* 离开的起点 */
    .hello-leave{
        transform: translateX(0);
    }
    /* 离开的终点 */
    .hello-leave-to{   
        transform: translateX(-100%);
    }
```

> 模板部分

```html
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="hello" appear>
        <h1 v-show="isShow" key="1">你好啊</h1>   
        <h1 v-show="isShow" key="2">FOUND</h1>   
      </transition-group>
  </div>
```

### animate.css

> 官网[aninate.css](https://animate.style/)

1. 安装 `npm install animate.css --save`
2. 引入`import 'animate.css';`
3. 为`<transition-group>`添加属性

- `name="animate__animated animate__bounce"`**必要属性**
- **enter-active-class**    进入属性
- **leave-active-class**    离开属性

```html
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group 
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutDown"
      >
        <h1 v-show="isShow" key="1">你好啊</h1>   
        <h1 v-show="isShow" key="2">FOUND</h1>   
      </transition-group>
  </div>
```

# Vue中的AJAX

## vue脚手架配置代理

### 方法一

在vue.config.js中添加如下配置

```js
    // 开启代理服务器 方式1
    devServer: {
        proxy: 'http://localhost:5000'
    }
```

说明：

1. 有点：配置简单，请求资源时直接发给前端(8080)即可
2. 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
3. 工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器（优先匹配前端资源）

### 方法二

编写vue.config.js配置具体代理规则：

> devServer对象中的proxy可以写多个代理服务器
>
> 配置：
>
> - pathRewrite: { '^/api': '' } 表示代理服务器向服务器请求数据时将 前缀 变为空

```js
    // 开启代理服务器 方式2
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: true,
                //用于支持websocket

                // changeOrigin: true,
                // 用于控制请求头中的host值
                // 改变向服务器提交的端口true为说谎，false为不说谎

                pathRewrite: { '^/api': '' }
            },

            '/foo': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/foo': '' }
            }
        }
    }
```

说明：

1. 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
2. 缺点：配置略微繁琐，请求资源时必须加前缀

## Vue-resource

> vue1.0使用较多

安装：

- `npm i vue-resource`

配置：

- 在main.js入口文件中引入使用插件

```js
// 引入vue-resource
import vueResource from 'vue-resource';

// 使用插件
Vue.use(vueResource);
```

示例：

```js
this.$http.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
    response=>{
       console.log('请求成功');
    },
    error=>{
       console.log('请求失败后');
    }
)
```

其实和axios一摸一样

```js
axios.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
    response=>{
       console.log('请求成功');
    },
    error=>{
       console.log('请求失败后');
    }
)
```

## 插槽

1. 作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于**父组件==>子组件**
2. 分类：默认插槽，具名插槽，作用域插槽
3. 使用方式：默认插槽，具名插槽，作用域插槽

### 默认插槽

> 想要实现这种效果就要使用到vue的插槽知识
>
> - 分成两个组件，一个app老大组件，一个分类块组件
> - 分类块组件中的东西又不一样，可以利用插槽来配置

![image-20220804230125411](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220804230125411.png)

**App组件中：**

```html
    <div class="container">
      
      <Category title="美食" >
         <!--这里面的标签会被放到Category组件的slot组件中-->
        <img src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
      </Category>

      <Category title="游戏" >
        <ul>
            <!--此时遍历的数据是app中的数据-->
            <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </Category>

      <Category title="动画" >
        <img src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
      </Category>

    </div>
```

**Category组件**

```html
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽标签(挖个坑，等待组件的使用者填充)
        接收img-->
        <slot>我是默认值，当组建的使用者没有传递具体结构的时候，我再出现</slot>
    </div>
```

### 具名插槽

> 要求每个组件标签体中的节点插入到指定`<slot></slot>`中，可以对slot进行命名
>
> - 通过对`<slot></slot>`进行命名``<slot name='demo1'></slot>``
> - 标签体中的标签进行定位`slot="center"`
> - 另外，如果你使用的是`<template>`标签就要使用`v-slot:footer`这种命名方式

![image-20220804232157182](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220804232157182.png)

**App.vue**

```html
    <div class="container">

      <Category title="美食" >
        <img slot="center" src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
        <a href="#" slot="footer">美食</a>
      </Category>

      <Category title="游戏" >
        <ul slot="center">
            <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
         <div slot="footer" class="foot">
           <a href="#">游戏</a>
           <a href="#">游戏</a>
          </div>
      </Category>

      <Category title="动画" >
        <img slot="center" src="https://ftp.bmp.ovh/imgs/2020/12/a3f405032b1db71a.png" alt="">
        <template v-slot:footer>
           <div slot="footer" class="foot">
             <a href="#">动画</a>
             <a href="#">动画</a>
           </div>
           <h4>欢迎</h4>
        </template>

      </Category>

    </div>
```

**Category.vue**

```html
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽标签(挖个坑，等待组件的使用者填充)
        就是挖出多个不同的坑，并命名
        -->
        <slot name="center">我是默认值1，当组建的使用者没有传递具体结构的时候，我再出现</slot>
        <slot name="footer">我是默认值2，当组建的使用者没有传递具体结构的时候，我再出现</slot>

    </div>
```

### 作用域插槽

> - 当数据在子组件中，且无法向app传递数据的时候
> - Category.vue组件可以把数据传递给app.vue
>   - 通过在slot标签中添加属性`:games="games"`
>   - app.vue中组件标签体要用`<template>`包裹 并添加属性`scope="games"`
>   - 此时`<template>`内部就可以读取到games
>   - 也可通过解构赋值的操作避免多次调用，见下文

**App.vue**

```html
    <div class="container">

          <Category title="游戏" >
              <template scope="games">      
                    <ul>
                        <li v-for="(g,index) in games.games" :key="index">{{g}}</li>
                    </ul>
             </template>
          </Category>

         <Category title="游戏" >
                <template scope="{games}">
                      <ol>
                        <li v-for="(g,index) in games" :key="index">{{g}}</li>
                    </ol>
                </template>
          </Category>

          <Category title="游戏" >
                <template scope="games"> 
                  <h4 v-for="(g, index) in games.games" :key="index">{{g}}</h4>
                </template>
          </Category>
    </div>
```

**Category.vue**

```html
<template>
    <div class="category">
        <h3>{{title}}分类</h3>

        <!-- 定义一个插槽标签(挖个坑，等待组件的使用者填充)
        接收img
        -->
        <slot :games="games">默认内容</slot>
    </div>
</template>
```

# Vuex

## Vuex是什么

> 1. 概念：专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对Vue应用中多个组件的共享状态进行集中式管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信
> 2. Github地址：[链接](http://github.com/vuejs/vuex)
> 3. 官方文档：[前往](https://vuex.vuejs.org/zh/)

## 什么时候使用Vuex

1. 多个组件依赖于同一状态(数据)
2. 来自不同组件的行为需要变更同一状态
   - a组件改变数据导致其他组件用的数据也发生改变

### 全局事件总线实现

> 缺点：繁琐

![image-20220805104541797](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220805104541797.png)

### Vuex实现

> 优点：牛逼

![image-20220805104900299](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220805104900299.png)

## Vuex工作原理

![image-20220805143033637](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220805143033637.png)

> - Vue Components相当于客人
> - Avtions相当于服务员
> - Mutations相当于后厨
> - State相当于饭菜(数据)

## Vuex安装

> 注意：
>
> - vue2中，要用vuex的3版本
> - vue3中，要用vuex的4版本

执行：`npm i vue@3 `安装

搭建环境：

1. 创建文件夹`src/store/index.js`

```js
// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex';
// 使用Vuex插件
Vue.use(Vuex);
// 准备actions————用于响应组件中的动作
const actions = {

};
// 准备Mutations————用于操作数据(state)
const mutations = {

};
// 准备state————用于存储数据
const state = {

};
// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
});
```

2. 在main.js入口文件引入`store`配置项

```js
......
// 引入store
import store from './store/index';
......

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    // 配置store
    store,
});
```

> import引入的注意事项：
>
> - 脚手架在读取js文件的时候会先将import置顶执行，这就导致在main中你Vue.use(Vuex)是不起作用的
> - 所以要在index.js中引入Vue和Vuex并执行`Vue.use(Vuex);`

## Vuex使用

> 现在想完成一个加法减法，奇数可加，等待加的功能
>
> - 抽离出公共数据n
> - 将sum数据放置到state中
> - 当然，sum数据是可以在组件实例对象的$store.state身上找到的

**Count.vue文件**

```js
    methods: {
        increment(){
            // this.$store.dispatch('jia',this.n);
            this.$store.commit('JIA',this.n);//相当于跳过服务员直接报菜名给后厨
        },
        decrement(){
            // this.$store.dispatch('jian',this.n);
            this.$store.commit('JIAN',this.n);//相当于跳过服务员直接报菜名给后厨
        },
        incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n);
        },
        incrementWait(){
            this.$store.dispatch('jiaWite',this.n);
        },
    },
```

**index.js文件中**

- `actions`存放业务逻辑类代码
  - `(context, value)`
    - context 		*上下文(根据情况给你传递数据,有点像mini版的store)*
    - value              *组件传递过来的值(上文中的this.n)*
- `mutations`处理数据
  - (state, value)
    - state              *存放sum数据的容器*
    - value             *传递的值(上文中的this.n)*
- `state`存放数据

```js
......
// 准备actions
// 用于响应组件中的动作
const actions = {
    jia(context, value) {
        // console.log('actions中的jia被调用', context, value);
        // context 上下文
        // value   组件传递过来的值
        context.commit('JIA', value);
    },
    jian(context, value) {
        context.commit('JIAN', value);
    },
    jiaOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }
    },
    jiaWite(context, value) {
        setTimeout(() => {
            context.commit('JIA', value);
        }, 300);
    }
};
// 准备Mutations
// 用于操作数据(state)
const mutations = {
    JIA(state, value) {
        // console.log('mutations中的JIA被调用', state, value);
        // state  存放sum数据的容器
        // value  传递的值
        state.sum += value
    },
    JIAN(state, value) {
        state.sum -= value
    },
};
// 准备state
// 用于存储数据
const state = {
    sum: 0 //当前的和
};
......
```

### getter配置项

1. 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
2. 在`store.js`中追加`getter`配置

```js
......
// getters
// 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});
......
```

### 四个map方法的使用

#### 1.mapState方法

> 用于帮助映射`state`中的数据为计算属性
>
> 引入：`import {mapState} from 'vuex'`

```js
    computed:{
		......
        
        // 老写法
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // subject(){
        //     return this.$store.state.subject
        // },
        
        //借助mapState生成计算属性，从state中读取数据。（对象写法）
        ...mapState({he:'sum',svexiao:'school',xveke:'subject'}),

        //借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject']),
        
        ......
    }, 
```

#### 2.mapGetter方法

> 用于帮助映射`getters`中的数据为计算属性
>
> 引入：`import {mapState,mapGetters} from 'vuex'`

```js
    computed:{
		......
        
        // 老写法
        // bigSum(){
        //     return this.$store.getters.bigSum
        // }
        
        //借助mapGetters生成计算属性，bigSum。（对象写法）
        ...mapGetters({bigSum:"bigSum"}),

        //借助mapGetters生成计算属性，bigSum。（数组写法）
        ...mapGetters(["bigSum"]),   
        
        ......

    },
```

#### 3.mapMutations方法

> 用于帮助我们生成与`mapMutations`对话的方法，即：包含：`$store.commit(xxx)`的函数
>
> 引入：`import {mapState,mapGetters,mapMutations} from 'vuex'`

```js
    methods: {
        ......
        
        // 借助mapMutations生成对应的写法，方法中会调用commit去联系mutations(对象写法)
         ...mapMutations({increment:'JIA',decrement:'JIAN'}),
        
        // 借助mapMutations生成对应的写法，方法中会调用commit去联系mutations(数组写法)
        ...mapMutations(['JIA','JIAN']),
		
        ......

    },
```

#### 4.mapActions方法

> 用于帮助我们生成与`actions`对话的方法，即包含：`$store.dispatch(xxx)`的函数
>
> 引入：`import {mapState,mapGetters,mapMutations,mapActions  } from 'vuex'`

```js
    methods: {
        ......
        
        // incrementOdd(){
        //     this.$store.dispatch('jiaOdd',this.n);
        // },
        // incrementWait(){
        //     this.$store.dispatch('jiaWite',this.n);
        // },
        // 借助mapActions生成对应的写法，方法中会调用commit去联系Actions(对象写法)
        // ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWite'}),
    
        // 借助mapActions生成对应的写法，方法中会调用commit去联系Actions(数组写法)
        ...mapActions(['jiaOdd','jiaWite']),
		
        ......
    },
```

#### 注意：

注意: mapActions与mapMutations使用时，若需要传递参数需要:在模板中绑定事件时**传递好参数**，否则
参数是事件对象

```vue
<template>
    <div class="category">
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大十倍:{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
      <select v-model.number="n">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
      </select>
      <button @click="JIA(n)">+</button>
      <button @click="JIAN(n)">-</button>
      <button @click="jiaOdd(n)">当前和为奇数再加</button>
      <button @click="jiaWite(n)">等一等再加</button>
    </div>
</template>

<script>

import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name:'Count',
    data(){
         return {
             n:1,//用户选择的数字
        }
    },
    computed:{
        ...mapState(['sum','school','subject']),
        ...mapGetters(["bigSum"]),    
    },  
    methods: {
        ...mapMutations(['JIA','JIAN']),
        ...mapActions(['jiaOdd','jiaWite']),
    },
    mounted() {
        
    },
}
</script>
```

### 模块化命名空间

1. 目的：让代码好维护，让多种数据分类更加明确
2. 修改`store.js`
3. 开启命名空间`namespaced: true`

```js
// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {...},
    mutations: {...},
    state: {...},
    getters: {...}
};
// 人员管理相关的配置
const peopleOptions = {
    namespaced: true,
    actions: {...},
    mutations: {...},
    state: {...},
    getters: {...}
};
// 创建并暴露store
export default new Vuex.Store({
    // 模块化并命名
    modules: {
        a: countOptions,
        b: peopleOptions
    }
});
```

4. 开启命名空间后。组件中读取state数据

```js
// 方式1：直接自己读取
this.$store.state.a.list
// 方式2：借助mapState读取
...mapState('a',['sum','school','subject'])
```

5. 开启命名空间后，组件中读取getters数据

```js
// 方式1：直接自己读取
this.$store.getters['b/firstPersonName']
// 方式2：借助mapGetters读取
...mapGetters('a',["bigSum"]),
```

6. 开启命名空间后，组件中调用dispatch

```js
// 方式1：直接自己读取
this.$store.dispatch('b/addPersonWang',personObj);
// 方式2：借助mapActions读取
...mapActions('a',['jiaOdd','jiaWite']),
```

7. 开启命名空间后，组件中调用commit

```js
// 方式1：自己直接commit
this.$store.commit('b/ADD_PERSON',personObj);
// 方式2：借助mapMutations读取
...mapMutations('a',['JIA','JIAN']),
```

# Vue中的路由

## vue-router的理解

> vue的一个插件库,专门用来实现SPA应用

## 对SPA应用的理解

1. 单页 Web应用(single page web application, **SPA**) 
2. 整个应用只有一 个完整的页面。
3. 点击页面中的导航链接不会刷新页面，只会做页面的局部更新。
4. 数据需要通过 ajax请求获取

## 路由的理解

### 什么是路由?

1. 一个路由就是一组映射关系(key - value) 
2. key 为路径value可能是function或component

### 路由分类

1. 后端路由:
  1. 理解: value是function,用于处理客户端提交的请求
  2. 工作过程: 服务器接收到一个请求时,根据请求路径找到匹配的函数来处理请求返回响应数据。


2. 前端路由: 
  1. 理解: value是component,用于展示页面内容。
  2. 工作过程: 当浏览器的路径改变时,对应的组件就会显示。

## 基本使用

1. 安装vue-router，命令：`npm i vue-router`
2. 应用插件：`Vue.use(VueRouter)`
3. 编写router配置项：

```js
// 新建router文件夹创建index.js
// 该文件专门用于创建路由器
import VueRouter from 'vue-router'
// 引入组件
import About from '../components/About.vue'
import Home from '../components/Home.vue'

export default new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
});
```

main.js文件编写：

```js
// 引入Vue
import Vue from "vue";
// 引入App
import App from "./App.vue";
// 引入VueRouter
import VueRouter from 'vue-router'

// 引入路由器 可以省略index
import router from './router'

// 关闭Vue提示
Vue.config.productionTip = false;

// 应用插件
Vue.use(VueRouter);

// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
    // 配置路由器
    router
});
```

4. 实现切换（active-class可配置激活的样式）
   - to="/about"  *前往的路由接口*

```html
<!-- 原始html中我们使用a标签实现页面跳转 -->
<!-- <a class="list-group-item active" href="./about.html">About</a>
<a class="list-group-item" href="./home.html">Home</a> -->

<!-- vue中借助router-link标签实现路由的切换 -->
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
```

5. 指定展示位置

```html
              <!-- 指定路由的呈现位置 -->
             <router-view></router-view>
```

> app中无需引入组件就可以通过路由来在指定路由位置展示

### 注意点

1. 路由组件通常存放在`pages`文件夹中，一般组件通常存放在`components`文件夹
2. 通过切换，*隐藏*了的路由组件，默认是被销毁的，你需要的时候再去挂载
3. 每个组件都有自己的`$route`属性，里面存储者自己的路由信息
4. 整个应用只有一个router,可以通过组件的`$router`属性获取到

## 多级(嵌套)路由

1. 配置路由规则，使用children配置项

```js
export default new VueRouter({
    // 一级路由
    routes: [{
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,
            // 二级路由
            children: [{ //通过children配置子级路由
                    path: 'news', // 此处一定不要写：/news
                    component: News,
                },
                {
                    path: 'message', // 此处一定不要写：/message
                    component: Message,
                }
            ]
        },
    ]
});
```

2. 跳转(写完整路径)
   - to要写完整路径

```js
<router-link class="list-group-item " active-class="active" to="/home/news">News</router-link>
```

## 路由的query参数

1. 传递参数

```js
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link>

<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link 
		:to="{
       path:'/home/message/detail',
       query:{
           id:item.id,
           title:item.title
       }
      }">
       {{item.title}}
</router-link>
```

2. 接收参数

```html
    <ul>
        <li>消息编号：{{$route.query.id}}</li>
        <li>消息编号：{{$route.query.title}}</li>
    </ul>
```

## 命名路由

> 是对上文中`path:'/home/message/detail',`参数的优化

1. 给路由命名

```js
export default new VueRouter({
    // 一级路由
    routes: [{
            name: 'guanyv',//命名
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,

            // 二级路由
            children: [{
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,

                    children: [{
                        name: 'xiangqing',//命名
                        path: 'detail',
                        component: Detail,
                    }, ]
                }
            ]
        },
    ]
});
```

2. 简化跳转

```html
//简化前
<router-link class="list-group-item" active-class="active" to="/home">Home</router-link>

//简化后
<router-link :to="{
         name:'xiangqing', //就不需要使用path而是使用name
         query:{
             id:item.id,
             title:item.title
           }
         }">
         {{item.title}}
</router-link>

```

## 路由的params参数

1. 配置路由，声明接收params参数

```js
export default new VueRouter({
    // 一级路由
    routes: [{
            name: 'guanyv',
            path: '/about',
            component: About,
        },
        {
            path: '/home',
            component: Home,

            // 二级路由
            children: [{
                    path: 'news',
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,

                    children: [{
                        name: 'xiangqing',
                        path: 'detail/:id/:title', //此处要用占位符占用
                        component: Detail,
                    }, ]
                }
            ]
        },
    ]
});
```

2. 传递参数

```js
<!-- 跳转路由并携带params参数，to的字符串写法 -->
<!-- <router-link :to="`/home/message/detail/${item.id}/${item.title}`">{{item.title}}</router-link>&nbsp;&nbsp; -->

<!-- 跳转路由并携带params参数，to的对象写法 -->
<router-link :to="{
      name:'xiangqing',
      params:{
          id:item.id,
           title:item.title
       }
}">
     {{item.title}}
</router-link>
```

> 注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置

3. 接收参数

```html
    <ul>
        <li>消息编号：{{$route.params.id}}</li>
        <li>消息编号：{{$route.params.title}}</li>
    </ul>
```

## 路由的props配置

作用：让路由组件更方便的收到参数

```js
{
       name: 'xiangqing',
       path: 'detail',
       component: Detail,
      // props的第一种写法 对象 用的少
      // props的第一种写法， 值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
      // props: { a: 1, b: 'hello' }

      // props的第二种写法 布尔值
      // 若布尔值为真，就会把该路由组件收的所有preams参数以props的形式传给Detail组件。不适用于query形式
      // props: true

      // props的第三种写法 函数
       props($route) {
          return { id: $route.query.id, title: $route.query.title }
     }
}
```

## `<router-link>`的replace属性

1. 作用:控制路由跳转时操作浏览器历史记录的模式
2. 浏览器的历史记录有两种写入方式:分别为push和replace，push 是追加历史记录，replace是替换当前记录。路由跳转时候默认为push
3. 如何开启replace模式: `<router-link replace ...... >Nlews</router-link>`

## 编程式路由导航

1. 作用：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活

```js
// $router的两个API
    methods:{
        pushShow(m){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
                //params:{
                //    id:m.id,
                //    title:m.title
                //}
            })
        },
        replaceShow(m){
        	this.$router.replace({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
                //params:{
                //    id:m.id,
                //    title:m.title
                //}
            })
        }
    }
```

2. 类似于BOM中的浏览器历史记录前进回退功能的api

```js
    methods:{
      back(){
        this.$router.back();//回退
      },
      forward(){
        this.$router.forward();//前进
      },
      go(){
        this.$router.go(3);//正数前进几 负数后退几
      }
    }
```

## 缓存路由组件

1. 作用：让不展示的路由组件保持挂载，不被销毁
2. 具体编码
   - `<keep-alive>`中存放要缓存的组件
   - `include="News"`指定你要缓存的**路由**
   - 如果没有`include`,则缓存所有这里面存放的组件

```html
                <keep-alive include="News"> //路由名字
                    <router-view></router-view>
                </keep-alive>
```

3. 如果缓存的不止一个组件可以使用`:include="[]"`

```html
                <keep-alive :include="['News','Message']"> //这两个组件都被缓存
                    <router-view></router-view>
                </keep-alive>
```

## 两个新的生命周期钩子

1. 作用：路由组件**独有**的两个钩子，用于捕获路由组件的激活状态
2. 具体名字
   1. `activated`路由组件被激活时触发
   2. `deactivated`路由组件失活时被触发

> 其实还有一个生命周期钩子叫`nextTick`

## 路由守卫

> 1. 作用：对路由进行权限控制
> 2. 分类：全局守卫，独享守卫，组件内守卫

### 1.全局守卫

> 全局前置路由守卫
> 初始化和在每一次路由器切换之前

- 对每个路由配置meta可以加以限定

```js
{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
}
```

```js

router.beforeEach((to, from, next) => {
    // to:去哪里
    // from:来自哪里
    // next:放行
    if (to.meta.isAuth) { //控制判断是否需要鉴权
        // 实际开发中判断的可能是token
        if (localStorage.getItem('school') == 'found') {
            next();
        } else {
            alert('学校名不对');
        }
    } else {
        next();
    }
});
```

### 2.后置守卫

> 后置路由守卫
>
> 初始化和在每一次路由器切换之后

```js
router.afterEach((to, from) => {
    ......
})
```

### 3.独享路由守卫

> 某一个路由所独享的守卫
>
> - 为这个路由添加beforeEnter方法
> - 和beforeEach一样的写法

```js
			{
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                    beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) { //控制判断是否需要鉴权
                            if (localStorage.getItem('school') == 'found') {
                                next();
                            } else {
                                alert('学校名不对');
                            }
                        } else {
                            next();
                        }
                    },
                },
```

### 4.组件路由守卫

写在组件内部的路由守卫

```js
    // 通过路由规则 进入该组件时被调用
    beforeRouteEnter(){
       if (to.meta.isAuth) { //控制判断是否需要鉴权
           if (localStorage.getItem('school') == 'found') {
                 next();
          } else {
                 alert('学校名不对');
          }
          } else {
             next();
     }
    },
    // 通过路由规则，离开该组件时被调用 -----不要和后置路由守卫搞混了
    beforeRouteLeave(){
        next();//放行
    }
```

## 路由器的两种工作模式

1. 对于一个url来说，什么是hash值?             *#及其后面的内容就是hash值。*

2. hash值不会包含在HTTP请求中，即: hash值不会带给服务器。
3. hash模式:
  1. 地址中永远带着#号,不美观。
  2. 若以后将地址通过第三方手机app分享,若app校验严格， 则地址会被标记为不合法。
  3. 兼容性较好。
4. history模式:
  1. 地址干净，美观。
  2. 兼容性和hash模式相比略差。
  3. 应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题。

### 服务器的上线部署

> 1. 当前端工作完成时需要对工程进行打包`npm run build`
> 2. 打包好的文件传给后端人员
> 3. 后端人员将文件放进static或者public文件中
> 4. 对于history模式的路由，后端人员可以通过npm包`connect-history-api-fallback`加以解决

```js
// 这是一台小服务器
const express = require('express');

//引入connect-history-api-fallback
const history = require('connect-history-api-fallback');

const app = express();

//使用history
app.use(history());

app.use(express.static(__dirname + '/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'tom',
        age: 18
    })
})

app.listen(5005, (err) => {
    if (!err) {
        console.log('服务器启动成功');
    }
})
```

# Vue UI组件库

## 移动端常用UI组件库

1. Vant https://youzan.github.io/vant
2. Cube UI https://didi.github.io/cube-ui
3. Mint UI http://mint-ui.github.io

## PC端常用UI组件库

1. Element UI https://element.eleme.cn
2. 2.IView UI https://www.iviewui.com

## 以Element UI为例

> 安装`npm i element-ui`

### 1.完整引入

**main.js文件中**

> 弊端：文件过大

```js
import Vue from "vue";
import App from "./App.vue";

// 完整引入
// 引入ElementUI组件库
import ElementUI from 'element-ui';
// 引入E样式
import 'element-ui/lib/theme-chalk/index.css';
// 使用El
Vue.use(ElementUI);

// 关闭Vue提示
Vue.config.productionTip = false;
// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),
});
```

### 2.按需引入

1. 安装babel-plugin-component `npm install babel-plugin-component`
2. 为`babel.config.js`添加配置
   1. 官网中写的是` .babelrc `,vue2.0中要更改`babel.config.js`

```js
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset', 
        ["@babel/preset-env", { "modules": false }]
    ],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}
```

3. 更改mian.js文件

```js
import Vue from "vue";
import App from "./App.vue";

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.component('el-button', Button); //第一个参数是名字，如果你更改了组件也要更改
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

// 关闭Vue提示
Vue.config.productionTip = false;
// 创建vm
new Vue({
    el: "#app",
    render: h => h(App),

});
```

