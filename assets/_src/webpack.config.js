const path = require("path");
const webpack = require("webpack");

module.exports = {
    node: {
        fs: "empty",
        tls: "empty",
        net: "empty",
    },
    entry: {
        global: "./src/js/global.js",
        main: "./src/js/main.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/",
    },

    optimization: {
        //minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    enforce: true,
                },
            },
        },
        minimize: false,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [["@babel/preset-env", { modules: false }]],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader", options: { url: false }
                    },
                ],
            },
        ],
    },

    resolve: {
        alias: {
            "%sections%": path.resolve(__dirname, "src/blocks/sections"),
            "%molecules%": path.resolve(__dirname, "src/blocks/_ui/molecules"),
            "%atoms%": path.resolve(__dirname, "src/blocks/_ui/atoms"),
        },
    },
};
