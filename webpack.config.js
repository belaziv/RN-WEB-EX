const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {    
    name: 'myapp',
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path:path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|ts)x$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ]
    },    
    resolve: {
        modules: ['dist', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js']
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
    devServer: {
        port: 9090,
    }
}
