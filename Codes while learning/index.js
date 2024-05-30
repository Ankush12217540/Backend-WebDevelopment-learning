
const lib = require('./lib.js')
const os = require('os')
const path=require('path')
const fs= require('fs');
console.log(lib.sum(2,325), lib.diff(522,2));
console.log(lib);
console.log(os.type());
console.log(os.version());
console.log(__dirname);
console.log(os.homedir());
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log("Hello , i an ankush kumar, this is live server and i am uising it confidently");
console.log(os.cpus().length);