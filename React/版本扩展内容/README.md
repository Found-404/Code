---
title: React
date: 2022-08-08 20:45:53
tags: 
- React
- 框架
categories: 
- 框架

---

# React入门

## 什么是React

[React中文文档](https://react.docschina.org/)

React是一个用于构建 用户界面的JavaScript库.
用户界面: HTML页面(前端)
React主要用来写HTML页面,或构建Web应用
如果从MVC的角度来看, React仅仅是视图层(V) , 也就是只负责视图的渲染.而并非提供了完整的M和C的功能。
React起源于Facebook的内部项目,做用来架设Instagram的网站.并于2013年5月开源

<!-- more -->

## React特点

### 1.声明式

你只需要描述UI ( HTML )看起来是什么样,就跟写HTML一样
React负责渲染UI ,并在数据变化时更新UI

```js
const jsx = <div className="app">
   <h1>Hello React! 动态变化数据：{{count}}</h1>
 </div>
```

### 2.基于组件

- 组件是React最重要的内容
- 组件表示页面中部分内容
- 组合复用这些组件

### 3.学习一次,随处使用

- 使用React可以开发Web应用
- 使用React可以开发移动端原生应用( react-native )
- 使用React可以开发VR(虚拟现实)应用(react360)

## React基本使用

### React的安装

安装命令: `npm i react react-dom`

- react 包是核心,提供创建元素、组件等功能
- react-dom 包提供DOM相关功能等

### React的使用

1. 引入react和react-dom两个js文件

```html
    <!-- 1.引入reactjs文件 -->
    <script src="./node_modules/react/umd/react.development.js"></script>
    <script src="./node_modules/react-dom/umd/react-dom.development.js"></script>
```

2. 创建React元素 `React.createElement()`
   - 参数1：元素名称(标签名)
   - 参数2：元素属性
   - 参数3+：元素的子节点

```js
        // 2.创建react元素
        // 参数1：元素名称(标签名)
        // 参数2：元素属性
        // 参数3：元素的子节点
        const title = React.createElement('h1', null, 'Hello React')
```

3. 渲染React元素到页面中 `ReactDOM.render()`

   > 负责将创建好的元素渲染进页面

   - 参数1：要渲染的React元素
   - 参数2：挂载点相当于vue中的容器

```js
        // 3.渲染React元素
        // 参数1：要渲染的React元素
        // 参数2：挂载点相当于vue中的容器
        ReactDOM.render(title, document.getElementById('root'))
```

### React脚手架

> 1. 脚手架是开发现代web应用的必备
> 2. 充分利用Webpack，Babel，ESLint等工具辅助项目开发
> 3. 零配置，无需手动配置繁琐的工具即可使用
> 4. 关注业务，而不是工具配置

#### 使用脚手架

1. 初始化项目，命令`npx create-react-app my-app`
2. 启动项目，在项目根目录执行命令`npm run start`

### 在脚手架中使用React

1.导入react和react-dom两个包。

```js
import React from' react ，
import ReactDOM from 'react-dom'
```

2.调用`React.createElement()`方法创建react元素。

```js
const title = React.createElement('h1', null, 'Hello React!')
```

3.调用`ReactDOM.render()`方法渲染react元素到页面中。

```js
ReactDOM.render(title, document.getElementById('root'))
```

## JSX

### JSX的基本使用

#### jsx简介

**createElement()**

> 		1. 繁琐不简洁
> 		1. 不直观
> 		1. 不优雅

**jsx**

> 1. 跟html写法一样
> 2. 简单
> 3. 识别度高

**JSX**是**JavaScript XML**的简写,表示在JavaScript代码中写XML ( HTML )格式的代码。

- 优势:声明式语法更加直观、与HTML结构相同,降低了学习成本、提升开发效率

#### 使用步骤

1. 使用jsx语法创建react元素

```js
const title = <h1>Hello JSX 
        <span>这是span</span> 
    </h1>
```

2. 使用`ReactDOM.render()`方法渲染react元素到页面

```js
// 渲染react元素
ReactDOM.render(title,document.getElementById('root'))
```

##### 总结：

为什么脚手架中可以使用JSX语法?

1. JSX 不是标准的ECMAScript语法,它是ECMAScript的语法扩展。
2. 需要使用babel编译处理后,才能在浏览器环境中使用。
3. create-react- app脚手架中已经默认有该配置,无需手动配置。
4. 编译JSX语法的包为: <u>@babel/preset-react</u>.

#### 注意

1. React元素的属性名使用驼峰命名法
2. 特殊属性名: 

  - class   --->   className
  - for   --->   htmlFor
  - tabindex   --->   tablndex 

3. 没有子节点的React元素可以用 /> 结束。
4. 推荐:使用小括号包裹JSX , 从而避免JS中的自动插入分号陷阱。

```js
const title = (
    <h1 className='title'>Hello JSX 
        <span>这是span</span> 
        <p/>
    </h1>
)
```

### jsx中使用js表达式

> 这点和vue有点不同使用的是单括号

```js
const name='Jack';
const title = (
    <h1 className='title'>Hello {name} 
        <br/>
        <span>这是span</span> 
        <p/>
    </h1>
)
```

> 表达式其实就是可以用变量接收并且可以log出来的
>
> - 在这里，ul中的li被自动循环遍历，而vue中要使用 v-for

```js
  		const data = ['01','02','03'];
		const CDOM=(
            <div>
                <h1>前端js框架列表</h1>
                <ul>
                   {
                    data.map((item,index)=>{
                        return <li key='index'>item</li>
                    })
                   }
                </ul>
            </div>
        )
```

## 组件化

理解: 用来实现局部功能效果的代码和资源的集合htm/css/js/image等等)
作用: 复用编码,简化项目编码,提高运行效率

> 当应用是以多组件的方式实现,这个应用就是一个组件化的应用
>
> 这点就不详细写了，在vue中已经了解过了

# React面向组件编程

> 安装React开发者工具  谷歌应用商店搜索即可

## 函数式组件

> 组件名首字母大写
>
> - Demo()中的this指向undefined
> - 因为babel编译后开了严格模式

```js
       function Demo() {
            return <h2>我是函数定义的组件(适用于简单组件的定义)</h2>
        }
        // 渲染React元素
        ReactDOM.render(<Demo/>, document.getElementById('root'))
```

执行了ReactDOM.render( <MyComponent/.......之后，发生了什么?

1. React解析组件标签。找到了Demo组件。
2. 发现组件是使用函数定义的。随后调用该函数。将返回的虚拟DOM转为真实DOM，随后呈现在页面中。

## 类式组件

```js
        // 创建类式组件
        class Demo extends React.Component{
            //render是放在哪里的? -MyComponent的原型对象 上。供实例使用。
            //render中的this是谁? -MyComponent的实例对象 <=> MyComponent组件实例对象
            render(){
                return <h2>我是类定义的组件(适用于复杂组件的定义)</h2>
            }
        };
        // 渲染React元素
        ReactDOM.render(<Demo/>, document.getElementById('root'))
```

执行了ReactDOM.render( <MyComponent/.......之后，发生了什么?

1. React解析组件标签，找到了MyComponent组件。
2. 发现组件是使用类定义的。随后new出来该类的实例，并通过该实例调用到原型上的render方法。
3. 将render返回的虚拟DOM转为真实DOM，随后呈现在页面中

## 简单/复杂组件

1. 简单组件无**状态(state)**
2. 复杂组件有**状态(state)**

组件的状态中存放着数据，数据的改变驱动着页面的改变

> 跟vue的data存放数据有点相像

## 组件实例的三大核心属性

> 新版react的hooks也可以使用这三大属性

### 1.state

> state中存放着数据，官方要求写成对象形式

```js
        // 创建类式组件
        class Demo extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    isHot:true
                }
            }
            render(){
                const {isHot} = this.state //解构赋值将isHot取出
                return <h1>今天天气很{isHot ?"炎热":"凉爽"}</h1>
            }
        };
        // 渲染React元素
        ReactDOM.render(<Demo/>, document.getElementById('root'))
```

**事件绑定**

- 这点和Vue有点区别，react将所有原生的`onclick`变成了`onClick`
- 等号右边不用”“改用{}
- `onClick={change}`这是一个赋值语句，如果加了()则变成了执行之后在返回给onClick，但是却是undefined

```js
        // 创建类式组件
        class Demo extends React.Component{
            constructor(props){
                super(props)
                this.state = {
                    isHot:true
                }
            }
            render(){
                const {isHot} = this.state
                return <h1 onClick={change}>今天天气很{isHot ?"炎热":"凉爽"}</h1>
            }
        };
        // 渲染React元素
		// 注意：此处react自动帮我们new了组件实例对象Demo
        ReactDOM.render(<Demo/>, document.getElementById('root'))
        function change() {
            console.log('123');
        }
```

上面的代码并不完善

- 首先，change()中的this为undefined，因为Babel开启了严格模式的原因
- 解决：
  - 让change可以读取到state
  - 改变state中的值

```js
        class Demo extends React.Component{
            // 构造器执行一次，渲染react的时候.render自动帮我们new了Demo
            constructor(props){
                super(props)
                this.state = {
                    isHot:true
                }
                this.change=this.change.bind(this);
                // 解决change中的this指向问题
            }

            // render调用几次？——1+n次，1是初始化执行的一次，n是你每次调用执行的次数
            render(){
                const {isHot} = this.state
                return <h1 onClick={this.change}>今天天气很{isHot ?"炎热":"凉爽"}</h1>
            }

            // change() 点几次调用几次
            change() {
                // change.放在哪里? - Demo的原型对象上，供实例使用
                // 由于change是作为onClick的回调，所以不是通过实例调用的，是直接调用
                // 类中的方法默认开启了局部的严格模式，所以change中的this为undefined
                // this.state.isHot = !this.state.isHot;//错误写法

                // 严重注意：state要借助React.Component原型上的setStateAPI进行更新
                // 且更新是一种合并，不是替换
                this.setState({isHot:!isHot})
                console.log('修改天气');
                console.log(this);
            }
        };
```

- 将change()放在了Demo里面，这就使得组件实例对象上也有了change这个方法
- 通过在构造器中`this.change=this.change.bind(this);`改变其this指向
- 这时候的change()就可以读取到state并改变它的值
  - 注意：
    - state的值无法通过=的形式进行改变
    - 调用`React.Component`原型上的`setState`API进行更新状态(数据)
    - `this.setState({isHot:!isHot})`另外数据是合并而不是替换

**精简版：**

> 扩充一个概念，当你在class中写入`a=0`的时候，这个类的实例化对象上就多了一个a属性，值为0

根据这个扩充就可以对上文代码进行简化，state就可以直接以赋值的写法写入，而change则通过赋值语句的写法＋箭头函数来定义

> 之所以使用箭头函数，是因为箭头函数中的this是寻找它父级的this，也就是Demo实例对象

```js
        class Demo extends React.Component{
            // 初始化状态
            state = {isHot:true}

            render(){
                const {isHot} = this.state
                return <h1 onClick={this.change}>今天天气很{isHot ?"炎热":"凉爽"}</h1>
            }

            // 自定义方法---要用赋值语句＋箭头函数
            // vue是把方法都放在了methods中
            change =()=> {
                // console.log(this);
                this.setState({isHot:!this.state.isHot})
            }
        };
```

> setState中传入对象

### 2.props

> 用于接收组件标签传递的参数
>
> 当数据不存在state中，而是通过`<Demo name="jerry" age="19" sex="男"/>`传递的参数，就可以使用props进行接收
>
> *在vue中props用于父组件向子组件传递数据*

```js
        // 创建组件
        class Demo extends React.Component{
            render(){
                console.log(this.props);
                const {name,age,sex}=this.props;
                return (
                    <ul>
                        <li>姓名：{name}</li>
                        <li>性别：{age}</li>
                        <li>年龄：{sex}</li>
                    </ul>
                )
            }
        };
        // 渲染组件到页面
        ReactDOM.render(<Demo name="jerry"age="19"sex="男"/>,document.getElementById('root1'));
        ReactDOM.render(<Demo name="tom" age="18" sex="女"/>, document.getElementById('root2'));
        const p={
            name:'老刘',
            age:18,
            sex:'女'
        }
        ReactDOM.render(<Demo {...p}/>, document.getElementById('root3'));
```

**对传递的数据进行限制：**

为Demo组件实例添加静态属性

- propTypes      对标签属性进行类型，必要性的限制
  - `name: PropTypes.string.isRequired`
    - `isRequired`限制name为必传且为字符串
- defaultProps    指定的默认的标签属性值

```js
        // 创建组件
        class Demo extends React.Component {
            constructor(props){
                console.log(props);
                super(props)
            }
            render() {
                const { name, age, sex } = this.props;
                return (
                    <ul>
                        <li>姓名：{name}</li>
                        <li>性别：{sex}</li>
                        <li>年龄：{age + 1}</li>
                    </ul>
                )
            }
            //静态属性static标注的属性或者方法是属于类的不会属于实例化对象
            static propTypes = {
                name: PropTypes.string.isRequired,//isRequired限制name为必传且为字符串
                sex: PropTypes.string,//限制sex成string类型
                age: PropTypes.number,//限制age成number类型
                spack: PropTypes.func//限制spack成function类型
            }
            static defaultProps = {
                sex: '不男不女',
                age: 100
            }
        };
```

**函数式组件使用props**

> 因为函数式组件是可以传递参数的所以可以使用props，正好迎合了它的作用
>
> 但是`propTypes`和`defaultProps`就要写到外面进行调用了

```js
        function Demo(props) {
            const {name,age,sex} = props
            return (
                <ul>
                    <li>姓名：{name}</li>
                    <li>性别：{age}</li>
                    <li>年龄：{sex}</li>
                </ul>
            )
        }
        // 函数式组件也可以对传递的数据进行规定和限制
        Demo.propTypes = {
            name: PropTypes.string.isRequired,//isRequired限制name为必传且为字符串
            sex: PropTypes.string,//限制sex成string类型
            age: PropTypes.number,//限制age成number类型
            spack: PropTypes.func//限制spack成function类型
        }
        Demo.defaultProps = {
           sex: '不男不女',
           age: 100
        }
        // 渲染组件到页面
        ReactDOM.render(<Demo name="tom" age={18} sex="女"/>, document.getElementById('root2'));
```

### 3.ref

**字符串型的ref**(不推荐)

> 这个ref和vue中的ref一样，也是获取元素
>
> - ref标识命名的DOM元素会被放到实例对象的refs中
> - 通过`this.refs`就可以得到这些DOM元素

```js
        class Demo extends React.Component{
            //展示左侧输入框数据
            showData=()=>{
                const {input1} = this.refs
                console.log(input1.value);
            }
            // 展示右侧输入框数据
            showData2=()=>{
                const {input2} = this.refs
                console.log(input2.value);
            }
            render(){
                return(
                    <div>
                        <input ref="input1" type="text" placeholder="点击按钮提示数据"/>
                        <button onClick={this.showData}>点我提示左侧信息</button>
                        <input onBlur={this.showData2} ref="input2" type="text" placeholder="失去焦点提示数据"/>
                    </div>
                )
            }
        };
        ReactDOM.render(<Demo/>, document.getElementById('root'));
```

**回调函数的ref**

> ref中是一个回调函数 `surrentNode=>this.input1 = surrentNode` 简写形式
>
> 传递的参数surrentNode代表这个节点本身
>
> 以下是内敛函数的写法

```js
        class Demo extends React.Component{
            //展示左侧输入框数据
            showData=()=>{
                const {input1} = this
                console.log(input1.value);
            }
            render(){
                return(
                    <div>
                        <input ref={surrentNode=>this.input1 = surrentNode} type="text" placeholder="点击按钮提示数据"/>
                        <button onClick={this.showData}>点我提示左侧信息</button>                  
                    </div>
                )
            }
        };
        ReactDOM.render(<Demo/>, document.getElementById('root'));
```

> 回调函数的写法：

```js
        class Demo extends React.Component{
            //展示左侧输入框数据
            showData=()=>{
                const {input1} = this
                console.log(input1.value);
            }
            saveInput=(c)=>{
                this.input1 = c;
                console.log('@',c);
            }
            render(){
                return(
                    <div>
                        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据"/>
                        {/*<input ref={surrentNode=>this.input1 = surrentNode} type="text" placeholder="点击按钮提示数据"/>*/}
                        <button onClick={this.showData}>点我提示左侧信息</button>
                    </div>
                )
            }
        };
        ReactDOM.render(<Demo/>, document.getElementById('root'));

```

**createRef(官方最推荐)**

> `myRef=React.createRef()`属于专人专用，只可存放一个节点
>
> 有几个要使用的DOM就声明几个`myRef=React.createRef()`

```js
        class Demo extends React.Component{
            // React.createRef调用后可以返回-个容器，该容器可以存储被ref所标识的节点（专人专用）
            myRef=React.createRef()
            myRef2=React.createRef()

            //展示左侧输入框数据
            showData=()=>{
                console.log(this.myRef.current.value);
            }
            showData2=()=>{
                console.log(this.myRef2.current.value);
            }
            render(){
                return(
                    <div>
                        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>
                        <button onClick={this.showData}>点我提示左侧信息</button>
                        <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据"/>
                    </div>
                )
            }
        };
        ReactDOM.render(<Demo/>, document.getElementById('root'));
```

## React中事件处理

### (1)通过onXxx属性

通过onXxx属性指定事件处理函数(注意大小写)

1. React使用的是自定义(合成)事件,而不是使用的原生DOM事件一为了更好的兼容性
2. React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)一为了的高效

### (2)event.target

得到发生事件的DOM元素对象---------------------不要过度使用ref

> 应用于如果你想获取的元素就是你绑定事件的元素，那么就可以使用**event.target**

## 收集表单数据库

包含表单的组件分类

1. 受控组件
2. 非受控组件

### 非受控组件

```js
        class Login extends React.Component{
            handleSubmit=(event)=>{
                event.preventDefault();//阻止默认行为不让页面跳转
                const {username,password}=this
                console.log(username.value,password.value);
            }
            render(){
                return(
                    <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                        用户名：<input ref={c=>this.username=c} type="text" name="username"/>
                        密码：<input ref={c=>this.password=c} type="password" name="password"/>
                        <button>登录</button>                     
                    </form>
                )
            }
        };
        ReactDOM.render(<Login/>, document.getElementById('root'));
```

### 受控组件

> 受控组件有点像vue中的双向数据绑定，当改变input中的输入，数据也同时跟着改变

```js
        class Login extends React.Component{
            // 初始化状态
            static={
                username:"",//用户名
                password:""//密码
            }

            // 保存用户名到状态中
            userName=(ev)=>{
                this.setState({username:ev.target.value})
            }
            // 保存密码到状态中
            passWorl=(ev)=>{
                this.setState({password:ev.target.value})
            }

            handleSubmit=(ev)=>{
                ev.preventDefault();
                const {username,password} = this.state
                console.log(username,password);    
            }
            render(){
                return(
                    <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                        用户名：<input onChange={this.userName} type="text" name="username"/>
                        密码：<input  onChange={this.passWorl} type="password" name="password"/>
                        <button>登录</button>                     
                    </form>
                )
            }
        };
        ReactDOM.render(<Login/>, document.getElementById('root'));
```

## 高阶函数和函数柯里化

**高阶函数**:如果-一个函数符合下面2个规范中的任何一个，那该函数就是高阶函数。

> 1. 若A函数，接收的参数是一一个函数，那么A就可以称之为高阶函数。
>
> 2. 若A函数，调用的返回值依然是一“个函数，那么A就可以称之为高阶函数。
>
>    - 常见的高阶函数有: Promise，setTimeout.，arr. map()等等

**函数的柯里化**:通过函数调用继续返回函数的方式，实现多次接收参数最后统一处理的函数编码形式。

---

**对于以上受控组件函数柯里化写法：**

> 不再用`this.userName`或者`this.passWorl`这种分开写法，而是同意获取数据

```js
        class Login extends React.Component{
            // 初始化状态
            state={
                username:"",//用户名
                password:""//密码
            }
            // 保存表单数据到状态中
            saveFromData=(dataType)=>{
               return (ev)=>{
                    // console.log(dataType,ev.target.value);
                    this.setState({[dataType]:ev.target.value})
               }
            }
            handleSubmit=(ev)=>{
                ev.preventDefault();
                const {username,password} = this.state
                console.log(username,password);    
            }
            render(){
                return(
                    <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                        用户名：<input onChange={this.saveFromData('username')} type="text" name="username"/>
                        密码：<input  onChange={this.saveFromData('password')} type="password" name="password"/>
                        <button>登录</button>                     
                    </form>
                )
            }
        };
        ReactDOM.render(<Login/>, document.getElementById('root'));
```

**对于以上受控组件不适用函数柯里化写法：**

```js
        class Login extends React.Component {
            // 初始化状态
            state = {
                username: "",//用户名
                password: ""//密码
            }
            // 保存表单数据到状态中
            saveFromData = (dataType, ev) => {
                this.setState({ [dataType]: ev.target.value })
            }

            handleSubmit = (ev) => {
                ev.preventDefault();
                const { username, password } = this.state
                console.log(username, password);
            }
            render() {
                return (
                    <form action="http://www.baidu.com" onSubmit={this.handleSubmit}>
                        用户名：<input onChange={ev=>this.saveFromData('username',ev)} type="text" name="username" />
                        密码：<input onChange={ev=>this.saveFromData('password',ev)} type="password" name="password" />
                        <button>登录</button>
                    </form>
                )
            }
        };
        ReactDOM.render(<Login />, document.getElementById('root'));
```

> 其实就是将onchange本身变成一个函数，函数内则是调用`.saveFromData('username',ev)`的方法

## 组件的生命周期

### 理解：

1. 组件对象从创建到死亡它会经历特定阶段
2. React 组件对象包含一系列勾子函数(生命周期回调函数),在特定的时刻调用
3. 我们在定义组件时, 在特定的生命周期回调函数,中做特定的工作

> 其实和vue中的生命周期大致一样的思路

### 生命周期流程图(旧)

![image-20220807173632231](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220807173632231.png)

#### 1.初始化状态

> 由ReactDOM.render()触发------初次渲染

1. constructor( )                                      构造器
2. componentWillMount ( )                   组件将要挂载的钩子
3. render( )                                               初始化渲染 状态更新后被调用
4. componentDidMount( )                     组件挂载完毕的钩子
   - 一般在这个钩子中做一些初始化的事，例如，开启定时器，发网络请求，订阅消息

#### 2.更新阶段

> 由组件内部this . setSate()或父组件重新render触发

1. shouldComponentUpdate()             控制组件更新的“阀门” return true开启阀门
2. componentWillUpdate()                   组件将要更新的钩子
3. render()                                               初始化渲染 状态更新后被调用
4. componentDidUpdate( )                  组件更新完毕钩子
   - 可以传递参数
     - 1.组件身上传递的props
     - 2.组件更新之前state数据
     - 3.在新的生命周期中接收`getSnapshotBeforeUpdate`的返回值

#### 3.卸载组件

> 由ReactDOM. unmountComponentAtNode( )触发

1. componentWillUnmount( )              组件将要销毁的钩子
   - 一般在这个钩子中做一些收尾的事，例如，关闭定时器，取消订阅消息

```js
        class Demo extends React.Component {
            // 构造器
            constructor(props) {
                console.log('Count-constructor');
                super(props)
                // 初始化状态
                this.state = {
                    count: 1
                }
            }
            // 加一
            add = () => {
                // 获取原状态
                const { count } = this.state
                // 更新数据
                this.setState({ count: count + 1 })
            }
            // 强制更新按钮
            force = () => {
                //不受阀门限制
                this.forceUpdate()
            }
            // 卸载组件
            remove = () => {
                ReactDOM.unmountComponentAtNode(document.getElementById('root'))
            }
            // 组件将要挂载的钩子
            componentWillMount() {
                console.log('Count-componentWillMount将要挂载');
            }
            // 组件挂载完毕的钩子
            componentDidMount() {
                console.log('Count-componentDidMount挂载完毕');
            }
            // 组件将要销毁的钩子
            componentWillUnmount() {
                console.log('Count-componentWillUnmount将要销毁');
            }
            // 控制组件更新的“阀门” return true开启阀门
            shouldComponentUpdate() {
                console.log('Count-shouldComponentUpdate组件更新阀门');
                return true
            }
            // 组件将要更新的钩子
            componentWillUpdate() {
                console.log('Count-componentWillUpdate将要更新');
            }
            // 组件更新完毕钩子
            componentDidUpdate() {
                console.log('Count-componentDidUpdate更新完毕');
            }
            // 初始化渲染 状态更新后被调用
            render() {
                console.log('Count-Render更新中');
                const { count } = this.state
                return (
                    <div>
                        <h2>当前求和{count}</h2>
                        <button onClick={this.add}>点我+1</button>
                        <button onClick={this.remove}>点我卸载组件</button>
                        <button onClick={this.force}>不更改任何状态中的数据，强制更新</button>
                    </div>
                )
            }
        };
        // 父组件A子组件B
        class A extends React.Component {
            state = { carName: '奔驰' }
            changeCar = () => {
                this.setState({ carName: '奥托' })
            }
            render() {
                return (
                    <div>
                        <div>A</div>
                        <button onClick={this.changeCar}>换车</button>
                        <B carName={this.state.carName} />
                    </div>
                )
            }
        }
        class B extends React.Component {
            // 组件将要接收新的props的钩子
            componentWillReceiveProps(props) {
                console.log('B-componentWillReceiveProps', props);
            }
            render() {
                return (
                    <div>B,接收到的车是{this.props.carName}</div>
                )
            }
        }
        ReactDOM.render(<A />, document.getElementById('root'))
```

### 生命周期流程图(新)

> 新的生命周期中对旧版的三个Will钩子进行了删除，添加了新的钩子
>
> 下文加粗

![image-20220807193938400](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220807193938400.png)

#### 1.初始化阶段:

> 由ReactDOM. render()触发---初次渲染

1. constructor( )

2. **getDerivedStateFromProps**

   - 此钩子不常用，其可以接收props和state，return的值可以是props或者自定义值

3. render()

4. componentDidMount()           =====>    常用

  > 一般在这个钩子中做一些初始化的事，例如:开启定时器、发送网络请求、订阅消息

#### 2.更新阶段:

> 由组件内部this . setSate( )或父组件重新render触发

1. **getDerivedStateFromProps**
2. shouldComponentUpdate()
3. render()
4. **getSnapshotBeforeUpdate()**
   - 此钩子是组件即将更新完毕触发的，它可以获取到组件的旧状态，并将状态return出去由`componentDidUpdate`接收(第三个参数)
5. componentDidUpdate()
   - 有三个参数
     - 1.组件身上传递的props
     - 2.组件更新之前state数据
     - 3.在新的生命周期中接收`getSnapshotBeforeUpdate`的返回值

#### 3.卸载组件:

> 由ReactDOM. unmountComponentAtNode( )触发

1. componentWillUnmount( )       =====>常用

> 一般在这个钩子中做一些收尾的事，例如:关闭定时器、取消订阅消息

### 总结:

#### 重要的勾子

1. render:      初始化渲染或更新渲染调用
2. componentDidMount:      开启监听,发送ajax请求
3. componentWillUnmount:       做一些收尾工作, 如:清理定时器

#### 即将废弃的勾子

1. componentWillMount
2. componentWilReceivePropse
3. componentWillUpdatee

现在使用会出现警告，下一个大版本需要机上`UNSAFE_`前缀才能使用，以后可能会被彻底
废弃,不建议使用。

## diffing算法和key的作用

> 这个diffing算法和vue中的新旧虚拟dom对比是一样的

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

# React脚手架

## 使用create-react-app创建react应用

### react脚手架

1. xxx 脚手架:用来帮助程序员快速创建一个基于xxx库的模板项目
   1. 包含了所有需要的配置   （语法检查、jsx编译、devServer..）
   2. 下载好了所有相关的依赖
2. 可以直接运行一个简单效果
3. react 提供了一个用于创建 react项目的脚手架库: create-react-app
4. 项目的整体技术架构为: react + webpack + es6 + eslinte
5. 使用脚手架开发的项目的特点: 模块化,组件化,工程化

### 创建项目并启动

第一步，全局安装: `npm install -g create-react-app`
第二步，切换到想创项目的目录,使用命令:` create-react-app hello-react`
第三步，进入项目文件夹: `cd hello-react`
第四步，启动项目: `npm start`

> 查看脚手架版本`create-react-app --version`

**react中的组件文件后缀可以改为`jsx`**

### css模块化

当两个组件中有重名类名的话，可以通过为css文件命名`index.module.css`并且引入方式变为

`import hello from './index.module.css'`就可以使该css仅在当前组件适用

```js
import hello from './index.module.css'
class Hello extends Component {
    render() {
        return (
            <div>
                <h1 className={hello.title}>Hello World</h1>
            </div>
        );
    }
}
```

### 插件推荐

![image-20220808231600874](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220808231600874.png)

## TodoList项目

1. 拆分组件、实现静态组件，注意: `className、 style={{}}`的写法
2. 动态初始化列表，如何确定将数据放在哪个组件的state中?

   - 某个组件使用:放在自身的state中

   - 某些组件使用:放在他们共同的父组件state中(官方称此操作为:状态提升)


3. 关于父子之问通信:

4. [父组件] 给 [子组件]传递数据:通过props传递
5. [子组件] 给 [父组件]传递数据:通过props传递，要求父提前给子传递一个函数
6. 注意defaultChecked和checked的区别，类似的还有: defaultValue 和value
7. 状态在哪里，操作状态的方法就在哪里

# React_ajax

> 使用axios发送ajax请求
>
> 安装 `yarn add axios`
>
> 请求的url地址的端口为你代理服务器的端口，而且加上api来区分适用于下文第二种方法

```js
    getStudents=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response=>{
                console.log('成功',response.data);
            },
            error=>{
                console.log('失败',error);
            }
        )
    }
    getCars=()=>{
        axios.get('http://localhost:3000/api2/cars').then(
            response=>{
                console.log('成功',response.data);
            },
            error=>{
                console.log('失败',error);
            }
        )
    }
```



## React代理服务器

### 方法一：

> 在package.json中追加如下配置

```json
"proxy":"http://localhost:5000"
```

说明：

1. 优点:配置简单,前端请求资源时可以不加任何前缀。
2. 缺点:不能配置多个代理。
3. 工作方式:上述方式配置代理，当请求了300不存在的资源时，那么该请求会转发给5000 (优先匹配前端资源)

### 方法二：

1. 第一步：创建代理配置文件

```js
在src文件夹创建配置文件：src/setupProxy.js
```

2. 编写`setupProxy.js`配置具体代理规则：

```js
// 新版写法
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
            target:'http://localhost:5000',
            // 请求转发给谁
            changeOrigin:true,
            // 控制服务器收到的请求头中Host字段的值
            pathRewrite:{'^/api1':''}
            // 重写请求路径，将/api1去除
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''}
        }),
    )
}
```

## 消息订阅与发布机制

> 1. 工具库: `PubSubJS`
> 2. 下载: `npm install pubsub-js --save`
> 3. 使用:
>    1) `import PubSub from 'pubsub-js'`   *引入*
>    2) `PubSub.subscribe('delete',function(data){});`    *收数据的组件订阅消息*
>    3) `PubSub.publish('delete', data)`      *发数据的组件发布消息*
>       - **data**可以是对象

**收数据的组件**

```js
// github用户搜索案例： 
// 组件挂载完毕钩子
  componentDidMount(){
    this.token = PubSub.subscribe('change',(msg,data)=>{
       this.setState(data)
    })
  }
  // 组件将要销毁钩子
  componentWillUnmount(){
    PubSub.unsubscribe(this.token);
  }
```

**发送数据的组件**

```js
// github用户搜索案例： 
search=()=>{
    // 解构赋值的连续写法
    // keyWordElement是未被定义的
    const {keyWordElement:{value}}=this
    // 发送请求前通知List更新状态
    PubSub.publish('change',{isFirst:false,isLoading:true})
    // 发送网络请求
    axios.get(`https://api.github.com/search/users?q=${value}`).then(
      (res)=>{
        PubSub.publish('change',{isFirst:false,users:res.data.items,isLoading:false})
      },
      (error)=>{
        console.log('失败了');
        PubSub.publish('change',{isFirst:false,err:error.message})
      }
    )
  }
```

# Reack路由

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

1. 前端路由: 
   1. 理解: value是component,用于展示页面内容。
   2. 工作过程: 当浏览器的路径改变时,对应的组件就会显示。

### react-router-dom的理解。

1. react的一个插件库。
2. 专门用来实现一个SPA应用。
3. 基于react的项目基本都会用到此库。

> 原名应该是react-router，这里的dom是专门给web工作人员使用的

[中文文档](https://react-router.docschina.org/)

## 路由基本使用

### 路由组件和一般组件

1. 写法不同：
   - 一般组件：`<Demo>`
   - 路由组件：`<Router path="/demo" component={Dome}/>`
2. 存放位置不同：
   - 一般组件：`components`
   - 路由组件：`pages`
3. 接收到的props不同
   - 一般组件：写组件标签时传递了什么，就能收到什么
   - 路由组件：接收到三个固定属性

```js
history:
	go:f go(n)	
	goBack:f goBack()
	goForward:f goForward()
	push:f pus(path,state)
	replace:f replace(path,state)
location:
	pathname:"/about"
	serach:""
	state:undefined
match:
	params:{}
	path:"/about"
	url:"/about"
```

### Link/Route/BrowserRouter

1. 明确好界面中的导航区、展示区
2. 导航区的a标签改为Link标签
   - `<Link to="/xxx" >Demo</Link>`
3. 展示区写Route标签进行路径的匹配
   - `<Route path='/xxx’component={Demo}/>`
4. `<App/>`的最外侧包裹了一个
   - `<BrowserRouter>`或`</HashRouter>`
5. 路由组件放置在pages文件

> 这里的`BrowserRouter`是最常用的一种连接跳转，还有一种叫HashRouter

```jsx
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
              <div className="col-xs-2 col-xs-offset-2">
                <div className="list-group">
                  {/* 原生heml中靠a跳转不同页面 */}
                  {/* <a className="list-group-item active" href="./about.html">About</a>
                  <a className="list-group-item" href="./home.html">Home</a> */}
                  {/* 在react中靠路由链接实现切换组件-编写路由链接 */}
                    <Link className="list-group-item" to="/about">About</Link>
                    <Link className="list-group-item" to="/home">Home</Link>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="panel">
                  <div className="panel-body">
                    {/* 注册路由 */}
                    <Route path="/about" component={About}/>
                    <Route path="/home" component={Home}/>
                  </div>
                </div>
              </div>
        </div>
    </div>
```

**入口文件：**

```js
root.render(
   <BrowserRouter>
        <App />
   </BrowserRouter>
);
```

### NavLink

要想实现点击某个tab，可以实现添加样式的效果，需要使用到`NavLink`这个标签替换`link`标签，并且使用`activeClassName=''`指定添加的类名

```jsx
......
import {NavLink,Route} from 'react-router-dom'
......
<div className="list-group">
    {/* 原生heml中靠a跳转不同页面 */}
    {/* <a className="list-group-item active" href="./about.html">About</a>
    <a className="list-group-item" href="./home.html">Home</a> */}
    
    {/* 在react中靠路由链接实现切换组件-编写路由链接 */}
    
    <NavLink activeClassName='found' className="list-group-item" to="/about">About</NavLink>
    <NavLink activeClassName='found' className="list-group-item" to="/home">Home</NavLink>
</div>
......
```

### 关于对**NavLink**的封装

> 上述代码中的NavLink的重复性过高，可以对其进行封装
>
> 将变化的属性通过props传递，这里有个扩展内容，标签体中的内容也可以通过props传递，它会自动将内容放到children这个属性中，通过**this.props.children**可以获取到标签体内容

```jsx
...
<MyNavLink to='/about'>About</MyNavLink>
<MyNavLink to='/home'>Home</MyNavLink>
...
```

```jsx
... 
render() {
    return (
      <NavLink activeClassName='found' className="list-group-item" {...this.props}></NavLink>
    )
  }
...
```

### Switch

```jsx
...
{/* 注册路由 */}
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Route path="/home" component={Test}/>
...
```

> 如果Route中的path有重复的路径，他会匹配所有的匹配路径，从上往下依次寻找匹配的路径
>
> 如果想达到一对一的关系就可以使用Switch标签包裹,这时候就只会匹配最上面匹配的组件

```jsx
...
{/* 注册路由 */}
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Route path="/home" component={Test}/>
</Switch>
...
```

### 解决样式丢失

**1.路径引入**

在引入css样式的路径上不使用`.`而是使用`%PUBLIC_URL%`或者省略`.`

```html
    <link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css">
    <link rel="stylesheet" href="/css/bootstrap.css">
```

**2.HashRouter标签**

使用`<HashRouter></HashRouter>`包裹就可以避免路径的改变造成样式丢失。但是会在url中加上一个#号，#后面的被称为hash(哈希)值，其不会被发送给服务器

### 模糊匹配与精准匹配

1. 默认使用的是模糊匹配(简单记:**[输入的路径]**必须包含要**[匹配的路径]**，且顺序要一致
2. 开启严格匹配: `<Route exact={true} path="/about" component={About}/>`
3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

```jsx
...   
	<MyNavLink to='/about'>About</MyNavLink>
    <MyNavLink to='/home'>Home</MyNavLink>
...
   <Switch>
	  <Route exact path="/about" component={About}/>
      <Route exact path="/home" component={Home}/>
   </Switch>
...
```

### Redirect的使用

1. 一般写在所有路由注册的最下方，当所有路由都无法匹配时，跳转到Redirect指定的路由
2. 具休编码:

```jsx
...
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/home" component={Home}/>
  <Redirect to="/about"/>
</Switch>
...
```

> 默认情况下，你的url地址端口号后面虽然什么也没跟，其实他是有一个隐藏的`/`这个`/`就会和`Route`中的路径进行匹配比较，但是呢又找不到所以会显示空。
>
> 有了`Redirect`这个内置标签，就可以让其默认匹配到`to="/about"`相当于一个兜底的

## 嵌套路由

1. 注册组路由时要加上父路由的path值
2. 路由的匹配是按照注册路由的顺序进行的

> ├─components        
> │  ├─Header
> │  ├─MyNavLink
> │  └─Test
> └─pages
>  ├─About
>  └─Home
>      ├─Message
>      └─News

```jsx
<div>
    <ul className="nav nav-tabs">
        <li>
          <MyNavLink to="/home/news">News</MyNavLink>
        </li>
        <li>
          <MyNavLink to="/home/message">Message</MyNavLink>
        </li>
     </ul>
     <Switch>
       <Route path="/home/news" component={News}></Route>
       <Route path="/home/message" component={Message}></Route>
       <Redirect to="/home/news"/>
     </Switch>
</div>
```

## 向路由组件传递参数

### 1.params参数

- 路由链接(携带参数)：`<link to='/dome/test/tom/18'>详情</link>`
- 注册路由(声明接收)：`<Route path="/demo/test/:name/:age" components={Test}/>`
- 接收参数：`const {id,title} = this.props.match.params`

> 这种传递是将数据存放在url路径后面以`/`分割的方式，当然也有很多注意点，比如
>
> - 声明接收的标签要使用`/:id/:title`进行占位和express的那种有点相像

```jsx
{/* 声明接收params */}
<Route path="/home/message/detail/:id/:title" component={Detail}/>
```

接收数据的组件`this.props`上存放如下：

![image-20220813161825095](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220813161825095.png)

### 2.search参数

1. 路由链接(携带参数): `<Link to='/demo/test?name=tom&age=18'}>详情</Link>`
2. 注册路由(无需声明，正常注册即可): `<Route path="/demo/test" component={Test}/>`
3. 接收参数: `const {search} = this.props.1ocation`
4. 备注:获取到的`search`是`ur1encoded`编码字符串，需要借助`querystring`解析

**传递部分：**

```jsx
{/* 向路由组件传递search参数 */}
<Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
......
{/* 声明接收search参数 无需接收 */}
<Route path="/home/message/detail" component={Detail}/>
```

**接收部分：**

因为search接受的参数没有像params那样自动转换为对象，这里我们使用一个插件解决

1. 安装`yarn add query-string`
2. 引入`import qs from 'query-string'`
3. 使用`qs.parse(值)`   *这里面的值指的是  q=1&a=2  这种*

```jsx
    //   接收search参数
    const {search} = this.props.location;
    const {id,title} = qs.parse(search.slice(1)) //search传递的还有？所以要截取字符串
```

![](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220813165302226.png)

### 3.state参数

- 路由链接(携带参数): `<Link to={{path: '/demo/test',state:{name:'tom',age:18}}>详情</Link>`
- 注册路由(无需声明，正常注册即可): `<Route path="/demo/test" component={Test}/>`
- 接收参数: `this.props.1ocation.state`
- 备注:刷新也可以保留住参数

**传递部分：**

```jsx
{/* 向路由组件传递state参数 */}
<Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
......
{/* 声明接收state参数 无需接收 */}
<Route path="/home/message/detail" component={Detail}/>
```

**接收部分：**

```jsx
//   3.接收state参数
// console.log(this.props);
const {id,title} = this.props.location.state || {}
```

![image-20220813171403454](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220813171403454.png)

## push与replace模式

> 首先先了解一下浏览器历史记录执行原理。浏览器的历史记录执行是以栈的形式，这个栈中存放着你的历史记录，默认是push模式，比如你点击了a连接跳转页面，这个行为就会被push到栈中，堆叠起来。
>
> 当模式变成replace模式，那么你点击的行为就会替换栈中的最上方的历史记录。

**切换方式**

- `replace={true}`

```jsx
{/* 向路由组件传递state参数 */}
<Link replace={true} to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
```

## 编程式路由导航

借助**this.prosp.history**对象上的API对操作路由跳转、前进、后退

- this.prosp.history.push(  )
- this.prosp.history.replace(  )
- this.prosp.history.goBack(  )
- this.prosp.history.goForward(  )
- this.prosp.history.go(  )

```js
 ...
 
replaceShow=(id,title)=>{
    // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
    // replace跳转+携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`);

    // replace跳转+携带search参数
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

    // replace跳转+携带state参数
    this.props.history.replace(`/home/message/detail`,{id,title});
  }
  pushShow=(id,title)=>{
    // push跳转+携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`);

    // push跳转+携带search参数
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

    // replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`,{id,title});
  }

  back=()=>{
    this.props.history.goBack();
  }
  forword=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(2);
  }
...
```

## withRouter的使用

1. withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
2. withRouter的返回值是一个新的组件

> 这部分的代码其实是一个一般组件，一般组件不具备路由组件身上的方法，所以可以通过react自带的`withRouter`来实现转换。
>
> 在暴露这个组件的时候使用`export default withRouter(Header)`将一般组件转换为路由组件

```js
import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class Header extends Component {
  back=()=>{
    this.props.history.goBack()
  }
  forword=()=>{
    this.props.history.goForward();
  }
  go=()=>{
    this.props.history.go(2);
  }
  render() {
    return (
      <div className="row">
            <button onClick={this.back}>回退</button>
            <button onClick={this.forword}>前进</button>
            <button onClick={this.go}>GO</button>
      </div>
    )
  }
}
export default withRouter(Header)
```

## BrowserRouter与HashRouter的区别

1. 底层原理不一-样:
   BrowserRouter使用的是H5的history API，不兼容IE9及以下版本。
   HashRouter使用的是URL的哈希值。
2. url表现形式不一样
   BrowserRouter的路径中没有#,例如: localhost: 3000/demo/test
   HashRouter的路径包含#,例如: localhost: 3000/#/demo/test
3. 刷新后对路由state参数的影响
   (1) BrowserRouter没有任何影响，因为state 保存在history对象中。
   (2) HashRouter刷新后会导致路由state参数的丢失
4. 备注: HashRouter 可以用于解决一些路径错误相关的问题。

# React UI组件库

## 流行的开源React UI组件库

### material-ui(国外)

1. 官网: [链接](http://www.material-ui.com/#/)
2. github: [链接](https://github.com/callemall/material-ui)

### ant-design(国内蚂蚁金服)

1. 官网: [链接](https://ant.design/index-cn)
2. Github: [链接](https://github.com/ant-design/ant-design/)

#### 基本使用

> 这里以ant为例

```jsx
import React, { Component } from 'react'
// 引入你想使用的组件
import {Button,DatePicker,ConfigProvider} from 'antd'
// 引入官方样式
import 'antd/dist/antd.css'
// 引入语言包 官方默认英文
import zhCN from 'antd/es/locale/zh_CN';
// 引入你想使用的icon图标组件
import {
  GithubOutlined
} from '@ant-design/icons'

export default class App extends Component {
  // 根据官方api配置方法
  onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Button type="primary">Primary Button</Button>
        <GithubOutlined style={{fontSize:'50px'}}/>
        <ConfigProvider locale={zhCN}>
          <DatePicker onChange={this.onChange} />
        </ConfigProvider>
      </div>
    )
  }
}
```

![image-20220813204318901](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220813204318901.png)

# redux

## redux理解

### 学习文档。

1. 英文文档: https://redux.js.org/
2. 中文文档: http://www.redux.org.cn/
3. Github: https://github.com/reactjs/redux

### redux是什么

1. redux是一个专门用于做状态管理的IS库(不是react插件库)
2. 它可以用在 react, angular, vue等项目中,但基本与react配合使用.
3. 作用: 集中式管理react应用中多个组件共享的状态

### 什么情况下需要使用redux

1. 某个组件的状态， 需要让其他组件可以随时拿到(共享)。
2. 一个组件需要改变另-个组件的状态(通信) 。
3. 总体原则: 能不用就不用，如果不用比较吃力才考虑使用。

### 原理图

![image-20220813215624467](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220813215624467.png)

## redux的三个核心概念

### action

1. 动作的对象
2. 包含2个属性
   - type：标识属性，值为字符串，唯一，必要属性
   - data：数据属性，值类型任意，可选属性
3. 例子：{type:'ADD_STUDENT',data:{name:'tom',age:18}}

### reducer

1. 用于初始化状态，加工状态
2. 加工时，根据旧的state和action，产生新的state的纯函数

### store

1. 将state，action，reducer联系在一起的对象
2. 如何得到此对象？
   1. `import {createStore} from 'redux'`
   2. `import reducer from './reducers'`
   3. `const store = createStore(reducer)`
3. 此对象的功能?
4. `getState()`: 得到state
5. `dispatch(action)`: 分发action,触发reducer调用，产生新的state
6. `subscribe(listener)`: 注册监听,当产生了新的state时，自动调用

## 安装redux

安装：`yarn add redux`   或者   `npm i redux`

## redux使用

### 迷你版redux

**新建文件redux/store.js**

1. 该文件专门用于暴露一个store对象，整个应用只有一个store对象
2. 引入createStore专门用于创建redux中最为核心的store对象

```js
// 旧版：import {createStore} from 'redux'
// 现在要这样写
import { legacy_createStore as createStore } from "redux"; 

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 暴露store
export default createStore(countReducer);
```

**新建文件redux/count_reducer.js**

1. 该组件用于创建一个为Count组件服务的reducer。reducer的本质就是一个函数
2. reducer函数会接到连个参数分别是：
   1. 之前的状态（preState）
   2. 动作对象（action）

```js
// 组件初始化状态为0
const initState = 0;
export default function countReducer(preState = initState,action) {
    // 从action对象中获取：type，data
    const {type,data} = action;
    // 根据type决定如何加工数据
    switch (type) {
        case 'increment': //如果是加
            return preState + data;
        case 'decrement': //如果是减
            return preState - data;
        default:
            return preState;
    }
}
```

**组件文件中**

初始化的状态并没有存放在该组件，那么组件该如何调用初始状态

- 使用`store.getState()`: 可以获取初始化状态
- 使用`store.dispatch(action)`: 分发action,触发reducer调用，产生新的state
  - action是一个对象{type:'increment',data:value*1}
    - type：用于匹配count_reducer.js中的数据处理
    - data：上方文件中*action*这个对象的属性(其实就是传值)
- 使用`store.subscribe(()=>{})`: 监测redux中状态的变化
  - 当redux中状态发生变化就会触发其中的函数
  - 使用`this.setState({})`更新数据即可改变页面
  - 进阶版：在index.js入口文件中监测:
    - `store.subscribe(()=>{root.render(<App/>)})`

```js
import React, { Component } from 'react'
// 引入store 获取redux中的状态
import store from '../../redux/store';

export default class Count extends Component {
    state={
        carName:'组件自己用的数据(不用在意)'
    }

    // 组件挂载完毕的钩子
    // componentDidMount(){
    //     // 监测redux中状态的变化只要变化就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }


    // 加
    increment = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        // this.setState({count:count + value*1})
        // 通知redux加value
        store.dispatch({type:'increment',data:value*1})
    }
    // 减
    decrement = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        store.dispatch({type:'decrement',data:value*1})
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} =this.selectNumber
        const count =store.getState()
        if (count % 2!== 0) {
            store.dispatch({type:'increment',data:value*1})
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} =this.selectNumber
        // const {count} =this.state
        setTimeout(() => {
            store.dispatch({type:'increment',data:value*1})
        }, 500);
    }

  render() {
    return (
      <div>
        <h1>当前求和：{store.getState()}</h1>&nbsp;
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}
```

### 完整版redux

1. 新增两个文件：
   1. count_action.js专门用于创建action对象
   2. constant.js  放置用于编码疏忽写错action中的type

**count_action.js**

```js
// 该文件专门为Count组件生成action对象

import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction=(data)=> {
    return {type:INCREMENT,data}
}

export const createDecrementAction=(data)=> {
    return {type:DECREMENT,data}
}
```

**constant.js**

```js
// 该模块用于定义action对象中type类型的常量值
// 用于管理的同时防止程序员写错

export const INCREMENT = 'increment';

export const DECREMENT = 'decrement';
```

### 异步action

1. 明确:延迟的动作不想交给组件自身，想交给action
2. 何时需要异步action:想要对状态进行操作，但是具体的数据靠异步任务返回(非必须)
3. 具体编码:
   1. `yarn add redux-thunk`, 并配置在store中
   2. 创建action的函数不再返回一般对象， 而是一个函数， 该函数中写异步任务。
   3. 异步任务有结果后，分发一个同步的action去真正操作数据。


4. 备注:异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action.

**count_action.js**

```js
// 该文件专门为Count组件生成action对象

import {INCREMENT,DECREMENT} from './constant'
// import store from './store'


// 所谓的异步action就是指action的值为Object类型的一般对象
export const createIncrementAction=(data)=> {
    return {type:INCREMENT,data}
}

export const createDecrementAction=(data)=> {
    return {type:DECREMENT,data}
}

// 所谓的异步action就是指action的值为函数
// 异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction=(data,time)=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        },time);
    }
}
```

**store.js**

```js
// 该文件专门用于暴露一个store对象，整个应用只有一个store对象
// 引入createStore专门用于创建redux中最为核心的store对象
// 旧版：import {createStore} from 'redux'
// 现在要这样写
import { legacy_createStore as createStore,applyMiddleware } from "redux";//----

// 引入redux-thunk，用于支持异步action-----------
import thunk from 'redux-thunk';

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 暴露store
export default createStore(countReducer,applyMiddleware(thunk));//------
```

## react-redux

### 模型图：

![image-20220814162257196](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220814162257196.png)

### 基本使用：

这个比较难理解，首先呢，App组件中存放的不再是原本的CountUI组件，而是被Count包裹的容器组件，但这个容器组件不是人为制作的，只通过第三方包`yarn add react-redux`生成的，上代码：

**新建coutainers文件夹,存放Count组件**

> 其实就是app组件中的Count不再是components文件中的UI组件Count，而是经过包装的containers文件下的Count容器组件

```js
// 创建一个容器组件
// 引入Count的UI组件
import CountUI from '../../components/Count'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux';

// 1. mapStateToProps函数返回的是一个对象:
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapStateToProps用于传递状态
const mapStateToProps = (state)=>{
    return {count:state}
}

// 1. mapDispatchToProps函数返回的是一个对象;
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapDispatchToProps用于传递操作状态的方法
const mapDispatchToProps = (dispatch)=>{
    return {
        add:(number)=>{
           // 通知redux执行加法
           dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
           dispatch(createDecrementAction(number))
        },
        addAsync:(number,time)=>{
           dispatch(createIncrementAsyncAction(number,time))
        }
    }
}
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI);
```

但是UI组件该如何拿到初始数据呢？，可以看图，容器组件和UI组件间通过props传递数据，但是我们又没法通过常规手法传递，但同时官方提供了方法：

1. 首先容器组件要获得store
   - 以下代码就可以使得容器组件获得store，那么容器组件中的UI组件不就可以获取到store了吗。（但其实状态是在`count_reducer`中的）

```js
import React, { Component } from 'react'
import Count from './containers/Count'
// 引入store
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store}/>
      </div>
    )
  }
}
```

2. 官方提供的容器组件与UI组件通信的方式
   1. `connect(mapStateToProps,mapDispatchToProps)(CountUI);`

```js
// 1. mapStateToProps函数返回的是一个对象:
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapStateToProps用于传递状态
const mapStateToProps = (state)=>{
    return {count:state}
}

// 1. mapDispatchToProps函数返回的是一个对象;
// 2. 返回的对象中的key就作为传递给UI组件props的key, value就作为传递给UI组件props的value
// 3. mapDispatchToProps用于传递操作状态的方法
const mapDispatchToProps = (dispatch)=>{
    return {
        add:(number)=>{
           // 通知redux执行加法
           dispatch(createIncrementAction(number))
        },
        jian:(number)=>{
           dispatch(createDecrementAction(number))
        },
        addAsync:(number,time)=>{
           dispatch(createIncrementAsyncAction(number,time))
        }
    }
}
```

> 这里面不用store点调用也不用引入是因为已经通过App组件引入过了

3. UI组件要想使用这些方法可是直接在`this.props中找到`

```js
    // 加
    increment = ()=>{
        const {value} =this.selectNumber
        this.props.add(value*1);
        
    }
    // 减
    decrement = ()=>{
        const {value} =this.selectNumber
        this.props.jian(value*1);
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} =this.selectNumber
        if (this.props.count%2!==0) {
            this.props.add(value*1)
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} =this.selectNumber
        this.props.addAsync(value*1,500)
    }
    
    ...
    
    // 当然值也在props中
    <h1>当前求和：{this.props.count}</h1>&nbsp;
```

**coutainers文件夹中Count容器组件精简写法：**

```js
// 创建一个容器组件
// 引入Count的UI组件
import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
import {connect} from 'react-redux';
// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    state=>({count:state}),
    // mapDispatchToProps一般写法
    // dispatch=>({
    //     add:(number)=>{
    //         // 通知redux执行加法
    //         dispatch(createIncrementAction(number))
    //         },
    //     jian:(number)=>{
    //         dispatch(createDecrementAction(number))
    //         },
    //     addAsync:(number,time)=>{
    //         dispatch(createIncrementAsyncAction(number,time))
    //     }  
    // })

    // mapDispatchToProps 对象形式精简写法
    {
        add:createIncrementAction,
        jian:createDecrementAction,
        addAsync:createIncrementAsyncAction
    }
)(CountUI);
```

#### 优化：

##### 1.不再监测

在redux中还需要在入口文件中监测状态的变化改变页面，但是react-redux中就不需要这样

```js
...
// 直接在入口文件监听，当产生了新的state时，自动调用
// 监测redux中状态的改变，如果redux的状态发生了改变，那么重新渲染App组件
store.subscribe(()=>{root.render(<App />)})
...
```

##### 2.多个容器组件传递store

实例是一个容器组件，但是当容器组件多了，就需要一个一个传递，非常不银杏。react-redux提供了一个内置方法解决：

- 引入`store`
- 引入`react-redux`中的`Provider`
- 使用`Provider`包裹App组件
  - 这样就会自动监测App组件中的容器组件并向其传递store

```js
// 引入react核心库
import React from 'react'
// 引入ReactDOM渲染页面
import ReactDOM from 'react-dom/client';

// 引入App组件
import App from './App'

import store from './redux/store'
import {Provider} from 'react-redux'

// 渲染app到页面
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <Provider store={store}>   
      <App/>
   </Provider>
);
```

##### 3.文件优化

上文中的写法过于臃肿，容器组件和UI组件分开写，为何不整合成一个文件？

可以剪切走UI组件的代码，到容器组件中，不需要分开引入

**containers/Count/index.jsx**

```jsx
// 创建一个容器组件
import React, { Component } from 'react'

import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

import {connect} from 'react-redux';
// 使用connect()()创建并暴露一个Count的容器组件

// 定义UI组件
class Count extends Component {
    state={
        carName:'组件自己用的数据(不用在意)'
    }

    // 加
    increment = ()=>{
        const {value} =this.selectNumber
        this.props.add(value*1);
        
    }
    // 减
    decrement = ()=>{
        const {value} =this.selectNumber
        this.props.jian(value*1);
    }
    // 奇数加
    incrementIfOdd = ()=>{
        const {value} =this.selectNumber
        if (this.props.count%2!==0) {
            this.props.add(value*1)
        }
    }
    // 异步加
    incrementAsync = ()=>{
        const {value} =this.selectNumber
        this.props.addAsync(value*1,500)
    }

  render() {
    return (
      <div>
        <h1>当前求和：{this.props.count}</h1>&nbsp;
        <select ref={c=>this.selectNumber=c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再+</button>&nbsp;
        <button onClick={this.incrementAsync}>异步+</button>&nbsp;
      </div>
    )
  }
}
//使用connect()()创建并暴露-个Count的容器组件
export default connect(
    state=>({count:state}),

    // mapDispatchToProps一般写法
    // dispatch=>({
    //     add:(number)=>{
    //         // 通知redux执行加法
    //         dispatch(createIncrementAction(number))
    //         },
    //     jian:(number)=>{
    //         dispatch(createDecrementAction(number))
    //         },
    //     addAsync:(number,time)=>{
    //         dispatch(createIncrementAsyncAction(number,time))
    //     }  
    // })

    // mapDispatchToProps精简写法
    {
        add:createIncrementAction,
        jian:createDecrementAction,
        addAsync:createIncrementAsyncAction
    }
)(Count);
```

#### 总结：

1. 明确两个概念:

   - UI组件:不能使用任何redux的api,只负责页面的呈现、交互等。
   - 容器组件:负贵和Iredux通信，将结果交给UI组件。
2. 如何创建一个容器组件一靠react-redux的connect函数
   - connect (mapStateToProps , mapDispatchToProps ) (UI组件)
     - mapStateToProps:映射状态，返回值是一个对象
     - mapDispatchToProps:映射操作状态的方法，返回值是一个对象
3. 备注1:容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
4. 备注2: mapDispatchToProps也可以是一个对象

### 多组件数据共享

上文中都是一个组件获取redux中的数据或者状态，并不能体现出redux的强大性，我们可以再次定义一个新的组件，让这个组件可以获得到Count组件中的状态，Count也可以获取到这个组件的状态。

![image-20220814195342777](https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/image-20220814195342777.png)

#### 创建actions/person.js文件

```js
import {ADD_PERSON} from '../constant' //单纯是使用变量的文件避免出错的

export const createAddPersonAction = personObj =>(
    {type:ADD_PERSON,data:personObj}
)
```

#### 创建reducers/person.js文件

```js
import { ADD_PERSON } from "../constant";

// 初始化人的列表
const initState = [{id:'001',name:'tom',age:18}];
export default function personReducer(preState = initState,action) {
    const {type,data} = action;
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            return [data,...preState]
        default:
            return preState
    }
}
```

#### 改变store文件(重点)

上文中我们仅仅只是使用了一个容器组件，但是这个是多组件共享数据，写法大不相同：

- 引入`combineReducers`从redux
- 引入为Person组件服务的reducer
- 汇总所有的reducer变为一个总的reducer

```js
// 该文件专门用于暴露一个store对象，整个应用只有一个store对象

// 引入createStore专门用于创建redux中最为核心的store对象
// 旧版：import {createStore} from 'redux'
// 1.现在要这样写
import { legacy_createStore as createStore,applyMiddleware,combineReducers } from "redux"; 

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

// 引入为Count组件服务的reducer
import countReducer from './reducers/reducer'
// 2.引入为Person组件服务的reducer
import personReducer from './reducers/person'

// 3.汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    count:countReducer,
    person:personReducer
});

// 4.暴露store
export default createStore(allReducer,applyMiddleware(thunk));
```

#### 如何获取其他组件的状态？

就拿Person组件为例：

```jsx
import React, { Component } from 'react'

import {nanoid} from 'nanoid'

import {connect} from 'react-redux'

//-----------引入action文件中的action对象----------
import {createAddPersonAction} from '../../redux/actions/person'

class Person extends Component {
    addPerson=()=>{
        const name = this.nameNode.value;
        const age = this.ageNode.value;
        const personObj={
          id:nanoid(),
          name,
          age
        }
        this.props.add(personObj);
        this.nameNode.value='';
        this.ageNode.value='';
    }
  render() {
    return (
      <div>
        <h2>我是Person组件,上方组件求和为{this.props.he}</h2>
        <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字'/>
        <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄'/>
        <button onClick={this.addPerson}>添加</button>
        <ul>
            {
              this.props.peops.map((p)=>{
                return <li key={p.id}>{p.name}-----{p.age}</li>
              })
            }
        </ul>
      </div>
    )
  }
}
export default connect(
  // 这个state中放的就是redux中的公共状态
  state=>({
      peops:state.person, // 映射状态
      he:state.count
  }),
  {
      add:createAddPersonAction //映射操作状态的方法
  }
)(Person)

```

### 纯函数

1. 一类特别的函数:只要是同样的输入(实参),必定得到同样的输出(返回)
2. 必须遵守以下一些约束
  3. 不得改写参数数据。

  4. 不会产生任何副作用， 例如网络请求，输入和输出设备

  5. 不能调用Date.now()或者Math.random()等不纯的方法

6. redux 的 reducer 函数必须是一个纯函数

## redux开发者工具

(1)安装：`yarn add redux-devtools-extension`
(2)store中进行配置

```js
import {composeWithDevTools} from ' redux-devtools-extension
const store = createStore(allReducer , composeWithDevTools( applyMiddleware(thunk)))
```

# 项目打包

当一个react项目完成后该如何上线呢？其实真正的开发中我们只需要将项目打包后交给后端即可，这里我们使用一个第三方包serve来临时搭建一台服务器。

安装：`npm i serve -g`

1. 先执行打包指令`npm run build`
2. 会生成一个build文件，这个build就是你发给后端的文件
3. 执行`serve build`指定build文件为一个服务器
4. 这时候你的页面就可以呈现出来了