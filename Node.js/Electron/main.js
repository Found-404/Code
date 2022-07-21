// 1、引入electron模块
let electron = require('electron');

// 2、创建electron引用
let app = electron.app;

// 3、创建窗口引用
let BrowserWindow = electron.BrowserWindow;

// 4、声明要打开的主窗口
let mainWindow = null;

// 获取ipc对象
const ipc = electron.ipcMain;


app.on('ready', () => {

    // 设置窗口大小
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        resizable: false, //能否改变窗体大小
        // 'accept-first-mouse': true,
        // frame: false,
        // show: false, //是否显示界面 先设置否
        //icon:'3.ico',
        hasShadow: true,
        frame: false, //隐藏窗口默认UI
        transparent: true, // 窗口透明
        webPreferences: {
            nodeIntegration: true, //允许渲染进程使用node.js
            contextIsolation: false //允许渲染进程使用node.js
        }
    });

    // 隐藏顶部菜单
    mainWindow.setMenu(null);

    // 加载哪个页面
    mainWindow.loadFile('index.html');

    // 打开开发者工具
    // mainWindow.webContents.openDevTools();

    // 监听关闭事件,把主窗口设置为null，否则内存占用越来越多
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    //接收关闭指令
    ipc.on('window-close', function() {
        mainWindow.close();
    });

    // 接收最小化指令
    ipc.on('window-min', function() {
        mainWindow.minimize();
    });

    //接收最大化指令
    ipc.on('window-max', function() {
        if (mainWindow.isMaximized()) {
            mainWindow.restore();
        } else {
            mainWindow.maximize();
        }
    });

});