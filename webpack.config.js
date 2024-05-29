const path = require("path")
const  htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: './src/script/main.js', 
    output: {
        filename: 'main.js', 
        path : path.resolve(__dirname , 'dist'),
        assetModuleFilename: '[name][ext]',
        clean: true,
    }, 
    optimization: {
        concatenateModules: false
      },
    plugins: [
        new htmlWebpackPlugin( {
            template : './src/index.html'
        })
    ] , 
    module : {
        rules: [
            {
            test: /\.scss$/, 
            use : [ "style-loader" , "css-loader" , "sass-loader"]
            } , 
            {
                test: /\.(jpg|png|svg)$/,
                type : 'asset/resource'
            },

                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                },
        ]
    },
}