# tailwindcss的安装及使用
## 安装依赖包，
`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

- 初始化，生成 tailwind.config.js 文件，
`npx tailwindcss init`
- 生成 tailwind.css 文件，
`npx tailwindcss-cli@latest build -o tailwind.css`
- 新建 index.html 文件，将tailwind.css文件引入，然后可以使用Live Server启动index.html即可

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="tailwind.css">
    <title>tailwindcss Demo</title>
</head>
<body>
    <div class="text-sm text-green-400">测试</div>
</body>
</html>
```
使用方法如下，
可以先在vs code中安装Tailwind CSS IntelliSense插件，这样在写代码时就会有代码提示，

举例来说，flex 表示为CSS display:flex；justify-center表示为CSS justify-content:center；object-fill 表示为CSS object-fit: fill;；z-10 表示为CSS z-index: 10;

```html
<div class="text-sm text-green-400">测试</div>
	<div class="container flex justify-center" style="width:100%;">
    <img class="object-fill z-10" src="./img/avatar.png" />
</div>
```