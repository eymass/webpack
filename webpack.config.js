const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const htmlConfig = {
    title: "Webpack 5",
    filename: "index.html",
    inject: "body",
    scriptLoading: "defer",
    favicon: "favicon.ico",
    meta: { viewport: "width=device-width,initial-scale=1" },
    template: "./src/template.html"
};

module.exports = function(env, argv) {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        mode: "development",
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: "babel-loader",
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/[name].[ext]'
                    }
                }
            ],
        },
        plugins: [
                new CleanWebpackPlugin(),
                new HtmlWebpackPlugin(htmlConfig)
        ]
    };
};
