module.exports = {
    devServer: {
          host: 'localhost',
          port: 8002,
        proxy: {
            '/api': {
                target: 'http://123.56.237.30:8001',
                changeOrigin: true,  // 跨域
                pathRewrite: {
                    '/api': ''
                }
            }
        }

    }
}