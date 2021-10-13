const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({title: '实战 WASM Rust'})
    ],
    // 实验特性
    // BREAKING CHANGE: Since webpack 5 WebAssembly is not enabled by default and flagged as experimental feature.
    // You need to enable one of the WebAssembly experiments via 'experiments.asyncWebAssembly: true' (based on async modules) or 'experiments.syncWebAssembly: true' (like webpack 4, deprecated).
    experiments: {
        asyncWebAssembly: true
    }
}