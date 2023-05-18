const url = 'https://www.baidu.com'; 

function log(msg) {
    console.log(msg + url);
}

// module.exports.endPoint = url; 
// module.exports.log = log; 
// module.exports = log; 

// 有时在一个模块中只会导出一个成员，为方便其他模块使用
module.exports = function (msg) {
    console.log(msg);
}