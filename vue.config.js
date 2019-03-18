module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? console.log(process.env.NODE_ENV+' prod')
    : console.log(process.env.NODE_ENV+' dev'),
    productionSourceMap: false,
    configureWebpack: {
        devtool: false,
        // devtool: 'source-map'
    }
}

