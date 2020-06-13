const path = require('path');

module.exports = {
    mode:"development",
    devServer:{
        historyApiFallback:true
    },
    entry:path.resolve(__dirname, './index.js'),
    module:{
        rules:[
            {
                test:/\.js$/,
                use:"babel-loader"
            }
        ]
    },
    output:{
        filename:"main.js"
    }

}