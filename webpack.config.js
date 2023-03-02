const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",  // 진입(시작) 파일
    output: {
        path: path.join(__dirname, "dist"),  // 번들파일 저장위치
        filename: "app.bundle.js"  // 기본파일명 : main.js
    },
    module: {  // 각 파일에 대한 세부적인 번들링 작업 정의 (바벨 트랜스파일링만 작성했음)
        rules: [{ test: /\.js$/,   // .js 로 끝나는 파일에 대한 규칙 정의
            exclude: /node_modules/, loader: "babel-loader" }]
    },
    devServer: {  // 서버 구동시 관련 내용 설정
        static: path.join(__dirname, 'dist'),
        open: true,  // 자동으로 브라우져 실행
        hot: true,   // 수정사항 발생시 브라우져에 즉시 반영
    },
    plugins: [   // dist 안에 index.html 자동 생성
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
    ],
};
