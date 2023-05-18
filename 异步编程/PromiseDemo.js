// 解决回调地狱
// Promise可理解为用于包裹异步 API 的容器，当容器中的异步 API 执行完成后，
// Promise 允许我们在容器的外面获取异步 API 的执行结果，从而避免回调函数嵌套。

// Promise 翻译为承若，表示它承若帮我们做一些事情，
// 既然它承若了它就要去做，做就会有一个过程，就会有一个结果，结果要么是成功要么是失败。

/**
 * Promise 中有三种状态, 分别为**等待(pending)，成功(fulfilled)，失败(rejected)。
 * 默认状态为等待，等待可以变为成功，等待可以变为失败。
 * 状态一旦更改不可改变，成功不能变回等待，失败不能变回等待，成功不能变成失败，失败不能变成成功。
 */

const fs = require('fs'); 

const promise = new Promise(function (resolve, reject) {
    fs.readFile('../package.json', 'utf-8', function (error, data) {
        if (error) {
            // 等待 => 失败
            reject(error);
        } else {
            // 等待=>成功
            resolve(data); 
        }
    });
});

promise
    .then(function (data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })


console.log('// Promise链式调用');
function readFile(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, 'utf-8', function(error, data) {
            if (error) {
                return reject(error); 
            }
            resolve(data); 
        });
    });
}

readFile('../模块/app.js')
    .then(function (x) {
        console.log(x);
        return readFile('../模块/logger.js');
    })
    .then(function (y) {
        console.log(y);
        return readFile('../模块/path模块.js');
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally( function() {
        console.log('finally...');
    });


console.log('Promise.all 并发异步操作');
Promise.all([
    readFile('../模块/logger.js'),
    readFile('../模块/path模块.js'),
]).then(function (data) {
    console.log(data);
});