module.exports = {
    resolve: {
        extensions: [".js",".es6"],
        alias: {
            vue$: "vue/dist/vue.js"
        }
    },
    entry: {
        "01" : "./es/01.es6",
        "02" : "./es/02.es6",
        "03" : "./es/03.es6",
        "04" : "./es/04.es6",
        "05" : "./es/05.es6",
        "06" : "./es/06.es6",
        "07" : "./es/07.es6",
        "08" : "./es/08.es6",
        "09" : "./es/09.es6",
    },
    output: {
        filename: './dist/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.es6$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    }
}