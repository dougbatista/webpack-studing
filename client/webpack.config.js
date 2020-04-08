const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = []

process.env.NODE_ENV == "prod" ?
    plugins.push(new babiliPlugin()) : false;

console.log(plugins)

module.exports = {
    entry: './app-src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins
}

/**
 * { entry } - arquivo de entrada
 * { output.filename } - o arquivo que vai ser gerado após o webpack ter compilado os arquivos.
 * Ele será disponibilizado pros browseres interpretarem;
 * { module.rules } - test: os arquivos que serão testados pelo webpack;
 *                  - exclude: os arquivos/pastas que não serão interpretados pelo webapck
 * { loader } - permite o webpack transpilar arquivos em JS
 */