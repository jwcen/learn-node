const fs = require('fs'); 

const files = fs.readdirSync("./"); // [ 'app.js', 'file sys模块.js', 'logger.js', 'path模块.js' ]
console.log(files);

fs.readdir('./', function(error, files) {
    console.log(error); // null | Error {}
    console.log(files); // ['app.js', ...]
});