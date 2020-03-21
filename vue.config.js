module.exports = {
    runtimeCompiler: true,
    publicPath: './',
    devServer: {
        port: 8888
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}