# React后台管理目

## 配置项目

## CMS后台管理系统创建

本项目采用React+Ant Design+TypeScript开发，React主要使用Function Component的形式做开发，结合路由与请求实现。

### 1.创建React项目

由于项目结合ts与antd开发，因此请使用以下方式创建项目并安装依赖：

```shell
# 创建名为cms-manage的项目
$ npx create-react-app cms-manage --template typescript
# 或者
$ yarn create react-app cms-manage --template typescript

# 添加antd
npm install antd --save
# 或
yarn add antd

# 添加axios
npm install axios --save
# 或
yarn add axios
```

清空src下所有的内容，并且新建App.tsx与index.tsx，代码如下：

```tsx
// App.tsx
import React from "react";

export default function App() {
  return (
    <div>
      <h2>App</h2>
    </div>
  );
}

// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
```

先把项目跑起来：

```shell
$ npm run start
```

看到跑起来的界面即可。

[![image-20211206091130083](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfylnqtdj31hc0q13z8.jpg)](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfylnqtdj31hc0q13z8.jpg)

### 2.Antd组件

打开Antd的官网：[https://ant.design/index-cn (opens new window)](https://ant.design/index-cn)。

在App.tsx中：

```tsx
import React, { FC } from "react";
import { Button } from 'antd';

const App: FC = () => (
  <div>
    <Button type="primary">Button</Button>
  </div>
)

export default App; 
```

看到蓝色按钮代表成功：[![image-20211206092850276](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfymsgwzj302300w0sh.jpg)](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfymsgwzj302300w0sh.jpg)

### 3.解包

解包之前必须做Git提交

#### a. Git提交

```shell
$ git add .
$ git commit -m 'xxx'
$ git remote origin xxxx
$ git push origin master
```

[![image-20211206090942052](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfym9ku9j30y70i8di2.jpg)](https://tva1.sinaimg.cn/large/008i3skNgy1gxdfym9ku9j30y70i8di2.jpg)

#### b. 解包

```shell
$ npm run eject 
```

解包后项目根目录出现config文件夹，代表解包成功。

### 4.配置Less

#### a. 安装Less

```shell
$ npm install less less-loader@6.0.0 --save-dev
# 或
$ yarn add less less-loader@6.0.0
```

#### b. Webpack配置

找到 `webpack.config.js` ，搜索 `sassModuleRegex` 后，在其下方添加：

```js
module: {
    ...,
    // less加载器 
    {
        test: /\.less$/,
        use: getStyleLoaders(
            {
                //暂不配置
            },
            'less-loader'
        ),
    },
}
```

修改了配置文件，记得重新 `yarn start` 哦！

#### c. Less测试

删掉 `index.tsx` 中的 `antd.css` 引入，在src下新建 `App.less`：

```less
@import '~antd/dist/antd.css';

@bg: #efefef;

body{
    background: @bg;
}

#root{
    font-size: 14px;
    font-family: NotoSansHans;
    color: #333333;
}

a{
    color: #333333;
    text-decoration: none;
}
```

> 注意：以上顺便把文字三属性等基本配置写了

然后在 `App.tsx` 中引入：

```tsx
import "./App.less";
```

打开看到页面样式发生变化，即代表Less测试成功。

### 5.tsconfig

打开 `tsconfig.json`，修改下面出现的字段：

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "baseUrl": "./src",
    "jsx": "preserve"
  }
}
```

> baseUrl配置其指向src，所有的相对路径都可以直接从src下的文件或文件夹写起，如：
>
> ```tsx
> // 原本的引入
> import App from './App'
> 
> // 现在的引入
> import App from 'App'
> ```
