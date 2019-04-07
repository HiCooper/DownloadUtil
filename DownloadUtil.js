let fs = require('fs');
let http = require("https");
let url = require('url');
let ProgressBar = require('./ProgressBar');
let pb = new ProgressBar('下载进度', 50);
function download(targetUrl, savePath) {
    http.get(targetUrl, function (res) {
        let completed = 0;
        let contentLength = parseInt(res.headers['content-length']);
        //总长度		
        console.log('总长度:', contentLength);
        res.setEncoding("binary");
        let file_name = url.parse(targetUrl).pathname.split('/').pop();
        let file = fs.createWriteStream(savePath + file_name);
        res.on("data", function (chunk) {
            file.write(chunk);
            completed += chunk.length;
            // 更新进度条
            pb.render({ completed: completed, total: contentLength });
        });
        res.on('end', function () {
            file.end();
            console.log(`${file_name} downloaded to ${download_path}\n`);
        })
    });
}
// 模块导出
module.exports = download;