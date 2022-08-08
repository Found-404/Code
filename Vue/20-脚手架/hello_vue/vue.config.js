const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
});

module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
        },
    },
    // 语法检查关闭
    lintOnSave: false,

    // 开启代理服务器 方式1
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }

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


};