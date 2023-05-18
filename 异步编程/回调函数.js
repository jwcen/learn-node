// 通过函数参数的方式将一个函数传递到另一个函数中，参数函数就是回调函数。

// function A() {
//     console.log('A is running');
// }

// function B(callback) {
//     console.log('B start');
//     callback();
//     console.log('B end');
// }

// B(A); 

// 回调函数中传递参数
function A(arg) {
    console.log('A is runing');
    console.log(`A's arg: `, arg);
}

function B(callback) {
    console.log('B start');
    callback('我是B函数传递给A的参数'); 
    console.log('B end');
}

B(A); 

// 回调函数在异步编程中的应用
const fs = require('fs'); 

fs.readFile('./index.html', function (error, data) {
    if (error) {
        console.log('发生了错误：', error);
        return;
    }
    console.log(data);
});