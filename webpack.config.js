var path = require('path');

module.exports = {
    entry: './src/Component_CompileScript.tsx',
    output: {
        filename: "React_CompiledScript.js",
        library: "NAME_OF_REACT_MASTER_FOLDER"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    target: 'web',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, 'src'),
                ],
                test: /\.(tsx|ts)?$/,
                use: 'ts-loader',
            },
            {
                exclude: /node_modules/,
                include: [
                    path.join(__dirname, 'src'),
                ],

                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: [
                            ['@babel/preset-env',
                                {
                                    corejs: { version: '3.1' },
                                    useBuiltIns: 'usage',
                                }],
                            ['@babel/preset-react'],
                        ]
                    },
                }
            },
            {
                test: /(\.css|.scss)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }
};